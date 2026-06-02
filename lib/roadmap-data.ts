import type { Phase } from './types';

// Source: "The Complete AI Engineer Roadmap — FINAL VERSION"
// 10 Months · 14 Hours/Week · 5 Phases · 40 Weeks · ~280 daily subtopics.
// All titles and resource labels are kept verbatim from the source roadmap.

export const TOTAL_WEEKS = 40;

export const roadmap: Phase[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // PHASE 1 — FOUNDATIONS (Months 1-2) — 112 hours
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'phase-1',
    number: 1,
    title: 'Foundations',
    description: 'Math foundations, Python ML toolchain, classical ML, first deployed project with proper backend.',
    weekRange: 'Weeks 1-8 · Months 1-2',
    topics: [
      {
        id: 'w1',
        title: 'Week 1 — Linear Algebra Foundations',
        subtopics: [
          { id: 'w1-mon', title: 'Mon — Vectors, dot product, vector addition', hours: 1.5, priority: 'must-know', weekNumber: 1, resources: [{ type: 'youtube', label: '3Blue1Brown "Essence of Linear Algebra" — Episodes 1, 2', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab' }] },
          { id: 'w1-tue', title: 'Tue — Linear combinations, span, basis vectors', hours: 1.5, priority: 'must-know', weekNumber: 1, resources: [{ type: 'youtube', label: '3Blue1Brown — Episodes 3, 4', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab' }] },
          { id: 'w1-wed', title: 'Wed — Matrix transformations', hours: 1.5, priority: 'must-know', weekNumber: 1, resources: [{ type: 'youtube', label: '3Blue1Brown — Episodes 5, 6', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab' }] },
          { id: 'w1-thu', title: 'Thu — Matrix multiplication, 3D transformations', hours: 1.5, priority: 'must-know', weekNumber: 1, resources: [{ type: 'youtube', label: '3Blue1Brown — Episodes 7, 8', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab' }] },
          { id: 'w1-fri', title: 'Fri — Determinants, inverse matrices', hours: 1.5, priority: 'must-know', weekNumber: 1, resources: [{ type: 'youtube', label: '3Blue1Brown — Episodes 9, 10', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab' }] },
          { id: 'w1-sat', title: 'Sat — Eigenvectors & eigenvalues, SVD intuition', hours: 3, priority: 'must-know', weekNumber: 1, resources: [{ type: 'youtube', label: '3Blue1Brown — Episodes 11, 14, 15 + NumPy practice', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab' }] },
          { id: 'w1-sun', title: 'Sun — Implement matmul, eigendecomposition by hand in NumPy', hours: 3, priority: 'must-know', weekNumber: 1, resources: [{ type: 'doc', label: 'Self-driven — NumPy practice' }] },
        ],
      },
      {
        id: 'w2',
        title: 'Week 2 — Calculus + Probability for ML',
        subtopics: [
          { id: 'w2-mon', title: 'Mon — Derivatives, geometric meaning', hours: 1.5, priority: 'must-know', weekNumber: 2, resources: [{ type: 'youtube', label: '3Blue1Brown "Essence of Calculus" — Episodes 1, 2, 3', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr' }] },
          { id: 'w2-tue', title: 'Tue — Chain rule (THIS IS BACKPROP)', hours: 1.5, priority: 'must-know', weekNumber: 2, resources: [{ type: 'youtube', label: '3Blue1Brown Calculus — Episode 4 (watch twice)', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr' }] },
          { id: 'w2-wed', title: 'Wed — Partial derivatives, gradients', hours: 1.5, priority: 'must-know', weekNumber: 2, resources: [{ type: 'course', label: 'Khan Academy Multivariable Calculus — gradient + chain rule only', url: 'https://www.khanacademy.org/math/multivariable-calculus' }] },
          { id: 'w2-thu', title: 'Thu — Probability basics, random variables, expectation, variance', hours: 1.5, priority: 'must-know', weekNumber: 2, resources: [{ type: 'youtube', label: 'StatQuest with Josh Starmer — "Probability" videos (5 of them)', url: 'https://www.youtube.com/@statquest' }] },
          { id: 'w2-fri', title: 'Fri — Distributions: Bernoulli, Gaussian, Categorical', hours: 1.5, priority: 'must-know', weekNumber: 2, resources: [{ type: 'youtube', label: 'StatQuest — "Probability Distributions"', url: 'https://www.youtube.com/@statquest' }] },
          { id: 'w2-sat', title: 'Sat — Bayes Theorem + conditional probability', hours: 3, priority: 'must-know', weekNumber: 2, resources: [{ type: 'youtube', label: 'StatQuest — "Bayes Theorem" + 5 paper problems', url: 'https://www.youtube.com/@statquest' }] },
          { id: 'w2-sun', title: 'Sun — Cross-entropy, KL divergence', hours: 3, priority: 'must-know', weekNumber: 2, resources: [{ type: 'youtube', label: 'Aurélien Géron\'s "Short Intro to Entropy/Cross-Entropy/KL" (YouTube, 10 min, watch 3x)', url: 'https://www.youtube.com/watch?v=ErfnhcEV1O8' }] },
        ],
      },
      {
        id: 'w3',
        title: 'Week 3 — Python ML Toolchain + Linux/Git Basics',
        subtopics: [
          { id: 'w3-mon', title: 'Mon — Install uv (modern Python package manager) + Linux/Bash basics', hours: 1.5, priority: 'must-know', weekNumber: 3, resources: [{ type: 'doc', label: 'uv docs (docs.astral.sh/uv/)', url: 'https://docs.astral.sh/uv/' }, { type: 'course', label: 'Linux Journey (linuxjourney.com)', url: 'https://linuxjourney.com/' }] },
          { id: 'w3-tue', title: 'Tue — NumPy deep dive: broadcasting, vectorization', hours: 1.5, priority: 'must-know', weekNumber: 3, resources: [{ type: 'youtube', label: 'Keith Galli — "Complete Python NumPy Tutorial"', url: 'https://www.youtube.com/watch?v=GB9ByFAIAH4' }] },
          { id: 'w3-wed', title: 'Wed — Pandas: DataFrames, filtering, groupby, merge', hours: 1.5, priority: 'must-know', weekNumber: 3, resources: [{ type: 'youtube', label: 'Corey Schafer — "Pandas Tutorial" Videos 1-4', url: 'https://www.youtube.com/playlist?list=PL-osiE80TeTsWmV9i9c58mdDCSskIFdDS' }] },
          { id: 'w3-thu', title: 'Thu — Pandas continued: pivot, time series, missing data', hours: 1.5, priority: 'must-know', weekNumber: 3, resources: [{ type: 'youtube', label: 'Corey Schafer — Videos 5-8', url: 'https://www.youtube.com/playlist?list=PL-osiE80TeTsWmV9i9c58mdDCSskIFdDS' }] },
          { id: 'w3-fri', title: 'Fri — Matplotlib + Seaborn', hours: 1.5, priority: 'must-know', weekNumber: 3, resources: [{ type: 'youtube', label: 'Corey Schafer Matplotlib — first 3 videos', url: 'https://www.youtube.com/playlist?list=PL-osiE80TeTvipOqomVEeZ1HRrcEvtZB_' }] },
          { id: 'w3-sat', title: 'Sat — Git/GitHub: branches, commits, PRs, .gitignore', hours: 3, priority: 'must-know', weekNumber: 3, resources: [{ type: 'youtube', label: 'Corey Schafer — "Git Tutorial" first 5 videos', url: 'https://www.youtube.com/playlist?list=PL-osiE80TeTuRUfjRe54Eea17-YfnOOAx' }] },
          { id: 'w3-sun', title: 'Sun — Set up: GitHub, W&B, HuggingFace, Kaggle accounts. Push first repo.', hours: 3, priority: 'must-know', weekNumber: 3, resources: [{ type: 'doc', label: 'GitHub + W&B + HuggingFace + Kaggle account setup' }] },
        ],
      },
      {
        id: 'w4',
        title: 'Week 4 — Classical ML Part 1: Regression + Classification',
        subtopics: [
          { id: 'w4-mon', title: 'Mon — What is ML? Supervised vs Unsupervised. Train/val/test splits', hours: 1.5, priority: 'must-know', weekNumber: 4, resources: [{ type: 'course', label: 'Andrew Ng Machine Learning Specialization (Coursera, free audit) — Course 1, Week 1', url: 'https://www.coursera.org/specializations/machine-learning-introduction' }] },
          { id: 'w4-tue', title: 'Tue — Linear Regression (single variable) — math + intuition', hours: 1.5, priority: 'must-know', weekNumber: 4, resources: [{ type: 'course', label: 'Andrew Ng Course 1, Week 1', url: 'https://www.coursera.org/specializations/machine-learning-introduction' }] },
          { id: 'w4-wed', title: 'Wed — Multiple linear regression, gradient descent', hours: 1.5, priority: 'must-know', weekNumber: 4, resources: [{ type: 'course', label: 'Andrew Ng Course 1, Week 2', url: 'https://www.coursera.org/specializations/machine-learning-introduction' }] },
          { id: 'w4-thu', title: 'Thu — Implement linear regression from scratch in NumPy', hours: 1.5, priority: 'must-know', weekNumber: 4, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w4-fri', title: 'Fri — Logistic regression, sigmoid, binary classification', hours: 1.5, priority: 'must-know', weekNumber: 4, resources: [{ type: 'course', label: 'Andrew Ng Course 1, Week 3', url: 'https://www.coursera.org/specializations/machine-learning-introduction' }] },
          { id: 'w4-sat', title: 'Sat — Logistic regression from scratch + cost derivation', hours: 3, priority: 'must-know', weekNumber: 4, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w4-sun', title: 'Sun — Overfitting, regularization (L1/L2), bias-variance', hours: 3, priority: 'must-know', weekNumber: 4, resources: [{ type: 'course', label: 'Andrew Ng Course 1, Week 3 end', url: 'https://www.coursera.org/specializations/machine-learning-introduction' }] },
        ],
      },
      {
        id: 'w5',
        title: 'Week 5 — Classical ML Part 2: Trees + Ensembles',
        subtopics: [
          { id: 'w5-mon', title: 'Mon — Decision Trees: entropy, Gini', hours: 1.5, priority: 'must-know', weekNumber: 5, resources: [{ type: 'youtube', label: 'StatQuest "Decision Trees"', url: 'https://www.youtube.com/@statquest' }, { type: 'course', label: 'Andrew Ng Course 2, Week 4', url: 'https://www.coursera.org/specializations/machine-learning-introduction' }] },
          { id: 'w5-tue', title: 'Tue — Random Forests + bagging', hours: 1.5, priority: 'must-know', weekNumber: 5, resources: [{ type: 'youtube', label: 'StatQuest "Random Forests Part 1 & 2"', url: 'https://www.youtube.com/@statquest' }] },
          { id: 'w5-wed', title: 'Wed — Gradient Boosting intuition', hours: 1.5, priority: 'must-know', weekNumber: 5, resources: [{ type: 'youtube', label: 'StatQuest "Gradient Boost Part 1"', url: 'https://www.youtube.com/@statquest' }] },
          { id: 'w5-thu', title: 'Thu — XGBoost + LightGBM hands-on', hours: 1.5, priority: 'must-know', weekNumber: 5, resources: [{ type: 'youtube', label: 'StatQuest "XGBoost Part 1"', url: 'https://www.youtube.com/@statquest' }, { type: 'doc', label: 'XGBoost Quick Start docs', url: 'https://xgboost.readthedocs.io/en/stable/get_started.html' }] },
          { id: 'w5-fri', title: 'Fri — KNN, Naive Bayes overview', hours: 1.5, priority: 'must-know', weekNumber: 5, resources: [{ type: 'course', label: 'Andrew Ng Course 2 + StatQuest', url: 'https://www.coursera.org/specializations/machine-learning-introduction' }] },
          { id: 'w5-sat', title: 'Sat — K-Means clustering + PCA', hours: 3, priority: 'must-know', weekNumber: 5, resources: [{ type: 'course', label: 'Andrew Ng Course 3 (Unsupervised), Week 1', url: 'https://www.coursera.org/specializations/machine-learning-introduction' }] },
          { id: 'w5-sun', title: 'Sun — Compare 5 algorithms on Titanic dataset, F1 scores', hours: 3, priority: 'must-know', weekNumber: 5, resources: [{ type: 'doc', label: 'Kaggle + scikit-learn', url: 'https://www.kaggle.com/c/titanic' }] },
        ],
      },
      {
        id: 'w6',
        title: 'Week 6 — Model Evaluation + Feature Engineering + MLflow',
        subtopics: [
          { id: 'w6-mon', title: 'Mon — Why accuracy misleads. Precision, Recall, F1', hours: 1.5, priority: 'must-know', weekNumber: 6, resources: [{ type: 'youtube', label: 'StatQuest "Sensitivity/Specificity" + "Precision/Recall"', url: 'https://www.youtube.com/@statquest' }] },
          { id: 'w6-tue', title: 'Tue — ROC, AUC, PR curves', hours: 1.5, priority: 'must-know', weekNumber: 6, resources: [{ type: 'youtube', label: 'StatQuest "ROC and AUC"', url: 'https://www.youtube.com/@statquest' }] },
          { id: 'w6-wed', title: 'Wed — k-fold + stratified cross-validation', hours: 1.5, priority: 'must-know', weekNumber: 6, resources: [{ type: 'youtube', label: 'StatQuest "Cross Validation"', url: 'https://www.youtube.com/@statquest' }] },
          { id: 'w6-thu', title: 'Thu — Data leakage: causes + prevention', hours: 1.5, priority: 'must-know', weekNumber: 6, resources: [{ type: 'article', label: 'Read aiwithanju PDF on leakage section' }] },
          { id: 'w6-fri', title: 'Fri — Feature scaling, one-hot, target encoding', hours: 1.5, priority: 'must-know', weekNumber: 6, resources: [{ type: 'doc', label: 'scikit-learn preprocessing docs', url: 'https://scikit-learn.org/stable/modules/preprocessing.html' }] },
          { id: 'w6-sat', title: 'Sat — sklearn Pipelines + ColumnTransformer', hours: 3, priority: 'must-know', weekNumber: 6, resources: [{ type: 'doc', label: 'scikit-learn "Composite estimators" docs', url: 'https://scikit-learn.org/stable/modules/compose.html' }] },
          { id: 'w6-sun', title: 'Sun — MLflow: track experiments with params + metrics + artifacts', hours: 3, priority: 'must-know', weekNumber: 6, resources: [{ type: 'doc', label: 'MLflow Quickstart (mlflow.org)', url: 'https://mlflow.org/docs/latest/getting-started/quickstart-1/index.html' }] },
        ],
      },
      {
        id: 'w7',
        title: 'Week 7 — PROJECT 1: End-to-End Tabular ML Pipeline',
        subtopics: [
          { id: 'w7-mon', title: 'Mon — Pick dataset, EDA, document findings', hours: 1.5, priority: 'must-know', weekNumber: 7, resources: [{ type: 'doc', label: 'Telco Churn / NYC Taxi / Credit Card Fraud — pick one' }] },
          { id: 'w7-tue', title: 'Tue — Feature engineering: missing values, encoding, scaling', hours: 1.5, priority: 'must-know', weekNumber: 7, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w7-wed', title: 'Wed — Build sklearn Pipeline with ColumnTransformer', hours: 1.5, priority: 'must-know', weekNumber: 7, resources: [{ type: 'doc', label: 'scikit-learn docs', url: 'https://scikit-learn.org/stable/modules/compose.html' }] },
          { id: 'w7-thu', title: 'Thu — Train 3 models: LogReg baseline, RF, XGBoost. Stratified k-fold CV', hours: 1.5, priority: 'must-know', weekNumber: 7, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w7-fri', title: 'Fri — Hyperparameter tuning with GridSearchCV/RandomizedSearchCV', hours: 1.5, priority: 'must-know', weekNumber: 7, resources: [{ type: 'doc', label: 'scikit-learn model selection', url: 'https://scikit-learn.org/stable/modules/grid_search.html' }] },
          { id: 'w7-sat', title: 'Sat — Log everything in MLflow. Write README', hours: 3, priority: 'must-know', weekNumber: 7, resources: [{ type: 'doc', label: 'MLflow docs', url: 'https://mlflow.org/docs/latest/' }] },
          { id: 'w7-sun', title: 'Sun — Clean GitHub structure: /data, /notebooks, /src, README.md, requirements.txt', hours: 3, priority: 'must-know', weekNumber: 7, resources: [{ type: 'doc', label: 'Self-driven — Portfolio Project #1' }] },
        ],
      },
      {
        id: 'w8',
        title: 'Week 8 — Backend Foundations: HTTP, FastAPI, Docker, Cloud Deployment',
        subtopics: [
          { id: 'w8-mon', title: 'Mon — HTTP fundamentals: methods, status codes, headers, JSON', hours: 1.5, priority: 'must-know', weekNumber: 8, resources: [{ type: 'doc', label: 'MDN "Introduction to HTTP" + Mozilla HTTP docs', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP' }] },
          { id: 'w8-tue', title: 'Tue — FastAPI Hello World, path/query params, async basics', hours: 1.5, priority: 'must-know', weekNumber: 8, resources: [{ type: 'doc', label: 'FastAPI tutorial (fastapi.tiangolo.com) — first 4 sections', url: 'https://fastapi.tiangolo.com/tutorial/' }] },
          { id: 'w8-wed', title: 'Wed — FastAPI: Pydantic request/response models, validation', hours: 1.5, priority: 'must-know', weekNumber: 8, resources: [{ type: 'doc', label: 'FastAPI tutorial continued', url: 'https://fastapi.tiangolo.com/tutorial/' }] },
          { id: 'w8-thu', title: 'Thu — Serve Project 1 model via FastAPI: /predict, /health, async endpoint', hours: 1.5, priority: 'must-know', weekNumber: 8, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w8-fri', title: 'Fri — Docker: images, containers, Dockerfile, multi-stage build', hours: 1.5, priority: 'must-know', weekNumber: 8, resources: [{ type: 'youtube', label: 'TechWorld with Nana "Docker Tutorial for Beginners" (first 2 hrs)', url: 'https://www.youtube.com/watch?v=3c-iBn73dDE' }] },
          { id: 'w8-sat', title: 'Sat — Dockerize FastAPI service + write docker-compose.yml + env vars (.env)', hours: 3, priority: 'must-know', weekNumber: 8, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w8-sun', title: 'Sun — Deploy to Render or HuggingFace Spaces. Public URL. Add error handling middleware.', hours: 3, priority: 'must-know', weekNumber: 8, resources: [{ type: 'doc', label: 'Render docs', url: 'https://render.com/docs' }, { type: 'doc', label: 'HF Spaces docs', url: 'https://huggingface.co/docs/hub/spaces' }] },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PHASE 2 — DEEP LEARNING + PYTORCH (Months 3-4) — 112 hours
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'phase-2',
    number: 2,
    title: 'Deep Learning + PyTorch',
    description: 'Neural networks mastery, PyTorch fluency, build GPT from scratch, basic CV.',
    weekRange: 'Weeks 9-16 · Months 3-4',
    topics: [
      {
        id: 'w9',
        title: 'Week 9 — Neural Networks from Scratch (Karpathy)',
        subtopics: [
          { id: 'w9-mon', title: 'Mon — Karpathy "Neural Networks: Zero to Hero" — Episode 1: micrograd Part 1', hours: 2, priority: 'must-know', weekNumber: 9, resources: [{ type: 'youtube', label: 'Karpathy "Neural Networks: Zero to Hero" — Episode 1', url: 'https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ' }] },
          { id: 'w9-tue', title: 'Tue — Episode 1 continued — code along', hours: 2, priority: 'must-know', weekNumber: 9, resources: [{ type: 'youtube', label: 'Karpathy Episode 1', url: 'https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ' }] },
          { id: 'w9-wed', title: 'Wed — Finish micrograd, internalize backprop fully', hours: 1.5, priority: 'must-know', weekNumber: 9, resources: [{ type: 'youtube', label: 'Karpathy Episode 1', url: 'https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ' }] },
          { id: 'w9-thu', title: 'Thu — Karpathy Episode 2: makemore (bigram model)', hours: 1.5, priority: 'must-know', weekNumber: 9, resources: [{ type: 'youtube', label: 'Karpathy Episode 2', url: 'https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ' }] },
          { id: 'w9-fri', title: 'Fri — Episode 2 continued', hours: 1.5, priority: 'must-know', weekNumber: 9, resources: [{ type: 'youtube', label: 'Karpathy Episode 2', url: 'https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ' }] },
          { id: 'w9-sat', title: 'Sat — Karpathy Episode 3: MLP (full 3-hour video)', hours: 3, priority: 'must-know', weekNumber: 9, resources: [{ type: 'youtube', label: 'Karpathy Episode 3: MLP', url: 'https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ' }] },
          { id: 'w9-sun', title: 'Sun — Re-implement micrograd from memory — no peeking', hours: 3, priority: 'must-know', weekNumber: 9, resources: [{ type: 'doc', label: 'Self-driven — micrograd-from-scratch' }] },
        ],
      },
      {
        id: 'w10',
        title: 'Week 10 — Deep Learning Theory Foundation',
        subtopics: [
          { id: 'w10-mon', title: 'Mon — Activation functions: ReLU, Sigmoid, Tanh, GELU, SiLU', hours: 1.5, priority: 'must-know', weekNumber: 10, resources: [{ type: 'course', label: 'Andrew Ng Deep Learning Specialization Course 1, Week 2', url: 'https://www.coursera.org/specializations/deep-learning' }] },
          { id: 'w10-tue', title: 'Tue — Forward + backward propagation deep dive', hours: 1.5, priority: 'must-know', weekNumber: 10, resources: [{ type: 'course', label: 'Andrew Ng Course 1, Week 3', url: 'https://www.coursera.org/specializations/deep-learning' }] },
          { id: 'w10-wed', title: 'Wed — Loss functions: MSE, Cross-entropy, BCE', hours: 1.5, priority: 'must-know', weekNumber: 10, resources: [{ type: 'course', label: 'Andrew Ng Course 1, Week 4', url: 'https://www.coursera.org/specializations/deep-learning' }] },
          { id: 'w10-thu', title: 'Thu — Optimizers: SGD, Momentum, Adam, AdamW', hours: 1.5, priority: 'must-know', weekNumber: 10, resources: [{ type: 'course', label: 'Andrew Ng Course 2, Week 2', url: 'https://www.coursera.org/specializations/deep-learning' }] },
          { id: 'w10-fri', title: 'Fri — Regularization: Dropout, L1/L2, early stopping', hours: 1.5, priority: 'must-know', weekNumber: 10, resources: [{ type: 'course', label: 'Andrew Ng Course 2, Week 1', url: 'https://www.coursera.org/specializations/deep-learning' }] },
          { id: 'w10-sat', title: 'Sat — Batch norm vs Layer norm (mandatory interview topic)', hours: 3, priority: 'must-know', weekNumber: 10, resources: [{ type: 'course', label: 'Andrew Ng Course 2, Week 3', url: 'https://www.coursera.org/specializations/deep-learning' }, { type: 'youtube', label: "Yannic Kilcher's BatchNorm video", url: 'https://www.youtube.com/@YannicKilcher' }] },
          { id: 'w10-sun', title: 'Sun — Weight init (Xavier, He) + vanishing/exploding gradients', hours: 3, priority: 'must-know', weekNumber: 10, resources: [{ type: 'course', label: 'Andrew Ng Course 2, Week 1', url: 'https://www.coursera.org/specializations/deep-learning' }] },
        ],
      },
      {
        id: 'w11',
        title: 'Week 11 — PyTorch Mastery',
        subtopics: [
          { id: 'w11-mon', title: 'Mon — Tensors, devices, basic ops', hours: 1.5, priority: 'must-know', weekNumber: 11, resources: [{ type: 'doc', label: 'PyTorch tutorial "Learn the Basics: Tensors"', url: 'https://pytorch.org/tutorials/beginner/basics/tensorqs_tutorial.html' }] },
          { id: 'w11-tue', title: 'Tue — Autograd: requires_grad, .backward(), .no_grad()', hours: 1.5, priority: 'must-know', weekNumber: 11, resources: [{ type: 'doc', label: 'PyTorch tutorial "Autograd"', url: 'https://pytorch.org/tutorials/beginner/basics/autogradqs_tutorial.html' }] },
          { id: 'w11-wed', title: 'Wed — nn.Module, custom layers', hours: 1.5, priority: 'must-know', weekNumber: 11, resources: [{ type: 'doc', label: 'PyTorch tutorial "Build the Neural Network"', url: 'https://pytorch.org/tutorials/beginner/basics/buildmodel_tutorial.html' }] },
          { id: 'w11-thu', title: 'Thu — Dataset and DataLoader', hours: 1.5, priority: 'must-know', weekNumber: 11, resources: [{ type: 'doc', label: 'PyTorch tutorial "Datasets and DataLoaders"', url: 'https://pytorch.org/tutorials/beginner/basics/data_tutorial.html' }] },
          { id: 'w11-fri', title: 'Fri — Full training loop: zero_grad → forward → loss → backward → step', hours: 1.5, priority: 'must-know', weekNumber: 11, resources: [{ type: 'doc', label: 'PyTorch tutorial "Optimization Loop"', url: 'https://pytorch.org/tutorials/beginner/basics/optimization_tutorial.html' }] },
          { id: 'w11-sat', title: 'Sat — Save/load models (state_dict), checkpointing, W&B integration', hours: 3, priority: 'must-know', weekNumber: 11, resources: [{ type: 'doc', label: 'PyTorch tutorial + W&B PyTorch docs', url: 'https://docs.wandb.ai/guides/integrations/pytorch' }] },
          { id: 'w11-sun', title: 'Sun — Build MLP for MNIST in PyTorch, log with W&B', hours: 3, priority: 'must-know', weekNumber: 11, resources: [{ type: 'doc', label: 'Self-driven — pytorch-mnist-mlp' }] },
        ],
      },
      {
        id: 'w12',
        title: 'Week 12 — Computer Vision Foundations (CNNs)',
        subtopics: [
          { id: 'w12-mon', title: 'Mon — What is convolution? Filters, stride, padding', hours: 1.5, priority: 'must-know', weekNumber: 12, resources: [{ type: 'youtube', label: 'Stanford CS231n "2017 Lecture 5" (YouTube)', url: 'https://www.youtube.com/playlist?list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv' }] },
          { id: 'w12-tue', title: 'Tue — Pooling, receptive field', hours: 1.5, priority: 'must-know', weekNumber: 12, resources: [{ type: 'youtube', label: 'CS231n Lecture 5 continued', url: 'https://www.youtube.com/playlist?list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv' }] },
          { id: 'w12-wed', title: 'Wed — CNN architectures: LeNet, AlexNet, VGG', hours: 1.5, priority: 'must-know', weekNumber: 12, resources: [{ type: 'youtube', label: 'CS231n Lecture 9', url: 'https://www.youtube.com/playlist?list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv' }] },
          { id: 'w12-thu', title: 'Thu — ResNet + residual connections (critical)', hours: 1.5, priority: 'must-know', weekNumber: 12, resources: [{ type: 'youtube', label: 'CS231n Lecture 9 continued', url: 'https://www.youtube.com/playlist?list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv' }] },
          { id: 'w12-fri', title: 'Fri — Transfer learning, fine-tuning pretrained models', hours: 1.5, priority: 'must-know', weekNumber: 12, resources: [{ type: 'course', label: 'fast.ai Practical Deep Learning Lesson 1', url: 'https://course.fast.ai/' }] },
          { id: 'w12-sat', title: 'Sat — Build a CNN in PyTorch for CIFAR-10', hours: 3, priority: 'must-know', weekNumber: 12, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w12-sun', title: 'Sun — Fine-tune pretrained ResNet-18 on custom dataset + read about ViT, CLIP', hours: 3, priority: 'must-know', weekNumber: 12, resources: [{ type: 'doc', label: 'torchvision docs', url: 'https://pytorch.org/vision/stable/index.html' }, { type: 'article', label: 'CLIP paper abstract', url: 'https://arxiv.org/abs/2103.00020' }] },
        ],
      },
      {
        id: 'w13',
        title: 'Week 13 — NLP Fundamentals + Word Embeddings',
        subtopics: [
          { id: 'w13-mon', title: 'Mon — Tokenization basics: characters, words, subwords', hours: 1.5, priority: 'must-know', weekNumber: 13, resources: [{ type: 'youtube', label: 'Stanford CS224n Lecture 1 (YouTube, 2023)', url: 'https://web.stanford.edu/class/cs224n/' }] },
          { id: 'w13-tue', title: 'Tue — BPE (Byte-Pair Encoding) — how GPT tokenizes', hours: 1.5, priority: 'must-know', weekNumber: 13, resources: [{ type: 'youtube', label: 'Karpathy "Let\'s build the GPT Tokenizer" Part 1', url: 'https://www.youtube.com/watch?v=zduSFxRajkE' }] },
          { id: 'w13-wed', title: 'Wed — Karpathy tokenizer Part 2 + finish', hours: 1.5, priority: 'must-know', weekNumber: 13, resources: [{ type: 'youtube', label: 'YouTube — Karpathy Tokenizer Part 2', url: 'https://www.youtube.com/watch?v=zduSFxRajkE' }] },
          { id: 'w13-thu', title: 'Thu — Word2Vec, GloVe (legacy but interview-relevant)', hours: 1.5, priority: 'must-know', weekNumber: 13, resources: [{ type: 'course', label: 'CS224n Lectures 1-2', url: 'https://web.stanford.edu/class/cs224n/' }] },
          { id: 'w13-fri', title: 'Fri — Modern embeddings: sentence-transformers, BGE, OpenAI embeddings', hours: 1.5, priority: 'must-know', weekNumber: 13, resources: [{ type: 'doc', label: 'HF sentence-transformers docs', url: 'https://www.sbert.net/' }] },
          { id: 'w13-sat', title: 'Sat — RNN basics + why they failed → motivation for Transformers', hours: 3, priority: 'must-know', weekNumber: 13, resources: [{ type: 'course', label: 'CS224n Lecture 6 (intuition only)', url: 'https://web.stanford.edu/class/cs224n/' }] },
          { id: 'w13-sun', title: 'Sun — LSTM + vanishing gradients (interview topic)', hours: 3, priority: 'must-know', weekNumber: 13, resources: [{ type: 'course', label: 'CS224n Lecture 7', url: 'https://web.stanford.edu/class/cs224n/' }] },
        ],
      },
      {
        id: 'w14',
        title: 'Week 14 — The Transformer Architecture',
        subtopics: [
          { id: 'w14-mon', title: 'Mon — "Attention Is All You Need" paper — first pass, skim', hours: 2, priority: 'must-know', weekNumber: 14, resources: [{ type: 'article', label: 'arXiv:1706.03762', url: 'https://arxiv.org/abs/1706.03762' }] },
          { id: 'w14-tue', title: 'Tue — 3Blue1Brown "But what is a GPT?" + "Attention in transformers, visually explained"', hours: 2, priority: 'must-know', weekNumber: 14, resources: [{ type: 'youtube', label: '3Blue1Brown — Attention/Transformers playlist', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi' }] },
          { id: 'w14-wed', title: 'Wed — Self-attention math: Q, K, V matrices', hours: 1.5, priority: 'must-know', weekNumber: 14, resources: [{ type: 'youtube', label: 'Re-watch 3B1B + paper', url: 'https://arxiv.org/abs/1706.03762' }] },
          { id: 'w14-thu', title: 'Thu — Multi-head attention, positional encodings (sinusoidal, RoPE, ALiBi)', hours: 1.5, priority: 'must-know', weekNumber: 14, resources: [{ type: 'article', label: '"The Illustrated Transformer" by Jay Alammar', url: 'https://jalammar.github.io/illustrated-transformer/' }] },
          { id: 'w14-fri', title: 'Fri — Encoder-only (BERT), Decoder-only (GPT), Encoder-Decoder (T5) — when to use which', hours: 1.5, priority: 'must-know', weekNumber: 14, resources: [{ type: 'article', label: "Jay Alammar's BERT/ELMo blog", url: 'https://jalammar.github.io/illustrated-bert/' }] },
          { id: 'w14-sat', title: 'Sat — Re-read "Attention Is All You Need" — careful second pass', hours: 3, priority: 'must-know', weekNumber: 14, resources: [{ type: 'article', label: 'arXiv', url: 'https://arxiv.org/abs/1706.03762' }] },
          { id: 'w14-sun', title: 'Sun — KV cache, Pre-LN vs Post-LN (interview topics)', hours: 2.5, priority: 'must-know', weekNumber: 14, resources: [{ type: 'article', label: "Sebastian Raschka's substack — \"KV cache\" articles", url: 'https://magazine.sebastianraschka.com/' }] },
        ],
      },
      {
        id: 'w15',
        title: 'Week 15 — Build GPT from Scratch with Karpathy',
        subtopics: [
          { id: 'w15-mon', title: 'Mon — Karpathy "Let\'s build GPT: from scratch" — minutes 0-30', hours: 2, priority: 'must-know', weekNumber: 15, resources: [{ type: 'youtube', label: 'Karpathy — Let\'s build GPT', url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY' }] },
          { id: 'w15-tue', title: 'Tue — Continue — minutes 30-60', hours: 2, priority: 'must-know', weekNumber: 15, resources: [{ type: 'youtube', label: 'Karpathy — Let\'s build GPT', url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY' }] },
          { id: 'w15-wed', title: 'Wed — Continue — minutes 60-90', hours: 2, priority: 'must-know', weekNumber: 15, resources: [{ type: 'youtube', label: 'Karpathy — Let\'s build GPT', url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY' }] },
          { id: 'w15-thu', title: 'Thu — Continue — minutes 90-120', hours: 2, priority: 'must-know', weekNumber: 15, resources: [{ type: 'youtube', label: 'Karpathy — Let\'s build GPT', url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY' }] },
          { id: 'w15-fri', title: 'Fri — Re-watch multi-head attention section, pause and code along', hours: 1.5, priority: 'must-know', weekNumber: 15, resources: [{ type: 'youtube', label: 'Karpathy — Let\'s build GPT', url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY' }] },
          { id: 'w15-sat', title: 'Sat — Re-implement entire nanoGPT from memory — don\'t copy his code', hours: 3, priority: 'must-know', weekNumber: 15, resources: [{ type: 'doc', label: 'Self-driven — nanogpt-from-scratch (Portfolio Project #2)' }] },
          { id: 'w15-sun', title: 'Sun — Train mini-GPT on custom text (Shakespeare, song lyrics, your favorite book)', hours: 1.5, priority: 'must-know', weekNumber: 15, resources: [{ type: 'doc', label: 'Self-driven' }] },
        ],
      },
      {
        id: 'w16',
        title: 'Week 16 — HuggingFace Ecosystem + Fine-Tuning Basics',
        subtopics: [
          { id: 'w16-mon', title: 'Mon — HF Transformers: pipeline, AutoModel, AutoTokenizer', hours: 1.5, priority: 'must-know', weekNumber: 16, resources: [{ type: 'course', label: 'HuggingFace NLP Course Chapter 1', url: 'https://huggingface.co/learn/nlp-course/chapter1' }] },
          { id: 'w16-tue', title: 'Tue — Loading + using pretrained models (BERT, GPT-2)', hours: 1.5, priority: 'must-know', weekNumber: 16, resources: [{ type: 'course', label: 'HF NLP Course Chapter 2', url: 'https://huggingface.co/learn/nlp-course/chapter2' }] },
          { id: 'w16-wed', title: 'Wed — Tokenizers in HF, padding, attention masks', hours: 1.5, priority: 'must-know', weekNumber: 16, resources: [{ type: 'course', label: 'HF NLP Course Chapter 3', url: 'https://huggingface.co/learn/nlp-course/chapter3' }] },
          { id: 'w16-thu', title: 'Thu — Datasets library: load, map, filter', hours: 1.5, priority: 'must-know', weekNumber: 16, resources: [{ type: 'course', label: 'HF NLP Course Chapter 5', url: 'https://huggingface.co/learn/nlp-course/chapter5' }] },
          { id: 'w16-fri', title: 'Fri — Trainer API — training on custom dataset', hours: 1.5, priority: 'must-know', weekNumber: 16, resources: [{ type: 'course', label: 'HF NLP Course Chapter 3 continued', url: 'https://huggingface.co/learn/nlp-course/chapter3' }] },
          { id: 'w16-sat', title: 'Sat — Fine-tune DistilBERT for sentiment classification (IMDB)', hours: 3, priority: 'must-know', weekNumber: 16, resources: [{ type: 'course', label: 'HF NLP Course Chapter 3 lab', url: 'https://huggingface.co/learn/nlp-course/chapter3' }] },
          { id: 'w16-sun', title: 'Sun — Push model to HuggingFace Hub with model card', hours: 3, priority: 'must-know', weekNumber: 16, resources: [{ type: 'doc', label: 'HF docs "Sharing a model"', url: 'https://huggingface.co/docs/transformers/model_sharing' }] },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PHASE 3 — APPLIED LLM ENGINEERING (Months 5-6) — 112 hours
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'phase-3',
    number: 3,
    title: 'Applied LLM Engineering',
    description: 'Master prompt engineering, RAG, fine-tuning with LoRA, agents, production patterns.',
    weekRange: 'Weeks 17-24 · Months 5-6',
    topics: [
      {
        id: 'w17',
        title: 'Week 17 — Prompt Engineering + Structured Output + LLM APIs',
        subtopics: [
          { id: 'w17-mon', title: 'Mon — System/User/Assistant structure, OpenAI API basics, async API calls', hours: 1.5, priority: 'must-know', weekNumber: 17, resources: [{ type: 'doc', label: 'OpenAI Cookbook (cookbook.openai.com)', url: 'https://cookbook.openai.com/' }] },
          { id: 'w17-tue', title: 'Tue — Anthropic API + Claude vision API (multimodal bonus)', hours: 1.5, priority: 'must-know', weekNumber: 17, resources: [{ type: 'doc', label: 'Anthropic docs (docs.anthropic.com)', url: 'https://docs.anthropic.com/' }] },
          { id: 'w17-wed', title: 'Wed — Few-shot prompting, chain-of-thought, self-consistency, ReAct', hours: 1.5, priority: 'must-know', weekNumber: 17, resources: [{ type: 'doc', label: 'Anthropic Prompt Engineering docs', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' }] },
          { id: 'w17-thu', title: 'Thu — Structured output: JSON mode, function calling', hours: 1.5, priority: 'must-know', weekNumber: 17, resources: [{ type: 'doc', label: 'OpenAI docs "Structured outputs" + "Function calling"', url: 'https://platform.openai.com/docs/guides/structured-outputs' }] },
          { id: 'w17-fri', title: 'Fri — Pydantic + instructor library for typed LLM outputs', hours: 1.5, priority: 'must-know', weekNumber: 17, resources: [{ type: 'doc', label: 'instructor GitHub README', url: 'https://github.com/jxnl/instructor' }] },
          { id: 'w17-sat', title: 'Sat — Build resume → JSON extractor with retries + exponential backoff', hours: 3, priority: 'must-know', weekNumber: 17, resources: [{ type: 'doc', label: 'Use tenacity library + OpenAI/Anthropic', url: 'https://tenacity.readthedocs.io/' }] },
          { id: 'w17-sun', title: 'Sun — Token budgeting, context window management, cost tracking', hours: 3, priority: 'must-know', weekNumber: 17, resources: [{ type: 'doc', label: 'OpenAI docs + experimentation', url: 'https://platform.openai.com/docs' }] },
        ],
      },
      {
        id: 'w18',
        title: 'Week 18 — RAG Foundations + Vector Databases',
        subtopics: [
          { id: 'w18-mon', title: 'Mon — What is RAG? Why it exists. RAG vs fine-tuning decision', hours: 1.5, priority: 'must-know', weekNumber: 18, resources: [{ type: 'doc', label: 'LangChain conceptual docs + Pinecone Learning Center', url: 'https://python.langchain.com/docs/concepts/rag/' }] },
          { id: 'w18-tue', title: 'Tue — Chunking strategies: fixed, semantic, recursive, late chunking', hours: 1.5, priority: 'must-know', weekNumber: 18, resources: [{ type: 'doc', label: 'LangChain text splitter docs', url: 'https://python.langchain.com/docs/concepts/text_splitters/' }] },
          { id: 'w18-wed', title: 'Wed — Embedding models: BGE, e5, nomic, OpenAI text-embedding-3', hours: 1.5, priority: 'must-know', weekNumber: 18, resources: [{ type: 'doc', label: 'HuggingFace MTEB leaderboard', url: 'https://huggingface.co/spaces/mteb/leaderboard' }] },
          { id: 'w18-thu', title: 'Thu — Vector databases: Qdrant + pgvector', hours: 1.5, priority: 'must-know', weekNumber: 18, resources: [{ type: 'doc', label: 'Qdrant Quickstart (qdrant.tech/documentation/quickstart)', url: 'https://qdrant.tech/documentation/quickstart/' }] },
          { id: 'w18-fri', title: 'Fri — Cosine similarity, HNSW indexing intuition', hours: 1.5, priority: 'must-know', weekNumber: 18, resources: [{ type: 'article', label: 'Pinecone learning articles', url: 'https://www.pinecone.io/learn/' }] },
          { id: 'w18-sat', title: 'Sat — Build basic RAG: load → chunk → embed → store → retrieve → generate', hours: 3, priority: 'must-know', weekNumber: 18, resources: [{ type: 'doc', label: 'LangChain RAG tutorial', url: 'https://python.langchain.com/docs/tutorials/rag/' }] },
          { id: 'w18-sun', title: 'Sun — Hybrid search: BM25 + dense embeddings + multimodal (CLIP) intro', hours: 3, priority: 'must-know', weekNumber: 18, resources: [{ type: 'doc', label: 'Qdrant hybrid search docs', url: 'https://qdrant.tech/articles/hybrid-search/' }] },
        ],
      },
      {
        id: 'w19',
        title: 'Week 19 — Advanced RAG: Reranking, Query Rewriting, Evaluation',
        subtopics: [
          { id: 'w19-mon', title: 'Mon — Why basic RAG fails in production', hours: 1.5, priority: 'must-know', weekNumber: 19, resources: [{ type: 'article', label: 'Anyscale + Pinecone "Advanced RAG" blog posts', url: 'https://www.pinecone.io/learn/advanced-rag-techniques/' }] },
          { id: 'w19-tue', title: 'Tue — Cross-encoder rerankers: bge-reranker, cohere-rerank', hours: 1.5, priority: 'must-know', weekNumber: 19, resources: [{ type: 'doc', label: 'HuggingFace bge-reranker model card', url: 'https://huggingface.co/BAAI/bge-reranker-base' }] },
          { id: 'w19-wed', title: 'Wed — Query rewriting + HyDE (Hypothetical Document Embeddings)', hours: 1.5, priority: 'must-know', weekNumber: 19, resources: [{ type: 'doc', label: 'LangChain query transformation docs', url: 'https://python.langchain.com/docs/concepts/retrieval/' }] },
          { id: 'w19-thu', title: 'Thu — Multi-hop retrieval, parent-document retrieval', hours: 1.5, priority: 'must-know', weekNumber: 19, resources: [{ type: 'doc', label: 'LangChain advanced retrievers', url: 'https://python.langchain.com/docs/how_to/parent_document_retriever/' }] },
          { id: 'w19-fri', title: 'Fri — RAG evaluation: faithfulness, answer relevance, context precision', hours: 1.5, priority: 'must-know', weekNumber: 19, resources: [{ type: 'doc', label: 'RAGAS docs (docs.ragas.io)', url: 'https://docs.ragas.io/' }] },
          { id: 'w19-sat', title: 'Sat — Upgrade Week 18 RAG: + reranker + query rewriting + RAGAS', hours: 3, priority: 'must-know', weekNumber: 19, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w19-sun', title: 'Sun — Document everything in README. Before/after metrics comparison', hours: 3, priority: 'must-know', weekNumber: 19, resources: [{ type: 'doc', label: 'Self-driven' }] },
        ],
      },
      {
        id: 'w20',
        title: 'Week 20 — PROJECT 3: Production RAG over Real Corpus',
        subtopics: [
          { id: 'w20-mon', title: 'Mon — Pick corpus, document ingestion pipeline', hours: 1.5, priority: 'must-know', weekNumber: 20, resources: [{ type: 'doc', label: 'ArXiv / Wikipedia / OSS docs corpus' }] },
          { id: 'w20-tue', title: 'Tue — Implement chunking', hours: 1.5, priority: 'must-know', weekNumber: 20, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w20-wed', title: 'Wed — Embedding + Qdrant storage', hours: 1.5, priority: 'must-know', weekNumber: 20, resources: [{ type: 'doc', label: 'Qdrant docs', url: 'https://qdrant.tech/documentation/' }] },
          { id: 'w20-thu', title: 'Thu — Retrieval + reranker integration', hours: 1.5, priority: 'must-know', weekNumber: 20, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w20-fri', title: 'Fri — FastAPI streaming endpoint + auth + rate limiting', hours: 1.5, priority: 'must-know', weekNumber: 20, resources: [{ type: 'doc', label: 'FastAPI + slowapi', url: 'https://fastapi.tiangolo.com/' }] },
          { id: 'w20-sat', title: 'Sat — Dockerize + deploy to Render/HF Spaces', hours: 3, priority: 'must-know', weekNumber: 20, resources: [{ type: 'doc', label: 'Render / HF Spaces docs', url: 'https://render.com/docs' }] },
          { id: 'w20-sun', title: 'Sun — RAGAS evaluation + README + demo video', hours: 3, priority: 'must-know', weekNumber: 20, resources: [{ type: 'doc', label: 'Portfolio Project #3 — production RAG' }] },
        ],
      },
      {
        id: 'w21',
        title: 'Week 21 — Fine-Tuning Theory: LoRA, QLoRA, PEFT',
        subtopics: [
          { id: 'w21-mon', title: 'Mon — When fine-tuning beats prompting', hours: 1.5, priority: 'must-know', weekNumber: 21, resources: [{ type: 'article', label: 'Sebastian Raschka substack — "fine-tuning" articles', url: 'https://magazine.sebastianraschka.com/' }] },
          { id: 'w21-tue', title: 'Tue — Full FT vs PEFT trade-offs', hours: 1.5, priority: 'must-know', weekNumber: 21, resources: [{ type: 'article', label: 'Sebastian Raschka LoRA articles', url: 'https://magazine.sebastianraschka.com/' }] },
          { id: 'w21-wed', title: "Wed — LoRA math: W' = W + AB, why low-rank works", hours: 1.5, priority: 'must-know', weekNumber: 21, resources: [{ type: 'article', label: 'LoRA paper (arXiv:2106.09685) — abstract + intro + section 4', url: 'https://arxiv.org/abs/2106.09685' }] },
          { id: 'w21-thu', title: 'Thu — QLoRA: 4-bit quantization + LoRA', hours: 1.5, priority: 'must-know', weekNumber: 21, resources: [{ type: 'article', label: 'QLoRA paper abstract', url: 'https://arxiv.org/abs/2305.14314' }, { type: 'doc', label: 'bitsandbytes docs', url: 'https://github.com/TimDettmers/bitsandbytes' }] },
          { id: 'w21-fri', title: 'Fri — SFT vs DPO vs RLHF concepts', hours: 1.5, priority: 'must-know', weekNumber: 21, resources: [{ type: 'doc', label: 'HuggingFace TRL docs', url: 'https://huggingface.co/docs/trl' }] },
          { id: 'w21-sat', title: 'Sat — HuggingFace PEFT library hands-on', hours: 3, priority: 'must-know', weekNumber: 21, resources: [{ type: 'doc', label: 'huggingface.co/docs/peft', url: 'https://huggingface.co/docs/peft' }] },
          { id: 'w21-sun', title: 'Sun — Dataset formatting: chat templates, ShareGPT, Alpaca', hours: 3, priority: 'must-know', weekNumber: 21, resources: [{ type: 'doc', label: 'HF docs', url: 'https://huggingface.co/docs/transformers/chat_templating' }] },
        ],
      },
      {
        id: 'w22',
        title: 'Week 22 — Hands-On QLoRA Fine-Tuning',
        subtopics: [
          { id: 'w22-mon', title: 'Mon — Pick base model (Qwen2.5-1.5B or Llama-3.2-1B-Instruct) and domain dataset', hours: 1.5, priority: 'must-know', weekNumber: 22, resources: [{ type: 'doc', label: 'HF Hub model browse', url: 'https://huggingface.co/models' }] },
          { id: 'w22-tue', title: 'Tue — Prepare dataset in correct chat template format', hours: 1.5, priority: 'must-know', weekNumber: 22, resources: [{ type: 'doc', label: 'HF chat templating', url: 'https://huggingface.co/docs/transformers/chat_templating' }] },
          { id: 'w22-wed', title: 'Wed — Set up trl.SFTTrainer + bitsandbytes 4-bit + LoRA config', hours: 1.5, priority: 'must-know', weekNumber: 22, resources: [{ type: 'doc', label: 'HF TRL SFTTrainer', url: 'https://huggingface.co/docs/trl/sft_trainer' }] },
          { id: 'w22-thu', title: 'Thu — First training run (small) — debug issues', hours: 1.5, priority: 'must-know', weekNumber: 22, resources: [{ type: 'doc', label: 'Self-driven (Colab Pro / Kaggle T4)' }] },
          { id: 'w22-fri', title: 'Fri — Full training run with W&B logging', hours: 1.5, priority: 'must-know', weekNumber: 22, resources: [{ type: 'doc', label: 'W&B docs', url: 'https://docs.wandb.ai/' }] },
          { id: 'w22-sat', title: 'Sat — Evaluate before/after on held-out set — target ≥5% improvement', hours: 3, priority: 'must-know', weekNumber: 22, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w22-sun', title: 'Sun — Push LoRA adapter to HF Hub with model card', hours: 3, priority: 'must-know', weekNumber: 22, resources: [{ type: 'doc', label: 'HF Hub — Portfolio Project #4', url: 'https://huggingface.co/docs/hub/model-cards' }] },
        ],
      },
      {
        id: 'w23',
        title: 'Week 23 — Agents + Tool Use + MCP',
        subtopics: [
          { id: 'w23-mon', title: 'Mon — What is an AI agent? Tool calling protocols', hours: 1.5, priority: 'must-know', weekNumber: 23, resources: [{ type: 'doc', label: 'OpenAI function calling docs + Anthropic tool use docs', url: 'https://platform.openai.com/docs/guides/function-calling' }] },
          { id: 'w23-tue', title: 'Tue — LangGraph for stateful agents', hours: 1.5, priority: 'must-know', weekNumber: 23, resources: [{ type: 'doc', label: 'LangGraph docs (langchain-ai.github.io/langgraph)', url: 'https://langchain-ai.github.io/langgraph/' }] },
          { id: 'w23-wed', title: 'Wed — LangGraph tutorial — build first agent', hours: 1.5, priority: 'must-know', weekNumber: 23, resources: [{ type: 'doc', label: 'LangGraph tutorials', url: 'https://langchain-ai.github.io/langgraph/tutorials/' }] },
          { id: 'w23-thu', title: 'Thu — Pydantic AI / instructor for typed agent outputs', hours: 1.5, priority: 'must-know', weekNumber: 23, resources: [{ type: 'doc', label: 'pydantic-ai docs', url: 'https://ai.pydantic.dev/' }] },
          { id: 'w23-fri', title: 'Fri — MCP (Model Context Protocol)', hours: 1.5, priority: 'must-know', weekNumber: 23, resources: [{ type: 'doc', label: 'Anthropic MCP docs (modelcontextprotocol.io)', url: 'https://modelcontextprotocol.io/' }] },
          { id: 'w23-sat', title: 'Sat — Build tool-using agent: ≥3 tools (web search, calculator, file I/O)', hours: 3, priority: 'must-know', weekNumber: 23, resources: [{ type: 'doc', label: 'LangGraph', url: 'https://langchain-ai.github.io/langgraph/' }] },
          { id: 'w23-sun', title: 'Sun — Memory: short-term vs long-term, episodic', hours: 3, priority: 'must-know', weekNumber: 23, resources: [{ type: 'doc', label: 'LangGraph memory docs', url: 'https://langchain-ai.github.io/langgraph/concepts/memory/' }] },
        ],
      },
      {
        id: 'w24',
        title: 'Week 24 — Production LLM Patterns: Observability, Streamlit, Frontend Demo',
        subtopics: [
          { id: 'w24-mon', title: 'Mon — Streamlit basics — build LLM demos in Python', hours: 1.5, priority: 'must-know', weekNumber: 24, resources: [{ type: 'doc', label: 'Streamlit docs Quick Start', url: 'https://docs.streamlit.io/get-started' }] },
          { id: 'w24-tue', title: 'Tue — Wrap your RAG (Project 3) with a Streamlit UI', hours: 1.5, priority: 'must-know', weekNumber: 24, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w24-wed', title: 'Wed — LLM observability: Langfuse setup + integration', hours: 1.5, priority: 'must-know', weekNumber: 24, resources: [{ type: 'doc', label: 'Langfuse docs', url: 'https://langfuse.com/docs' }] },
          { id: 'w24-thu', title: 'Thu — Add tracing + cost tracking to your RAG project', hours: 1.5, priority: 'must-know', weekNumber: 24, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w24-fri', title: 'Fri — Build simple vanilla HTML+JS frontend that calls your FastAPI', hours: 1.5, priority: 'must-know', weekNumber: 24, resources: [{ type: 'doc', label: 'MDN fetch() docs', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch' }] },
          { id: 'w24-sat', title: 'Sat — Add prompt injection guardrails + PII detection (Presidio)', hours: 3, priority: 'must-know', weekNumber: 24, resources: [{ type: 'doc', label: 'Guardrails-AI library docs', url: 'https://www.guardrailsai.com/docs' }] },
          { id: 'w24-sun', title: 'Sun — Buffer: catch up on incomplete work, polish projects', hours: 3, priority: 'must-know', weekNumber: 24, resources: [{ type: 'doc', label: 'Self-driven — Buffer / polish' }] },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PHASE 4 — ML SYSTEM DESIGN + INTERVIEW PREP (Months 7-8) — 112 hours
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'phase-4',
    number: 4,
    title: 'ML System Design + Interview Prep',
    description: 'Master interview-grade skills — DSA, ML System Design, ML Breadth, polished portfolio.',
    weekRange: 'Weeks 25-32 · Months 7-8',
    topics: [
      {
        id: 'w25',
        title: 'Week 25 — DSA Sprint Part 1: Arrays, Strings, Hash Maps',
        subtopics: [
          { id: 'w25-mon', title: 'Mon — Two pointers pattern', hours: 1.5, priority: 'must-know', weekNumber: 25, resources: [{ type: 'doc', label: 'NeetCode "Two Pointers" — 3 problems', url: 'https://neetcode.io/practice' }] },
          { id: 'w25-tue', title: 'Tue — Sliding window', hours: 1.5, priority: 'must-know', weekNumber: 25, resources: [{ type: 'doc', label: 'NeetCode "Sliding Window" — 3 problems', url: 'https://neetcode.io/practice' }] },
          { id: 'w25-wed', title: 'Wed — Hash maps / sets', hours: 1.5, priority: 'must-know', weekNumber: 25, resources: [{ type: 'doc', label: 'NeetCode "Arrays & Hashing" — 3 problems', url: 'https://neetcode.io/practice' }] },
          { id: 'w25-thu', title: 'Thu — Prefix sum', hours: 1.5, priority: 'must-know', weekNumber: 25, resources: [{ type: 'doc', label: 'LeetCode prefix sum — 2 problems', url: 'https://leetcode.com/tag/prefix-sum/' }] },
          { id: 'w25-fri', title: 'Fri — Mock interview practice on Pramp', hours: 1.5, priority: 'must-know', weekNumber: 25, resources: [{ type: 'doc', label: 'Pramp.com (free)', url: 'https://www.pramp.com/' }] },
          { id: 'w25-sat', title: 'Sat — Catch-up + pattern review', hours: 3, priority: 'must-know', weekNumber: 25, resources: [{ type: 'doc', label: 'Re-solve hardest problems' }] },
          { id: 'w25-sun', title: 'Sun — Blind 75 progress — aim for 15 problems done', hours: 3, priority: 'must-know', weekNumber: 25, resources: [{ type: 'doc', label: 'Blind 75 list', url: 'https://neetcode.io/practice?tab=blind75' }] },
        ],
      },
      {
        id: 'w26',
        title: 'Week 26 — DSA Sprint Part 2: Trees, Graphs, DP',
        subtopics: [
          { id: 'w26-mon', title: 'Mon — Binary trees: DFS (pre/in/post), BFS', hours: 1.5, priority: 'must-know', weekNumber: 26, resources: [{ type: 'doc', label: 'NeetCode "Trees" — 3 problems', url: 'https://neetcode.io/practice' }] },
          { id: 'w26-tue', title: 'Tue — BST operations + LCA', hours: 1.5, priority: 'must-know', weekNumber: 26, resources: [{ type: 'doc', label: 'NeetCode — 3 problems', url: 'https://neetcode.io/practice' }] },
          { id: 'w26-wed', title: 'Wed — Graphs: BFS/DFS, connected components', hours: 1.5, priority: 'must-know', weekNumber: 26, resources: [{ type: 'doc', label: 'NeetCode "Graphs" — 3 problems', url: 'https://neetcode.io/practice' }] },
          { id: 'w26-thu', title: 'Thu — Topological sort, Union-Find', hours: 1.5, priority: 'must-know', weekNumber: 26, resources: [{ type: 'doc', label: 'NeetCode — 2 problems', url: 'https://neetcode.io/practice' }] },
          { id: 'w26-fri', title: 'Fri — DP basics: climbing stairs, coin change', hours: 1.5, priority: 'must-know', weekNumber: 26, resources: [{ type: 'doc', label: 'NeetCode "1-D DP" — 2 problems', url: 'https://neetcode.io/practice' }] },
          { id: 'w26-sat', title: 'Sat — DP intermediate: LIS, edit distance', hours: 3, priority: 'must-know', weekNumber: 26, resources: [{ type: 'doc', label: 'NeetCode — 3 problems', url: 'https://neetcode.io/practice' }] },
          { id: 'w26-sun', title: 'Sun — Heaps: top-K, merge K sorted lists', hours: 3, priority: 'must-know', weekNumber: 26, resources: [{ type: 'doc', label: 'NeetCode "Heap / Priority Queue" — 3 problems', url: 'https://neetcode.io/practice' }] },
        ],
      },
      {
        id: 'w27',
        title: 'Week 27 — ML System Design Framework',
        subtopics: [
          { id: 'w27-mon', title: 'Mon — The 8-step framework', hours: 1.5, priority: 'must-know', weekNumber: 27, resources: [{ type: 'book', label: 'Aminian book Chapter 1' }] },
          { id: 'w27-tue', title: 'Tue — Steps 1-2: Requirements, metrics', hours: 1.5, priority: 'must-know', weekNumber: 27, resources: [{ type: 'book', label: 'Aminian book' }] },
          { id: 'w27-wed', title: 'Wed — Steps 3-4: ML problem framing, data strategy', hours: 1.5, priority: 'must-know', weekNumber: 27, resources: [{ type: 'book', label: 'Aminian book' }] },
          { id: 'w27-thu', title: 'Thu — Steps 5-6: Feature engineering, model architecture', hours: 1.5, priority: 'must-know', weekNumber: 27, resources: [{ type: 'book', label: 'Aminian book' }] },
          { id: 'w27-fri', title: 'Fri — Steps 7-8: Training pipeline, serving + monitoring', hours: 1.5, priority: 'must-know', weekNumber: 27, resources: [{ type: 'book', label: 'Aminian book' }] },
          { id: 'w27-sat', title: 'Sat — Case Study 1: Video Recommendation System (YouTube)', hours: 3, priority: 'must-know', weekNumber: 27, resources: [{ type: 'book', label: 'Aminian Ch 2-3' }] },
          { id: 'w27-sun', title: 'Sun — Write your own design doc for the case study', hours: 3, priority: 'must-know', weekNumber: 27, resources: [{ type: 'doc', label: 'Self-driven' }] },
        ],
      },
      {
        id: 'w28',
        title: 'Week 28 — ML System Design Practice (5 Case Studies)',
        subtopics: [
          { id: 'w28-mon', title: 'Mon-Tue — Search & Ranking System — Aminian', hours: 3, priority: 'must-know', weekNumber: 28, resources: [{ type: 'book', label: 'Aminian — Search & Ranking' }] },
          { id: 'w28-wed', title: 'Wed-Thu — Ad Click Prediction at Scale — Aminian', hours: 3, priority: 'must-know', weekNumber: 28, resources: [{ type: 'book', label: 'Aminian — Ad Click Prediction' }] },
          { id: 'w28-fri', title: 'Fri — RAG Chatbot Architecture — use your Project 3 as starting point', hours: 1.5, priority: 'must-know', weekNumber: 28, resources: [{ type: 'doc', label: 'Self-driven (build on Project 3)' }] },
          { id: 'w28-sat', title: 'Sat — Content Moderation System — Aminian', hours: 3, priority: 'must-know', weekNumber: 28, resources: [{ type: 'book', label: 'Aminian — Content Moderation' }] },
          { id: 'w28-sun', title: 'Sun — Fraud Detection (imbalanced, real-time) — Aminian', hours: 3, priority: 'must-know', weekNumber: 28, resources: [{ type: 'book', label: 'Aminian — Fraud Detection' }] },
        ],
      },
      {
        id: 'w29',
        title: 'Week 29 — DSA Sprint Part 3: Hard Patterns',
        subtopics: [
          { id: 'w29-mon', title: 'Mon — Backtracking: subsets, permutations, N-queens', hours: 1.5, priority: 'must-know', weekNumber: 29, resources: [{ type: 'doc', label: 'NeetCode Backtracking', url: 'https://neetcode.io/practice' }] },
          { id: 'w29-tue', title: 'Tue — Greedy: interval scheduling, jump game', hours: 1.5, priority: 'must-know', weekNumber: 29, resources: [{ type: 'doc', label: 'NeetCode Greedy', url: 'https://neetcode.io/practice' }] },
          { id: 'w29-wed', title: 'Wed — Binary search variants', hours: 1.5, priority: 'must-know', weekNumber: 29, resources: [{ type: 'doc', label: 'NeetCode Binary Search', url: 'https://neetcode.io/practice' }] },
          { id: 'w29-thu', title: 'Thu — Trie problems', hours: 1.5, priority: 'must-know', weekNumber: 29, resources: [{ type: 'doc', label: 'NeetCode Tries', url: 'https://neetcode.io/practice' }] },
          { id: 'w29-fri', title: 'Fri — Bit manipulation basics', hours: 1.5, priority: 'must-know', weekNumber: 29, resources: [{ type: 'doc', label: 'NeetCode Bit Manipulation', url: 'https://neetcode.io/practice' }] },
          { id: 'w29-sat', title: 'Sat — Hard DP: knapsack, LCS', hours: 3, priority: 'must-know', weekNumber: 29, resources: [{ type: 'doc', label: 'NeetCode 2-D DP', url: 'https://neetcode.io/practice' }] },
          { id: 'w29-sun', title: 'Sun — Mock interview on Pramp + review', hours: 3, priority: 'must-know', weekNumber: 29, resources: [{ type: 'doc', label: 'Pramp.com', url: 'https://www.pramp.com/' }] },
        ],
      },
      {
        id: 'w30',
        title: 'Week 30 — ML Breadth Interview Review',
        subtopics: [
          { id: 'w30-mon', title: 'Mon — Why gradient descent works. Cross-entropy derivation.', hours: 1.5, priority: 'must-know', weekNumber: 30, resources: [{ type: 'article', label: "Eldan's guide page 11" }] },
          { id: 'w30-tue', title: 'Tue — Bias-variance tradeoff. L1 vs L2.', hours: 1.5, priority: 'must-know', weekNumber: 30, resources: [{ type: 'article', label: "Eldan's guide page 11" }] },
          { id: 'w30-wed', title: 'Wed — Batch norm vs Layer norm. Vanishing gradients + ResNet.', hours: 1.5, priority: 'must-know', weekNumber: 30, resources: [{ type: 'article', label: "Eldan's guide page 11" }] },
          { id: 'w30-thu', title: 'Thu — Adam math (first + second moments). MSE vs cross-entropy.', hours: 1.5, priority: 'must-know', weekNumber: 30, resources: [{ type: 'article', label: "Eldan's guide page 11" }] },
          { id: 'w30-fri', title: 'Fri — Self-attention from scratch. Q/K/V.', hours: 1.5, priority: 'must-know', weekNumber: 30, resources: [{ type: 'article', label: 'Attention Is All You Need', url: 'https://arxiv.org/abs/1706.03762' }] },
          { id: 'w30-sat', title: 'Sat — LoRA math + why it works. RLHF end-to-end. KV cache.', hours: 3, priority: 'must-know', weekNumber: 30, resources: [{ type: 'article', label: 'LoRA paper + Raschka substack', url: 'https://arxiv.org/abs/2106.09685' }] },
          { id: 'w30-sun', title: 'Sun — SFT vs RLHF vs DPO. Build Anki deck of 100+ Q&A.', hours: 3, priority: 'must-know', weekNumber: 30, resources: [{ type: 'doc', label: 'Anki + Notion flashcards' }] },
        ],
      },
      {
        id: 'w31',
        title: 'Week 31 — Resume + GitHub Polish + Behavioral Stories',
        subtopics: [
          { id: 'w31-mon', title: 'Mon — Rewrite resume (Action verb → What → Result with numbers)', hours: 1.5, priority: 'must-know', weekNumber: 31, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w31-tue', title: 'Tue — Polish all GitHub repos: clean READMEs, architecture diagrams, demo GIFs', hours: 1.5, priority: 'must-know', weekNumber: 31, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w31-wed', title: 'Wed — Build portfolio website (GitHub Pages + template)', hours: 1.5, priority: 'must-know', weekNumber: 31, resources: [{ type: 'doc', label: 'GitHub Pages docs', url: 'https://pages.github.com/' }] },
          { id: 'w31-thu', title: 'Thu — LinkedIn profile overhaul — keywords for recruiter search', hours: 1.5, priority: 'must-know', weekNumber: 31, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w31-fri', title: "Fri — Prepare 8 STAR stories (Eldan's page 14)", hours: 1.5, priority: 'must-know', weekNumber: 31, resources: [{ type: 'article', label: "Eldan's guide page 14" }] },
          { id: 'w31-sat', title: 'Sat — Practice STAR stories out loud, record yourself', hours: 3, priority: 'must-know', weekNumber: 31, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w31-sun', title: 'Sun — Get resume reviewed: r/EngineeringResumes or senior', hours: 3, priority: 'must-know', weekNumber: 31, resources: [{ type: 'doc', label: 'r/EngineeringResumes', url: 'https://www.reddit.com/r/EngineeringResumes/' }] },
        ],
      },
      {
        id: 'w32',
        title: 'Week 32 — Full Mock Interview Loops',
        subtopics: [
          { id: 'w32-mon', title: 'Mon — Pramp DSA mock', hours: 1.5, priority: 'must-know', weekNumber: 32, resources: [{ type: 'doc', label: 'Pramp', url: 'https://www.pramp.com/' }] },
          { id: 'w32-tue', title: 'Tue — Pramp behavioral mock', hours: 1.5, priority: 'must-know', weekNumber: 32, resources: [{ type: 'doc', label: 'Pramp', url: 'https://www.pramp.com/' }] },
          { id: 'w32-wed', title: 'Wed — interviewing.io DSA mock or another Pramp', hours: 1.5, priority: 'must-know', weekNumber: 32, resources: [{ type: 'doc', label: 'interviewing.io', url: 'https://interviewing.io/' }] },
          { id: 'w32-thu', title: 'Thu — ML system design mock with peer', hours: 1.5, priority: 'must-know', weekNumber: 32, resources: [{ type: 'doc', label: 'Self-driven (peer pairing)' }] },
          { id: 'w32-fri', title: 'Fri — ML breadth mock with peer', hours: 1.5, priority: 'must-know', weekNumber: 32, resources: [{ type: 'doc', label: 'Self-driven (peer pairing)' }] },
          { id: 'w32-sat', title: 'Sat — Review all feedback, identify weak spots', hours: 3, priority: 'must-know', weekNumber: 32, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w32-sun', title: 'Sun — Focused drilling on weak spots', hours: 3, priority: 'must-know', weekNumber: 32, resources: [{ type: 'doc', label: 'Self-driven' }] },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PHASE 5 — SPECIALIZATION + APPLICATIONS (Months 9-10) — 112 hours
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'phase-5',
    number: 5,
    title: 'Specialization + Applications',
    description: 'Specialize, apply for internships, optionally start MS prep.',
    weekRange: 'Weeks 33-40 · Months 9-10',
    topics: [
      {
        id: 'w33',
        title: 'Week 33 — Production LLM Serving + Cloud Basics',
        subtopics: [
          { id: 'w33-mon', title: 'Mon — vLLM: continuous batching, PagedAttention', hours: 1.5, priority: 'must-know', weekNumber: 33, resources: [{ type: 'doc', label: 'vllm.readthedocs.io', url: 'https://docs.vllm.ai/' }] },
          { id: 'w33-tue', title: 'Tue — Ollama for local LLM serving', hours: 1.5, priority: 'must-know', weekNumber: 33, resources: [{ type: 'doc', label: 'Ollama docs', url: 'https://github.com/ollama/ollama' }] },
          { id: 'w33-wed', title: 'Wed — Quantization: GPTQ, AWQ, GGUF, INT4', hours: 1.5, priority: 'must-know', weekNumber: 33, resources: [{ type: 'doc', label: 'bitsandbytes + GGUF docs', url: 'https://github.com/ggerganov/llama.cpp/blob/master/gguf-py/README.md' }] },
          { id: 'w33-thu', title: 'Thu — AWS basics: S3, EC2, IAM', hours: 1.5, priority: 'must-know', weekNumber: 33, resources: [{ type: 'course', label: 'AWS Skill Builder (free) — Cloud Practitioner path', url: 'https://explore.skillbuilder.aws/' }] },
          { id: 'w33-fri', title: 'Fri — AWS Bedrock for hosted LLM access', hours: 1.5, priority: 'must-know', weekNumber: 33, resources: [{ type: 'doc', label: 'AWS docs', url: 'https://docs.aws.amazon.com/bedrock/' }] },
          { id: 'w33-sat', title: 'Sat — Stand up vLLM locally with a small model, benchmark tokens/sec', hours: 3, priority: 'must-know', weekNumber: 33, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w33-sun', title: 'Sun — Deploy a model to AWS (EC2 or Bedrock) — get hands-on cloud experience', hours: 3, priority: 'must-know', weekNumber: 33, resources: [{ type: 'doc', label: 'AWS free tier', url: 'https://aws.amazon.com/free/' }] },
        ],
      },
      {
        id: 'w34',
        title: 'Week 34 — LLM Evaluation + Guardrails + Observability',
        subtopics: [
          { id: 'w34-mon', title: 'Mon — LLM-as-a-judge: biases (verbosity, position, self-preference)', hours: 1.5, priority: 'must-know', weekNumber: 34, resources: [{ type: 'article', label: 'Anthropic + OpenAI eval blog posts', url: 'https://www.anthropic.com/news' }] },
          { id: 'w34-tue', title: 'Tue — Golden datasets + regression suites', hours: 1.5, priority: 'must-know', weekNumber: 34, resources: [{ type: 'article', label: 'aiwithanju roadmap slide 9' }] },
          { id: 'w34-wed', title: 'Wed — DeepEval + Promptfoo for systematic testing', hours: 1.5, priority: 'must-know', weekNumber: 34, resources: [{ type: 'doc', label: 'DeepEval docs', url: 'https://docs.confident-ai.com/' }] },
          { id: 'w34-thu', title: 'Thu — Prompt injection attacks + defenses (OWASP LLM Top 10)', hours: 1.5, priority: 'must-know', weekNumber: 34, resources: [{ type: 'doc', label: 'OWASP LLM docs', url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/' }] },
          { id: 'w34-fri', title: 'Fri — Guardrails: input/output filtering, allowlists', hours: 1.5, priority: 'must-know', weekNumber: 34, resources: [{ type: 'doc', label: 'Guardrails-AI', url: 'https://www.guardrailsai.com/docs' }] },
          { id: 'w34-sat', title: 'Sat — Add full eval suite + CI gates to your RAG project', hours: 3, priority: 'must-know', weekNumber: 34, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w34-sun', title: 'Sun — Add prompt injection guardrails + red-team your own agent', hours: 3, priority: 'must-know', weekNumber: 34, resources: [{ type: 'doc', label: 'Self-driven' }] },
        ],
      },
      {
        id: 'w35',
        title: 'Week 35 — Open Source Contribution + Capstone Kickoff',
        subtopics: [
          { id: 'w35-mon', title: 'Mon — Find a "good first issue" on a target repo', hours: 1.5, priority: 'must-know', weekNumber: 35, resources: [{ type: 'doc', label: 'GitHub good-first-issue search', url: 'https://github.com/search?q=label%3A%22good+first+issue%22&type=issues' }] },
          { id: 'w35-tue', title: 'Tue — Clone, set up dev environment, understand codebase', hours: 1.5, priority: 'must-know', weekNumber: 35, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w35-wed', title: 'Wed — Work on the issue', hours: 1.5, priority: 'must-know', weekNumber: 35, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w35-thu', title: 'Thu — Work on the issue', hours: 1.5, priority: 'must-know', weekNumber: 35, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w35-fri', title: 'Fri — Open the PR', hours: 1.5, priority: 'must-know', weekNumber: 35, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w35-sat', title: 'Sat — Start CAPSTONE: Multi-agent system with evals', hours: 3, priority: 'must-know', weekNumber: 35, resources: [{ type: 'doc', label: 'LangGraph or Microsoft Agent Framework' }] },
          { id: 'w35-sun', title: 'Sun — Continue capstone', hours: 3, priority: 'must-know', weekNumber: 35, resources: [{ type: 'doc', label: 'Self-driven' }] },
        ],
      },
      {
        id: 'w36',
        title: 'Week 36 — CAPSTONE: Multi-Agent Production System',
        subtopics: [
          { id: 'w36-mon', title: 'Mon-Wed — Build core agent + tool integrations', hours: 4.5, priority: 'must-know', weekNumber: 36, resources: [{ type: 'doc', label: 'LangGraph', url: 'https://langchain-ai.github.io/langgraph/' }] },
          { id: 'w36-thu', title: 'Thu — Pydantic validation on all tool inputs', hours: 1.5, priority: 'must-know', weekNumber: 36, resources: [{ type: 'doc', label: 'pydantic-ai', url: 'https://ai.pydantic.dev/' }] },
          { id: 'w36-fri', title: 'Fri — Build golden eval set', hours: 1.5, priority: 'must-know', weekNumber: 36, resources: [{ type: 'doc', label: 'Self-driven (≥50 cases)' }] },
          { id: 'w36-sat', title: 'Sat — Set up CI/CD with eval gates', hours: 3, priority: 'must-know', weekNumber: 36, resources: [{ type: 'doc', label: 'GitHub Actions', url: 'https://docs.github.com/en/actions' }] },
          { id: 'w36-sun', title: 'Sun — Deploy + Langfuse tracing — Portfolio Capstone Project #5', hours: 3, priority: 'must-know', weekNumber: 36, resources: [{ type: 'doc', label: 'Langfuse + Render/Railway/AWS', url: 'https://langfuse.com/docs' }] },
        ],
      },
      {
        id: 'w37',
        title: 'Week 37 — Internship/Job Applications Sprint',
        subtopics: [
          { id: 'w37-mon', title: 'Mon — Identify 30 target companies (5 stretch MAANG, 15 strong AI startups, 10 realistic)', hours: 1.5, priority: 'must-know', weekNumber: 37, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w37-tue', title: 'Tue — Apply to 10 — tailor resume per role', hours: 1.5, priority: 'must-know', weekNumber: 37, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w37-wed', title: 'Wed — LinkedIn outreach: 20 AI engineers at target companies', hours: 1.5, priority: 'must-know', weekNumber: 37, resources: [{ type: 'doc', label: 'LinkedIn', url: 'https://www.linkedin.com/' }] },
          { id: 'w37-thu', title: 'Thu — Ask 3 connections for referrals', hours: 1.5, priority: 'must-know', weekNumber: 37, resources: [{ type: 'doc', label: 'Self-driven — referral rule: "One genuine referral is worth 50 cold applies."' }] },
          { id: 'w37-fri', title: 'Fri — Apply to 10 more', hours: 1.5, priority: 'must-know', weekNumber: 37, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w37-sat', title: 'Sat — Write 3 detailed blog posts on your projects (Medium/personal site)', hours: 3, priority: 'must-know', weekNumber: 37, resources: [{ type: 'doc', label: 'Medium / personal site', url: 'https://medium.com/' }] },
          { id: 'w37-sun', title: 'Sun — Cross-post projects on Twitter/X with #BuildInPublic', hours: 3, priority: 'must-know', weekNumber: 37, resources: [{ type: 'doc', label: 'Twitter / X', url: 'https://x.com/' }] },
        ],
      },
      {
        id: 'w38',
        title: 'Week 38 — Phone Screens + Onsite Prep',
        subtopics: [
          { id: 'w38-mon', title: 'Mon — DSA: 1 medium problem to stay sharp', hours: 1, priority: 'must-know', weekNumber: 38, resources: [{ type: 'doc', label: 'LeetCode', url: 'https://leetcode.com/' }] },
          { id: 'w38-tue', title: 'Tue — Review ML breadth flashcards (Anki)', hours: 0.5, priority: 'must-know', weekNumber: 38, resources: [{ type: 'doc', label: 'Anki deck (from Week 30)' }] },
          { id: 'w38-wed', title: 'Wed — Prep for upcoming interviews (research company + recent papers from their team)', hours: 1.5, priority: 'must-know', weekNumber: 38, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w38-thu', title: 'Thu — DSA: 1 medium problem + ML flashcards', hours: 1.5, priority: 'must-know', weekNumber: 38, resources: [{ type: 'doc', label: 'LeetCode + Anki', url: 'https://leetcode.com/' }] },
          { id: 'w38-fri', title: 'Fri — DSA + flashcards + interview prep continued', hours: 1.5, priority: 'must-know', weekNumber: 38, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w38-sat', title: 'Sat — Mock interview + project deep-dive practice', hours: 3, priority: 'must-know', weekNumber: 38, resources: [{ type: 'doc', label: 'Pramp + peer pairing', url: 'https://www.pramp.com/' }] },
          { id: 'w38-sun', title: 'Sun — Mock interview + project deep-dive practice', hours: 3, priority: 'must-know', weekNumber: 38, resources: [{ type: 'doc', label: 'Pramp + peer pairing', url: 'https://www.pramp.com/' }] },
        ],
      },
      {
        id: 'w39',
        title: 'Week 39 — Specialization Decision Point',
        subtopics: [
          { id: 'w39-mon', title: 'Mon — Track A — Applied LLM Engineering: agents, MCP, structured generation, observability', hours: 1.5, priority: 'must-know', weekNumber: 39, resources: [{ type: 'doc', label: 'Track A (recommended default)' }] },
          { id: 'w39-tue', title: 'Tue — Track B — ML Platform / MLOps: Kubernetes, Ray, feature stores (Feast)', hours: 1.5, priority: 'must-know', weekNumber: 39, resources: [{ type: 'doc', label: 'Feast docs', url: 'https://docs.feast.dev/' }] },
          { id: 'w39-wed', title: 'Wed — Track C — Multimodal AI: CV + LLMs, VLMs like LLaVA, Qwen-VL', hours: 1.5, priority: 'must-know', weekNumber: 39, resources: [{ type: 'doc', label: 'LLaVA project', url: 'https://llava-vl.github.io/' }] },
          { id: 'w39-thu', title: 'Thu — Track D — Foundation Models / Research (needs MS+); read papers, reproduce SOTA', hours: 1.5, priority: 'must-know', weekNumber: 39, resources: [{ type: 'doc', label: 'arXiv', url: 'https://arxiv.org/' }] },
          { id: 'w39-fri', title: 'Fri — Pick ONE track and outline mini-project scope', hours: 1.5, priority: 'must-know', weekNumber: 39, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w39-sat', title: 'Sat — Deep-dive study on chosen track', hours: 3, priority: 'must-know', weekNumber: 39, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w39-sun', title: 'Sun — Start mini-project in chosen specialization', hours: 3, priority: 'must-know', weekNumber: 39, resources: [{ type: 'doc', label: 'Self-driven' }] },
        ],
      },
      {
        id: 'w40',
        title: 'Week 40 — Final Buffer + MS Application Kickoff',
        subtopics: [
          { id: 'w40-mon', title: 'Mon — GRE prep starts (target 325+, Quant 168+) — Magoosh or Manhattan Prep', hours: 2, priority: 'must-know', weekNumber: 40, resources: [{ type: 'course', label: 'Magoosh / Manhattan Prep', url: 'https://magoosh.com/gre/' }] },
          { id: 'w40-tue', title: 'Tue — GRE prep continues', hours: 2, priority: 'must-know', weekNumber: 40, resources: [{ type: 'course', label: 'Magoosh', url: 'https://magoosh.com/gre/' }] },
          { id: 'w40-wed', title: 'Wed — GRE prep + identify 10 target universities (Tier 1/2/3)', hours: 2, priority: 'must-know', weekNumber: 40, resources: [{ type: 'doc', label: 'University shortlist research' }] },
          { id: 'w40-thu', title: 'Thu — GRE prep + identify 5 faculty per university whose research aligns', hours: 2, priority: 'must-know', weekNumber: 40, resources: [{ type: 'doc', label: 'Faculty research alignment' }] },
          { id: 'w40-fri', title: 'Fri — Draft SOP v0 — concrete research alignment, not generic AI enthusiasm', hours: 2, priority: 'must-know', weekNumber: 40, resources: [{ type: 'doc', label: 'SOP draft v0' }] },
          { id: 'w40-sat', title: 'Sat — Buffer: catch up on incomplete weeks, polish capstone', hours: 2, priority: 'must-know', weekNumber: 40, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w40-sun', title: 'Sun — Plan next 6 months: MS timeline + specialization deep-dive', hours: 2, priority: 'must-know', weekNumber: 40, resources: [{ type: 'doc', label: 'Forward planning' }] },
        ],
      },
    ],
  },
];

// Index for fast lookups
export const allSubtopicIds: string[] = roadmap.flatMap((p) =>
  p.topics.flatMap((t) => t.subtopics.map((s) => s.id))
);

export const subtopicsByWeek: Record<number, { phaseId: string; topicId: string; subtopicId: string; title: string }[]> = {};
for (const phase of roadmap) {
  for (const topic of phase.topics) {
    for (const sub of topic.subtopics) {
      if (!subtopicsByWeek[sub.weekNumber]) subtopicsByWeek[sub.weekNumber] = [];
      subtopicsByWeek[sub.weekNumber].push({
        phaseId: phase.id,
        topicId: topic.id,
        subtopicId: sub.id,
        title: sub.title,
      });
    }
  }
}

export const MOTIVATIONAL_QUOTES: string[] = [
  'Compounding small daily reps beats heroic weekends.',
  'You don\'t rise to the level of your goals — you fall to the level of your systems.',
  'Read papers like a builder, not a tourist.',
  'Ship the project. The polish comes from shipping again.',
  'One genuine referral is worth fifty cold applications.',
  'Backprop is just the chain rule with bookkeeping.',
  'If you can\'t explain it simply, you don\'t understand it well enough.',
  'The model is only as good as the eval that gates it.',
  'Make it work, make it right, make it fast — in that order.',
  'You\'re not behind. You\'re early. Keep going.',
];
