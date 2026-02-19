import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import styles from "./progressTracker.module.css";

// Types
interface StepData {
  id: string;
  number: number;
  title: string;
  checkpoint: string;
}

interface ProgressContextType {
  completedSteps: Set<string>;
  expandedStep: string | null;
  toggleComplete: (stepId: string) => void;
  toggleExpand: (stepId: string) => void;
  registerStep: (step: StepData) => void;
  steps: StepData[];
}

const ProgressContext = createContext<ProgressContextType | null>(null);

function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("Step must be used within a ProgressTracker");
  }
  return context;
}

function getStorageKey(trackerId: string): string {
  return `progress-tracker-${trackerId}`;
}

// Chevron Icon
function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ProgressTracker Props
interface ProgressTrackerProps {
  id: string;
  title?: string;
  children: React.ReactNode;
}

function ProgressTracker({
  id,
  title = "Progress",
  children,
}: ProgressTrackerProps) {
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());
  const [steps, setSteps] = useState<StepData[]>([]);
  const [expandedStep, setExpandedStep] = useState<string | null>(null);
  const [initialized, setInitialized] = useState(false);

  // Load saved progress
  useEffect(() => {
    try {
      const saved = localStorage.getItem(getStorageKey(id));
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setCompletedSteps(new Set(parsed));
        }
      }
    } catch {
      // Ignore errors
    }
  }, [id]);

  // Save progress
  useEffect(() => {
    try {
      localStorage.setItem(
        getStorageKey(id),
        JSON.stringify(Array.from(completedSteps))
      );
    } catch {
      // Ignore errors
    }
  }, [id, completedSteps]);

  // Set first incomplete step as expanded on initial mount only
  useEffect(() => {
    if (steps.length > 0 && !initialized) {
      const firstIncomplete = steps.find((s) => !completedSteps.has(s.id));
      if (firstIncomplete) {
        setExpandedStep(firstIncomplete.id);
      }
      setInitialized(true);
    }
  }, [steps, completedSteps, initialized]);

  // Toggle step completion
  const toggleComplete = useCallback(
    (stepId: string) => {
      const wasCompleted = completedSteps.has(stepId);

      setCompletedSteps((prev) => {
        const next = new Set(prev);
        if (next.has(stepId)) {
          next.delete(stepId);
        } else {
          next.add(stepId);
        }
        return next;
      });

      // If completing, collapse and move to next incomplete
      if (!wasCompleted) {
        const currentIndex = steps.findIndex((s) => s.id === stepId);
        const nextIncomplete = steps.find(
          (s, i) => i > currentIndex && !completedSteps.has(s.id) && s.id !== stepId
        );
        setExpandedStep(nextIncomplete?.id || null);
      }
    },
    [completedSteps, steps]
  );

  // Toggle expand/collapse
  const toggleExpand = useCallback((stepId: string) => {
    setExpandedStep((prev) => (prev === stepId ? null : stepId));
  }, []);

  const registerStep = useCallback((step: StepData) => {
    setSteps((prev) => {
      const exists = prev.find((s) => s.id === step.id);
      if (exists) return prev;
      const next = [...prev, step].sort((a, b) => a.number - b.number);
      return next;
    });
  }, []);

  const handleReset = useCallback(() => {
    setCompletedSteps(new Set());
    if (steps.length > 0) {
      setExpandedStep(steps[0].id);
    }
  }, [steps]);

  const completedCount = Array.from(completedSteps).filter((s) =>
    steps.find((step) => step.id === s)
  ).length;
  const progress =
    steps.length > 0 ? Math.round((completedCount / steps.length) * 100) : 0;

  const contextValue = useMemo(
    () => ({
      completedSteps,
      expandedStep,
      toggleComplete,
      toggleExpand,
      registerStep,
      steps,
    }),
    [completedSteps, expandedStep, toggleComplete, toggleExpand, registerStep, steps]
  );

  return (
    <ProgressContext.Provider value={contextValue}>
      <div className={styles.tracker}>
        {/* Left Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarInner}>
            {/* Progress Header */}
            <div className={styles.progressHeader}>
              <span className={styles.progressTitle}>{title}</span>
              <span className={styles.progressPercent}>{progress}%</span>
            </div>
            
            <div className={styles.progressBarContainer}>
              <div
                className={styles.progressBar}
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className={styles.progressText}>
              {completedCount} of {steps.length} completed
            </p>

            {/* Step List */}
            <ul className={styles.stepList}>
              {steps.map((step) => {
                const isCompleted = completedSteps.has(step.id);
                const isExpanded = expandedStep === step.id;

                return (
                  <li
                    key={step.id}
                    className={`${styles.stepListItem} ${
                      isExpanded ? styles.stepListItemActive : ""
                    } ${isCompleted ? styles.stepListItemCompleted : ""}`}
                    onClick={() => toggleExpand(step.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleExpand(step.id);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    <span className={styles.stepBadge}>
                      {isCompleted ? "✓" : step.number}
                    </span>
                    <span className={styles.stepListTitle}>{step.title}</span>
                  </li>
                );
              })}
            </ul>

            {/* Reset Button */}
            {completedCount > 0 && (
              <button
                type="button"
                className={styles.resetButton}
                onClick={handleReset}
              >
                Reset progress
              </button>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <div className={styles.content}>{children}</div>
      </div>
    </ProgressContext.Provider>
  );
}

// Step Props
interface StepProps {
  id: string;
  number: number;
  title: string;
  checkpoint: string;
  children: React.ReactNode;
}

function Step({ id, number, title, checkpoint, children }: StepProps) {
  const { completedSteps, expandedStep, toggleComplete, toggleExpand, registerStep } =
    useProgress();

  const isCompleted = completedSteps.has(id);
  const isExpanded = expandedStep === id;

  useEffect(() => {
    registerStep({ id, number, title, checkpoint });
  }, [id, number, title, checkpoint, registerStep]);

  const handleHeaderClick = () => {
    toggleExpand(id);
  };

  const handleToggleComplete = useCallback(() => {
    toggleComplete(id);
  }, [toggleComplete, id]);

  return (
    <div
      className={`${styles.step} ${isExpanded ? styles.stepExpanded : ""} ${
        isCompleted ? styles.stepCompleted : ""
      }`}
    >
      {/* Clickable Header */}
      <div
        className={styles.stepHeader}
        onClick={handleHeaderClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleHeaderClick();
          }
        }}
        aria-expanded={isExpanded}
      >
        <div className={styles.stepNumber}>{isCompleted ? "✓" : number}</div>
        <div className={styles.stepHeaderContent}>
          <h3 className={styles.stepTitle}>{title}</h3>
          {!isExpanded && (
            <p className={styles.stepCheckpointPreview}>{checkpoint}</p>
          )}
        </div>
        <div
          className={`${styles.stepArrow} ${
            isExpanded ? styles.stepArrowExpanded : ""
          }`}
        >
          <ChevronIcon />
        </div>
      </div>

      {/* Collapsible Body */}
      <div
        className={`${styles.stepBody} ${
          isExpanded ? styles.stepBodyExpanded : ""
        }`}
      >
        <div className={styles.stepContent}>
          {children}

          {/* Checkpoint with checkbox */}
          <label
            className={`${styles.checkpoint} ${
              isCompleted ? styles.checkpointCompleted : ""
            }`}
          >
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                checked={isCompleted}
                onChange={handleToggleComplete}
              />
              <span className={styles.checkboxCustom} />
            </div>
            <span className={styles.checkpointLabel}>
              <strong>Mark as done:</strong> {checkpoint}
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

ProgressTracker.Step = Step;

export default ProgressTracker;
