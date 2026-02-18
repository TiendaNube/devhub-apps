---
title: Best Practices
---

# Best Practices

## 1. Use Theme Tokens When Possible

Prefer theme tokens over hardcoded values to maintain consistency:

```typescript
// ✅ Good - uses theme tokens
const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.color.accent,
    borderRadius: theme.border.radius,
  },
});

// ❌ Avoid - hardcoded values
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007bff",
    borderRadius: "4px",
  },
});
```

## 2. Combine Styling Approaches

Use different approaches for different use cases:

```typescript
// Reusable styles with StyleSheet
const baseStyles = StyleSheet.create({
  card: {
    backgroundColor: theme.color.main.background,
    borderRadius: theme.border.radius,
    padding: "16px",
  },
});

// Static styles with styled()
const HighlightCard = styled(box)`
  background-color: ${theme.color.accent};
  border: 2px solid ${theme.border.color};
`;
```

## 3. Responsive Design

Use media queries for responsive layouts:

```typescript
const ResponsiveContainer = styled(box)`
  padding: 16px;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 24px;
    flex-direction: row;
  }
`;
```

## 4. CSS Custom Properties

Use CSS custom properties for dynamic values:

```typescript
const DynamicBox = styled(box)`
  --custom-color: #ff6b6b;
  --custom-size: 16px;

  background-color: var(--custom-color);
  padding: var(--custom-size);
`;
```
