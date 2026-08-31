# Spec Reviewer Agent

An agent that takes a technical specification and returns its defects: what's ambiguous, what's missing, which edge cases aren't covered, what isn't testable. For each finding, it states where the problem is, its category, its severity, and the question that should be asked to the author. It doesn't rewrite the spec and doesn't suggest a fix — it only finds the problem and asks the right question.

Built in phases (`Phase 0` through `Phase 7`), each one shippable on its own. TypeScript + Node + Anthropic SDK, hand-written agent loop, no orchestration framework.
