/**
 * Tests for landing-page.md documentation files
 * Validates content structure, required sections, and translations
 */

const fs = require('fs');
const path = require('path');

describe('Landing Page Documentation', () => {
  const docsPath = path.join(__dirname, '../../docs/applications/landing-page.md');
  const enDocsPath = path.join(__dirname, '../../i18n/en/docusaurus-plugin-content-docs/current/applications/landing-page.md');
  const esDocsPath = path.join(__dirname, '../../i18n/es/docusaurus-plugin-content-docs/current/applications/landing-page.md');

  describe('Portuguese (Default) Version', () => {
    let content;

    beforeAll(() => {
      content = fs.readFileSync(docsPath, 'utf-8');
    });

    test('should exist', () => {
      expect(fs.existsSync(docsPath)).toBe(true);
    });

    test('should have frontmatter with title', () => {
      expect(content).toMatch(/^---\s*\n/);
      expect(content).toMatch(/title:\s*Landing Page/);
      expect(content).toMatch(/\n---\s*\n/);
    });

    test('should have main heading about Landing Page', () => {
      expect(content).toMatch(/## :dart: Funções Essenciais da Landing Page/);
    });

    test('should describe clarity and direction section', () => {
      expect(content).toMatch(/### 1\. Clareza e Direcionamento do Próximo Passo/);
      expect(content).toContain('guia visual');
      expect(content).toContain('merchant');
    });

    test('should describe onboarding preparation section', () => {
      expect(content).toMatch(/### 2\. Preparação para o Onboarding Acompanhado/);
      expect(content).toContain('pré-cadastro');
    });

    test('should describe resource centralization section', () => {
      expect(content).toMatch(/### 3\. Centralização de Recursos/);
      expect(content).toContain('hub temporário');
      expect(content).toContain('FAQs');
    });

    test('should have benefits section', () => {
      expect(content).toMatch(/## :sparkles: Benefícios do Fluxo/);
      expect(content).toContain('Aumento da taxa de ativação');
      expect(content).toContain('Qualificação antecipada');
      expect(content).toContain('Experiência profissional e confiável');
    });

    test('should use proper markdown formatting', () => {
      // Check for proper bullet points
      expect(content).toMatch(/^-\s+\*\*/m);
      // Check for bold text usage
      expect(content).toMatch(/\*\*[^*]+\*\*/);
    });

    test('should mention key concepts', () => {
      const keyConcepts = ['merchant', 'onboarding', 'Landing Page', 'parceiro'];
      keyConcepts.forEach(concept => {
        expect(content).toContain(concept);
      });
    });

    test('should not contain placeholder text', () => {
      expect(content).not.toMatch(/TODO/i);
      expect(content).not.toMatch(/FIXME/i);
      expect(content).not.toMatch(/\[TBD\]/i);
    });

    test('should have proper emoji usage in headings', () => {
      expect(content).toContain(':dart:');
      expect(content).toContain(':sparkles:');
    });
  });

  describe('English Translation', () => {
    let content;

    beforeAll(() => {
      content = fs.readFileSync(enDocsPath, 'utf-8');
    });

    test('should exist', () => {
      expect(fs.existsSync(enDocsPath)).toBe(true);
    });

    test('should have frontmatter with title', () => {
      expect(content).toMatch(/^---\s*\n/);
      expect(content).toMatch(/title:\s*Landing Page/);
      expect(content).toMatch(/\n---\s*\n/);
    });

    test('should have main heading in English', () => {
      expect(content).toMatch(/## :dart: Essential Functions of the Landing Page/);
    });

    test('should describe clarity and direction section in English', () => {
      expect(content).toMatch(/### 1\. Clarity and Direction of the Next Step/);
      expect(content).toContain('visual guide');
      expect(content).toContain('merchant');
    });

    test('should describe onboarding preparation section in English', () => {
      expect(content).toMatch(/### 2\. Preparation for Assisted Onboarding/);
      expect(content).toContain('pre-registration');
    });

    test('should describe resource centralization section in English', () => {
      expect(content).toMatch(/### 3\. Resource Centralization/);
      expect(content).toContain('temporary hub');
      expect(content).toContain('FAQs');
    });

    test('should have benefits section in English', () => {
      expect(content).toMatch(/## :sparkles: Benefits of the Flow/);
      expect(content).toContain('Increased activation rate');
      expect(content).toContain('Early qualification');
      expect(content).toContain('Professional and trustworthy experience');
    });

    test('should use proper English terminology', () => {
      const englishTerms = ['merchant', 'onboarding', 'Landing Page', 'partner'];
      englishTerms.forEach(term => {
        expect(content).toContain(term);
      });
    });

    test('should not contain Portuguese text', () => {
      // These are specific Portuguese words that shouldn't appear in English version
      expect(content).not.toContain('parceiro');
      expect(content).not.toContain('aplicativo');
      expect(content).not.toContain('próximos');
    });
  });

  describe('Spanish Translation', () => {
    let content;

    beforeAll(() => {
      content = fs.readFileSync(esDocsPath, 'utf-8');
    });

    test('should exist', () => {
      expect(fs.existsSync(esDocsPath)).toBe(true);
    });

    test('should have frontmatter with title', () => {
      expect(content).toMatch(/^---\s*\n/);
      expect(content).toMatch(/title:\s*Landing Page/);
      expect(content).toMatch(/\n---\s*\n/);
    });

    test('should have main heading in Spanish', () => {
      expect(content).toMatch(/## :dart: Funciones Esenciales de la Landing Page/);
    });

    test('should describe clarity and direction section in Spanish', () => {
      expect(content).toMatch(/### 1\. Claridad y Dirección del Próximo Paso/);
      expect(content).toContain('guía visual');
      expect(content).toContain('merchant');
    });

    test('should describe onboarding preparation section in Spanish', () => {
      expect(content).toMatch(/### 2\. Preparación para el Onboarding Acompañado/);
      expect(content).toContain('pre-registro');
    });

    test('should describe resource centralization section in Spanish', () => {
      expect(content).toMatch(/### 3\. Centralización de Recursos/);
      expect(content).toContain('hub temporal');
      expect(content).toContain('FAQs');
    });

    test('should have benefits section in Spanish', () => {
      expect(content).toMatch(/## :sparkles: Beneficios del Flujo/);
      expect(content).toContain('Aumento de la tasa de activación');
      expect(content).toContain('Calificación anticipada');
      expect(content).toContain('Experiencia profesional y confiable');
    });

    test('should use proper Spanish terminology', () => {
      const spanishTerms = ['merchant', 'onboarding', 'Landing Page', 'socio'];
      spanishTerms.forEach(term => {
        expect(content).toContain(term);
      });
    });

    test('should not contain Portuguese or English exclusive text', () => {
      // Portuguese specific
      expect(content).not.toContain('parceiro');
      expect(content).not.toContain('Direcionamento');
    });
  });

  describe('Cross-language Consistency', () => {
    let ptContent, enContent, esContent;

    beforeAll(() => {
      ptContent = fs.readFileSync(docsPath, 'utf-8');
      enContent = fs.readFileSync(enDocsPath, 'utf-8');
      esContent = fs.readFileSync(esDocsPath, 'utf-8');
    });

    test('should have same structure across all languages', () => {
      // Count major headings (##)
      const ptHeadings = (ptContent.match(/^##\s/gm) || []).length;
      const enHeadings = (enContent.match(/^##\s/gm) || []).length;
      const esHeadings = (esContent.match(/^##\s/gm) || []).length;

      expect(ptHeadings).toBe(enHeadings);
      expect(ptHeadings).toBe(esHeadings);
      expect(ptHeadings).toBeGreaterThanOrEqual(2); // At least 2 main sections
    });

    test('should have same number of subsections across all languages', () => {
      // Count subsections (###)
      const ptSubsections = (ptContent.match(/^###\s/gm) || []).length;
      const enSubsections = (enContent.match(/^###\s/gm) || []).length;
      const esSubsections = (esContent.match(/^###\s/gm) || []).length;

      expect(ptSubsections).toBe(enSubsections);
      expect(ptSubsections).toBe(esSubsections);
      expect(ptSubsections).toBe(3); // Three essential functions
    });

    test('should have same emoji usage across all languages', () => {
      const ptEmojis = ptContent.match(/:[a-z_]+:/g) || [];
      const enEmojis = enContent.match(/:[a-z_]+:/g) || [];
      const esEmojis = esContent.match(/:[a-z_]+:/g) || [];

      expect(ptEmojis.length).toBe(enEmojis.length);
      expect(ptEmojis.length).toBe(esEmojis.length);
    });
  });

  describe('Edge Cases and Robustness', () => {
    test('should handle file not found gracefully', () => {
      const nonExistentPath = path.join(__dirname, '../../docs/applications/non-existent.md');
      expect(fs.existsSync(nonExistentPath)).toBe(false);
    });

    test('should have reasonable file size', () => {
      const stats = fs.statSync(docsPath);
      // Documentation should be between 100 bytes and 50KB
      expect(stats.size).toBeGreaterThan(100);
      expect(stats.size).toBeLessThan(50000);
    });

    test('should use UTF-8 encoding', () => {
      // Read as buffer and check for UTF-8 BOM or valid UTF-8
      const buffer = fs.readFileSync(docsPath);
      // Should not start with UTF-16 BOM
      expect(buffer[0]).not.toBe(0xFF);
      expect(buffer[1]).not.toBe(0xFE);
    });
  });
});