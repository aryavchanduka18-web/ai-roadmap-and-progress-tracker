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
          { id: 'w1-mon', title: 'Day 1 — Vectors, dot product, vector addition', hours: 1.5, priority: 'must-know', weekNumber: 1, resources: [{ type: 'youtube', label: '3B1B Linear Algebra — Ep 1: Vectors, what even are they?', url: 'https://www.youtube.com/watch?v=fNk_zzaMoSs' }, { type: 'youtube', label: '3B1B Linear Algebra — Ep 2: Linear combinations, span, basis', url: 'https://www.youtube.com/watch?v=k7RM-ot2NWY' }] },
          { id: 'w1-tue', title: 'Day 2 — Linear combinations, span, basis vectors', hours: 1.5, priority: 'must-know', weekNumber: 1, resources: [{ type: 'youtube', label: '3B1B Linear Algebra — Ep 3: Linear transformations and matrices', url: 'https://www.youtube.com/watch?v=kYB8IZa5AuE' }, { type: 'youtube', label: '3B1B Linear Algebra — Ep 4: Matrix multiplication as composition', url: 'https://www.youtube.com/watch?v=XkY2DOUCWMU' }] },
          { id: 'w1-wed', title: 'Day 3 — Matrix transformations', hours: 1.5, priority: 'must-know', weekNumber: 1, resources: [{ type: 'youtube', label: '3B1B Linear Algebra — Ep 5: Three-dimensional linear transformations', url: 'https://www.youtube.com/watch?v=rHLEWRxRGiM' }, { type: 'youtube', label: '3B1B Linear Algebra — Ep 6: The determinant', url: 'https://www.youtube.com/watch?v=Ip3X9LOh2dk' }] },
          { id: 'w1-thu', title: 'Day 4 — Matrix multiplication, 3D transformations', hours: 1.5, priority: 'must-know', weekNumber: 1, resources: [{ type: 'youtube', label: '3B1B Linear Algebra — Ep 7: Inverse matrices, column space, null space', url: 'https://www.youtube.com/watch?v=uQhTuRlWMxw' }, { type: 'youtube', label: '3B1B Linear Algebra — Ep 8: Nonsquare matrices as transformations', url: 'https://www.youtube.com/watch?v=v8VSDg_WQlA' }] },
          { id: 'w1-fri', title: 'Day 5 — Determinants, inverse matrices', hours: 1.5, priority: 'must-know', weekNumber: 1, resources: [{ type: 'youtube', label: '3B1B Linear Algebra — Ep 9: Dot products and duality', url: 'https://www.youtube.com/watch?v=LyGKycYT2v0' }, { type: 'youtube', label: '3B1B Linear Algebra — Ep 10: Cross products', url: 'https://www.youtube.com/watch?v=eu6i7WJeinw' }] },
          { id: 'w1-sat', title: 'Day 6 — Eigenvectors & eigenvalues, SVD intuition', hours: 3, priority: 'must-know', weekNumber: 1, resources: [{ type: 'youtube', label: '3B1B Linear Algebra — Ep 14: Eigenvectors and eigenvalues', url: 'https://www.youtube.com/watch?v=PFDu9oVAE-g' }, { type: 'youtube', label: '3B1B Linear Algebra — Ep 11: Cross products via linear transformations', url: 'https://www.youtube.com/watch?v=BaM7OCEm3G0' }, { type: 'youtube', label: '3B1B — A quick trick for computing eigenvalues', url: 'https://www.youtube.com/watch?v=e50Bj7jn9IQ' }] },
          { id: 'w1-sun', title: 'Day 7 — Implement matmul, eigendecomposition by hand in NumPy', hours: 3, priority: 'must-know', weekNumber: 1, resources: [{ type: 'doc', label: 'Self-driven — NumPy practice' }] },
        ],
      },
      {
        id: 'w2',
        title: 'Week 2 — Calculus + Probability for ML',
        subtopics: [
          { id: 'w2-mon', title: 'Day 1 — Derivatives, geometric meaning', hours: 1.5, priority: 'must-know', weekNumber: 2, resources: [{ type: 'youtube', label: '3B1B Calculus — Ep 1: The essence of calculus', url: 'https://www.youtube.com/watch?v=WUvTyaaNkzM' }, { type: 'youtube', label: '3B1B Calculus — Ep 2: The paradox of the derivative', url: 'https://www.youtube.com/watch?v=9vKqVkMQHKk' }, { type: 'youtube', label: '3B1B Calculus — Ep 3: Derivative formulas through geometry', url: 'https://www.youtube.com/watch?v=S0_qX4VJhMQ' }] },
          { id: 'w2-tue', title: 'Day 2 — Chain rule (THIS IS BACKPROP)', hours: 1.5, priority: 'must-know', weekNumber: 2, resources: [{ type: 'youtube', label: '3B1B Calculus — Ep 4: Visualizing the chain rule and product rule (watch twice)', url: 'https://www.youtube.com/watch?v=YG15m2VwSjA' }] },
          { id: 'w2-wed', title: 'Day 3 — Partial derivatives, gradients', hours: 1.5, priority: 'must-know', weekNumber: 2, resources: [{ type: 'course', label: 'Khan Academy Multivariable Calculus — gradient + chain rule only', url: 'https://www.khanacademy.org/math/multivariable-calculus' }] },
          { id: 'w2-thu', title: 'Day 4 — Probability basics, random variables, expectation, variance', hours: 1.5, priority: 'must-know', weekNumber: 2, resources: [{ type: 'youtube', label: 'StatQuest: Probability is not Likelihood', url: 'https://www.youtube.com/watch?v=pYxNSUDSFH4' }, { type: 'youtube', label: 'StatQuest: Expected Values, Main Ideas', url: 'https://www.youtube.com/watch?v=KLs_7b7SKi4' }] },
          { id: 'w2-fri', title: 'Day 5 — Distributions: Bernoulli, Gaussian, Categorical', hours: 1.5, priority: 'must-know', weekNumber: 2, resources: [{ type: 'youtube', label: 'StatQuest: The Normal Distribution, Clearly Explained', url: 'https://www.youtube.com/watch?v=rzFX5NWojp0' }, { type: 'youtube', label: 'StatQuest: The Binomial Distribution', url: 'https://www.youtube.com/watch?v=8idr1WZ1A7Q' }] },
          { id: 'w2-sat', title: 'Day 6 — Bayes Theorem + conditional probability', hours: 3, priority: 'must-know', weekNumber: 2, resources: [{ type: 'youtube', label: 'StatQuest: Bayes Theorem, Clearly Explained!', url: 'https://www.youtube.com/watch?v=9wCnvr7Xw4E' }] },
          { id: 'w2-sun', title: 'Day 7 — Cross-entropy, KL divergence', hours: 3, priority: 'must-know', weekNumber: 2, resources: [{ type: 'youtube', label: 'Aurélien Géron\'s "Short Intro to Entropy/Cross-Entropy/KL" (YouTube, 10 min, watch 3x)', url: 'https://www.youtube.com/watch?v=ErfnhcEV1O8' }] },
        ],
      },
      {
        id: 'w3',
        title: 'Week 3 — Python ML Toolchain + Linux/Git Basics',
        subtopics: [
          { id: 'w3-mon', title: 'Day 1 — Install uv (modern Python package manager) + Linux/Bash basics', hours: 1.5, priority: 'must-know', weekNumber: 3, resources: [{ type: 'doc', label: 'uv: Installation guide (first install)', url: 'https://docs.astral.sh/uv/getting-started/installation/' }, { type: 'doc', label: 'uv: First steps with projects', url: 'https://docs.astral.sh/uv/guides/projects/' }, { type: 'course', label: 'Linux Journey — Lesson 1: The Shell', url: 'https://linuxjourney.com/lesson/the-shell' }] },
          { id: 'w3-tue', title: 'Day 2 — NumPy deep dive: broadcasting, vectorization', hours: 1.5, priority: 'must-know', weekNumber: 3, resources: [{ type: 'youtube', label: 'Keith Galli — "Complete Python NumPy Tutorial"', url: 'https://www.youtube.com/watch?v=GB9ByFAIAH4' }] },
          { id: 'w3-wed', title: 'Day 3 — Pandas: DataFrames, filtering, groupby, merge', hours: 1.5, priority: 'must-know', weekNumber: 3, resources: [{ type: 'youtube', label: 'Corey Schafer: Pandas Tutorial Ep 1 — Installation and Loading Data', url: 'https://www.youtube.com/watch?v=ZyhVh-qRZPA' }, { type: 'youtube', label: 'Corey Schafer: Pandas Tutorial Ep 2 — DataFrame and Series Basics', url: 'https://www.youtube.com/watch?v=zmdjNSmRXF4' }] },
          { id: 'w3-thu', title: 'Day 4 — Pandas continued: pivot, time series, missing data', hours: 1.5, priority: 'must-know', weekNumber: 3, resources: [{ type: 'youtube', label: 'Corey Schafer: Pandas Tutorial Ep 5 — Updating Rows and Columns', url: 'https://www.youtube.com/watch?v=DCDe29sIKcE' }, { type: 'youtube', label: 'Corey Schafer: Pandas Tutorial Ep 7 — Time Series Data', url: 'https://www.youtube.com/watch?v=UFuo7EHI8zc' }] },
          { id: 'w3-fri', title: 'Day 5 — Matplotlib + Seaborn', hours: 1.5, priority: 'must-know', weekNumber: 3, resources: [{ type: 'youtube', label: 'Corey Schafer: Matplotlib Tutorial Ep 1 — Creating and Customizing Plots', url: 'https://www.youtube.com/watch?v=UO98lJQ3QGI' }] },
          { id: 'w3-sat', title: 'Day 6 — Git/GitHub: branches, commits, PRs, .gitignore', hours: 3, priority: 'must-know', weekNumber: 3, resources: [{ type: 'youtube', label: 'Corey Schafer: Git Tutorial Ep 1 — What is Git and why use it', url: 'https://www.youtube.com/watch?v=HVsySz-h9r4' }, { type: 'youtube', label: 'Corey Schafer: Git Tutorial Ep 2 — Installation and first commit', url: 'https://www.youtube.com/watch?v=8JJ101D3knE' }] },
          { id: 'w3-sun', title: 'Day 7 — Set up: GitHub, W&B, HuggingFace, Kaggle accounts. Push first repo.', hours: 3, priority: 'must-know', weekNumber: 3, resources: [{ type: 'doc', label: 'GitHub + W&B + HuggingFace + Kaggle account setup' }] },
        ],
      },
      {
        id: 'w4',
        title: 'Week 4 — Classical ML Part 1: Regression + Classification',
        subtopics: [
          { id: 'w4-mon', title: 'Day 1 — What is ML? Supervised vs Unsupervised. Train/val/test splits', hours: 1.5, priority: 'must-know', weekNumber: 4, resources: [{ type: 'course', label: 'Andrew Ng Machine Learning Specialization (Coursera, free audit) — Course 1, Week 1', url: 'https://www.coursera.org/specializations/machine-learning-introduction' }] },
          { id: 'w4-tue', title: 'Day 2 — Linear Regression (single variable) — math + intuition', hours: 1.5, priority: 'must-know', weekNumber: 4, resources: [{ type: 'course', label: 'Andrew Ng Course 1, Week 1', url: 'https://www.coursera.org/specializations/machine-learning-introduction' }] },
          { id: 'w4-wed', title: 'Day 3 — Multiple linear regression, gradient descent', hours: 1.5, priority: 'must-know', weekNumber: 4, resources: [{ type: 'course', label: 'Andrew Ng Course 1, Week 2', url: 'https://www.coursera.org/specializations/machine-learning-introduction' }] },
          { id: 'w4-thu', title: 'Day 4 — Implement linear regression from scratch in NumPy', hours: 1.5, priority: 'must-know', weekNumber: 4, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w4-fri', title: 'Day 5 — Logistic regression, sigmoid, binary classification', hours: 1.5, priority: 'must-know', weekNumber: 4, resources: [{ type: 'course', label: 'Andrew Ng Course 1, Week 3', url: 'https://www.coursera.org/specializations/machine-learning-introduction' }] },
          { id: 'w4-sat', title: 'Day 6 — Logistic regression from scratch + cost derivation', hours: 3, priority: 'must-know', weekNumber: 4, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w4-sun', title: 'Day 7 — Overfitting, regularization (L1/L2), bias-variance', hours: 3, priority: 'must-know', weekNumber: 4, resources: [{ type: 'course', label: 'Andrew Ng Course 1, Week 3 end', url: 'https://www.coursera.org/specializations/machine-learning-introduction' }] },
        ],
      },
      {
        id: 'w5',
        title: 'Week 5 — Classical ML Part 2: Trees + Ensembles',
        subtopics: [
          { id: 'w5-mon', title: 'Day 1 — Decision Trees: entropy, Gini', hours: 1.5, priority: 'must-know', weekNumber: 5, resources: [{ type: 'youtube', label: 'StatQuest: Decision and Classification Trees, Clearly Explained!', url: 'https://www.youtube.com/watch?v=_L39rN6gz7Y' }, { type: 'course', label: 'Andrew Ng Course 2, Week 4', url: 'https://www.coursera.org/specializations/machine-learning-introduction' }] },
          { id: 'w5-tue', title: 'Day 2 — Random Forests + bagging', hours: 1.5, priority: 'must-know', weekNumber: 5, resources: [{ type: 'youtube', label: 'StatQuest: Random Forests Part 1 — Building, Using and Evaluating', url: 'https://www.youtube.com/watch?v=J4Wdy0Wc_xQ' }, { type: 'youtube', label: 'StatQuest: Random Forests Part 2 — Missing data & Sample Clustering', url: 'https://www.youtube.com/watch?v=sQ870aTKqiM' }] },
          { id: 'w5-wed', title: 'Day 3 — Gradient Boosting intuition', hours: 1.5, priority: 'must-know', weekNumber: 5, resources: [{ type: 'youtube', label: 'StatQuest: Gradient Boost Part 1 — Regression Main Ideas', url: 'https://www.youtube.com/watch?v=3CC4N4z3GJc' }] },
          { id: 'w5-thu', title: 'Day 4 — XGBoost + LightGBM hands-on', hours: 1.5, priority: 'must-know', weekNumber: 5, resources: [{ type: 'youtube', label: 'StatQuest: XGBoost Part 1 — XGBoost Trees for Regression', url: 'https://www.youtube.com/watch?v=OtD8wVaFm6E' }, { type: 'doc', label: 'XGBoost Quick Start docs', url: 'https://xgboost.readthedocs.io/en/stable/get_started.html' }] },
          { id: 'w5-fri', title: 'Day 5 — KNN, Naive Bayes overview', hours: 1.5, priority: 'must-know', weekNumber: 5, resources: [{ type: 'course', label: 'Andrew Ng Course 2 + StatQuest', url: 'https://www.coursera.org/specializations/machine-learning-introduction' }] },
          { id: 'w5-sat', title: 'Day 6 — K-Means clustering + PCA', hours: 3, priority: 'must-know', weekNumber: 5, resources: [{ type: 'course', label: 'Andrew Ng Course 3 (Unsupervised), Week 1', url: 'https://www.coursera.org/specializations/machine-learning-introduction' }] },
          { id: 'w5-sun', title: 'Day 7 — Compare 5 algorithms on Titanic dataset, F1 scores', hours: 3, priority: 'must-know', weekNumber: 5, resources: [{ type: 'doc', label: 'Kaggle + scikit-learn', url: 'https://www.kaggle.com/c/titanic' }] },
        ],
      },
      {
        id: 'w6',
        title: 'Week 6 — Model Evaluation + Feature Engineering + MLflow',
        subtopics: [
          { id: 'w6-mon', title: 'Day 1 — Why accuracy misleads. Precision, Recall, F1', hours: 1.5, priority: 'must-know', weekNumber: 6, resources: [{ type: 'youtube', label: 'StatQuest: Sensitivity and Specificity, Clearly Explained!', url: 'https://www.youtube.com/watch?v=vP06aMoz4v8' }, { type: 'youtube', label: 'StatQuest: Precision vs Recall', url: 'https://www.youtube.com/watch?v=8d3JbbSj-I8' }] },
          { id: 'w6-tue', title: 'Day 2 — ROC, AUC, PR curves', hours: 1.5, priority: 'must-know', weekNumber: 6, resources: [{ type: 'youtube', label: 'StatQuest: ROC and AUC, Clearly Explained!', url: 'https://www.youtube.com/watch?v=4jRBRDbJemM' }] },
          { id: 'w6-wed', title: 'Day 3 — k-fold + stratified cross-validation', hours: 1.5, priority: 'must-know', weekNumber: 6, resources: [{ type: 'youtube', label: 'StatQuest: Machine Learning Fundamentals — Cross Validation', url: 'https://www.youtube.com/watch?v=fSytzGwwBVw' }] },
          { id: 'w6-thu', title: 'Day 4 — Data leakage: causes + prevention', hours: 1.5, priority: 'must-know', weekNumber: 6, resources: [{ type: 'article', label: 'Read aiwithanju PDF on leakage section' }] },
          { id: 'w6-fri', title: 'Day 5 — Feature scaling, one-hot, target encoding', hours: 1.5, priority: 'must-know', weekNumber: 6, resources: [{ type: 'doc', label: 'scikit-learn preprocessing docs', url: 'https://scikit-learn.org/stable/modules/preprocessing.html' }] },
          { id: 'w6-sat', title: 'Day 6 — sklearn Pipelines + ColumnTransformer', hours: 3, priority: 'must-know', weekNumber: 6, resources: [{ type: 'doc', label: 'scikit-learn "Composite estimators" docs', url: 'https://scikit-learn.org/stable/modules/compose.html' }] },
          { id: 'w6-sun', title: 'Day 7 — MLflow: track experiments with params + metrics + artifacts', hours: 3, priority: 'must-know', weekNumber: 6, resources: [{ type: 'doc', label: 'MLflow Quickstart (mlflow.org)', url: 'https://mlflow.org/docs/latest/getting-started/quickstart-1/index.html' }] },
        ],
      },
      {
        id: 'w7',
        title: 'Week 7 — PROJECT 1: End-to-End Tabular ML Pipeline',
        subtopics: [
          { id: 'w7-mon', title: 'Day 1 — Pick dataset, EDA, document findings', hours: 1.5, priority: 'must-know', weekNumber: 7, resources: [{ type: 'doc', label: 'Telco Churn / NYC Taxi / Credit Card Fraud — pick one' }] },
          { id: 'w7-tue', title: 'Day 2 — Feature engineering: missing values, encoding, scaling', hours: 1.5, priority: 'must-know', weekNumber: 7, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w7-wed', title: 'Day 3 — Build sklearn Pipeline with ColumnTransformer', hours: 1.5, priority: 'must-know', weekNumber: 7, resources: [{ type: 'doc', label: 'scikit-learn docs', url: 'https://scikit-learn.org/stable/modules/compose.html' }] },
          { id: 'w7-thu', title: 'Day 4 — Train 3 models: LogReg baseline, RF, XGBoost. Stratified k-fold CV', hours: 1.5, priority: 'must-know', weekNumber: 7, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w7-fri', title: 'Day 5 — Hyperparameter tuning with GridSearchCV/RandomizedSearchCV', hours: 1.5, priority: 'must-know', weekNumber: 7, resources: [{ type: 'doc', label: 'scikit-learn model selection', url: 'https://scikit-learn.org/stable/modules/grid_search.html' }] },
          { id: 'w7-sat', title: 'Day 6 — Log everything in MLflow. Write README', hours: 3, priority: 'must-know', weekNumber: 7, resources: [{ type: 'doc', label: 'MLflow: Tracking Quickstart — log params, metrics, artifacts', url: 'https://mlflow.org/docs/latest/getting-started/intro-quickstart/index.html' }, { type: 'doc', label: 'MLflow: Auto-logging for scikit-learn / XGBoost', url: 'https://mlflow.org/docs/latest/tracking/autolog.html' }] },
          { id: 'w7-sun', title: 'Day 7 — Clean GitHub structure: /data, /notebooks, /src, README.md, requirements.txt', hours: 3, priority: 'must-know', weekNumber: 7, resources: [{ type: 'doc', label: 'Self-driven — Portfolio Project #1' }] },
        ],
      },
      {
        id: 'w8',
        title: 'Week 8 — Backend Foundations: HTTP, FastAPI, Docker, Cloud Deployment',
        subtopics: [
          { id: 'w8-mon', title: 'Day 1 — HTTP fundamentals: methods, status codes, headers, JSON', hours: 1.5, priority: 'must-know', weekNumber: 8, resources: [{ type: 'doc', label: 'MDN "Introduction to HTTP" + Mozilla HTTP docs', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP' }] },
          { id: 'w8-tue', title: 'Day 2 — FastAPI Hello World, path/query params, async basics', hours: 1.5, priority: 'must-know', weekNumber: 8, resources: [{ type: 'doc', label: 'FastAPI tutorial (fastapi.tiangolo.com) — first 4 sections', url: 'https://fastapi.tiangolo.com/tutorial/' }] },
          { id: 'w8-wed', title: 'Day 3 — FastAPI: Pydantic request/response models, validation', hours: 1.5, priority: 'must-know', weekNumber: 8, resources: [{ type: 'doc', label: 'FastAPI tutorial continued', url: 'https://fastapi.tiangolo.com/tutorial/' }] },
          { id: 'w8-thu', title: 'Day 4 — Serve Project 1 model via FastAPI: /predict, /health, async endpoint', hours: 1.5, priority: 'must-know', weekNumber: 8, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w8-fri', title: 'Day 5 — Docker: images, containers, Dockerfile, multi-stage build', hours: 1.5, priority: 'must-know', weekNumber: 8, resources: [{ type: 'youtube', label: 'TechWorld with Nana "Docker Tutorial for Beginners" (first 2 hrs)', url: 'https://www.youtube.com/watch?v=3c-iBn73dDE' }] },
          { id: 'w8-sat', title: 'Day 6 — Dockerize FastAPI service + write docker-compose.yml + env vars (.env)', hours: 3, priority: 'must-know', weekNumber: 8, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w8-sun', title: 'Day 7 — Deploy to Render or HuggingFace Spaces. Public URL. Add error handling middleware.', hours: 3, priority: 'must-know', weekNumber: 8, resources: [{ type: 'doc', label: 'Render docs', url: 'https://render.com/docs' }, { type: 'doc', label: 'HF Spaces docs', url: 'https://huggingface.co/docs/hub/spaces' }] },
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
          { id: 'w9-mon', title: 'Day 1 — Karpathy "Neural Networks: Zero to Hero" — Episode 1: micrograd Part 1', hours: 2, priority: 'must-know', weekNumber: 9, resources: [{ type: 'youtube', label: 'Karpathy Ep 1: Building micrograd — spelled-out intro to neural nets + backprop', url: 'https://www.youtube.com/watch?v=VMj-3S1tku0' }] },
          { id: 'w9-tue', title: 'Day 2 — Episode 1 continued — code along', hours: 2, priority: 'must-know', weekNumber: 9, resources: [{ type: 'youtube', label: 'Karpathy Ep 1: Building micrograd', url: 'https://www.youtube.com/watch?v=VMj-3S1tku0' }] },
          { id: 'w9-wed', title: 'Day 3 — Finish micrograd, internalize backprop fully', hours: 1.5, priority: 'must-know', weekNumber: 9, resources: [{ type: 'youtube', label: 'Karpathy Ep 1: Building micrograd', url: 'https://www.youtube.com/watch?v=VMj-3S1tku0' }] },
          { id: 'w9-thu', title: 'Day 4 — Karpathy Episode 2: makemore (bigram model)', hours: 1.5, priority: 'must-know', weekNumber: 9, resources: [{ type: 'youtube', label: 'Karpathy Ep 2: Building makemore (bigram language model)', url: 'https://www.youtube.com/watch?v=PaCmpygFfXo' }] },
          { id: 'w9-fri', title: 'Day 5 — Episode 2 continued', hours: 1.5, priority: 'must-know', weekNumber: 9, resources: [{ type: 'youtube', label: 'Karpathy Ep 2: Building makemore (bigram language model)', url: 'https://www.youtube.com/watch?v=PaCmpygFfXo' }] },
          { id: 'w9-sat', title: 'Day 6 — Karpathy Episode 3: MLP (full 3-hour video)', hours: 3, priority: 'must-know', weekNumber: 9, resources: [{ type: 'youtube', label: 'Karpathy Ep 3: Building makemore Part 2 — MLP (full 3-hour deep dive)', url: 'https://www.youtube.com/watch?v=TCH_1BHY58I' }] },
          { id: 'w9-sun', title: 'Day 7 — Re-implement micrograd from memory — no peeking', hours: 3, priority: 'must-know', weekNumber: 9, resources: [{ type: 'doc', label: 'Self-driven — micrograd-from-scratch' }] },
        ],
      },
      {
        id: 'w10',
        title: 'Week 10 — Deep Learning Theory Foundation',
        subtopics: [
          { id: 'w10-mon', title: 'Day 1 — Activation functions: ReLU, Sigmoid, Tanh, GELU, SiLU', hours: 1.5, priority: 'must-know', weekNumber: 10, resources: [{ type: 'course', label: 'Andrew Ng Deep Learning Specialization Course 1, Week 2', url: 'https://www.coursera.org/specializations/deep-learning' }] },
          { id: 'w10-tue', title: 'Day 2 — Forward + backward propagation deep dive', hours: 1.5, priority: 'must-know', weekNumber: 10, resources: [{ type: 'course', label: 'Andrew Ng Course 1, Week 3', url: 'https://www.coursera.org/specializations/deep-learning' }] },
          { id: 'w10-wed', title: 'Day 3 — Loss functions: MSE, Cross-entropy, BCE', hours: 1.5, priority: 'must-know', weekNumber: 10, resources: [{ type: 'course', label: 'Andrew Ng Course 1, Week 4', url: 'https://www.coursera.org/specializations/deep-learning' }] },
          { id: 'w10-thu', title: 'Day 4 — Optimizers: SGD, Momentum, Adam, AdamW', hours: 1.5, priority: 'must-know', weekNumber: 10, resources: [{ type: 'course', label: 'Andrew Ng Course 2, Week 2', url: 'https://www.coursera.org/specializations/deep-learning' }] },
          { id: 'w10-fri', title: 'Day 5 — Regularization: Dropout, L1/L2, early stopping', hours: 1.5, priority: 'must-know', weekNumber: 10, resources: [{ type: 'course', label: 'Andrew Ng Course 2, Week 1', url: 'https://www.coursera.org/specializations/deep-learning' }] },
          { id: 'w10-sat', title: 'Day 6 — Batch norm vs Layer norm (mandatory interview topic)', hours: 3, priority: 'must-know', weekNumber: 10, resources: [{ type: 'course', label: 'Andrew Ng Course 2, Week 3', url: 'https://www.coursera.org/specializations/deep-learning' }, { type: 'youtube', label: 'Karpathy Ep 3: Activations & Gradients, BatchNorm (definitive 1h walk-through)', url: 'https://www.youtube.com/watch?v=P6sfmUTpUmc' }] },
          { id: 'w10-sun', title: 'Day 7 — Weight init (Xavier, He) + vanishing/exploding gradients', hours: 3, priority: 'must-know', weekNumber: 10, resources: [{ type: 'course', label: 'Andrew Ng Course 2, Week 1', url: 'https://www.coursera.org/specializations/deep-learning' }] },
        ],
      },
      {
        id: 'w11',
        title: 'Week 11 — PyTorch Mastery',
        subtopics: [
          { id: 'w11-mon', title: 'Day 1 — Tensors, devices, basic ops', hours: 1.5, priority: 'must-know', weekNumber: 11, resources: [{ type: 'doc', label: 'PyTorch tutorial "Learn the Basics: Tensors"', url: 'https://pytorch.org/tutorials/beginner/basics/tensorqs_tutorial.html' }] },
          { id: 'w11-tue', title: 'Day 2 — Autograd: requires_grad, .backward(), .no_grad()', hours: 1.5, priority: 'must-know', weekNumber: 11, resources: [{ type: 'doc', label: 'PyTorch tutorial "Autograd"', url: 'https://pytorch.org/tutorials/beginner/basics/autogradqs_tutorial.html' }] },
          { id: 'w11-wed', title: 'Day 3 — nn.Module, custom layers', hours: 1.5, priority: 'must-know', weekNumber: 11, resources: [{ type: 'doc', label: 'PyTorch tutorial "Build the Neural Network"', url: 'https://pytorch.org/tutorials/beginner/basics/buildmodel_tutorial.html' }] },
          { id: 'w11-thu', title: 'Day 4 — Dataset and DataLoader', hours: 1.5, priority: 'must-know', weekNumber: 11, resources: [{ type: 'doc', label: 'PyTorch tutorial "Datasets and DataLoaders"', url: 'https://pytorch.org/tutorials/beginner/basics/data_tutorial.html' }] },
          { id: 'w11-fri', title: 'Day 5 — Full training loop: zero_grad → forward → loss → backward → step', hours: 1.5, priority: 'must-know', weekNumber: 11, resources: [{ type: 'doc', label: 'PyTorch tutorial "Optimization Loop"', url: 'https://pytorch.org/tutorials/beginner/basics/optimization_tutorial.html' }] },
          { id: 'w11-sat', title: 'Day 6 — Save/load models (state_dict), checkpointing, W&B integration', hours: 3, priority: 'must-know', weekNumber: 11, resources: [{ type: 'doc', label: 'PyTorch tutorial + W&B PyTorch docs', url: 'https://docs.wandb.ai/guides/integrations/pytorch' }] },
          { id: 'w11-sun', title: 'Day 7 — Build MLP for MNIST in PyTorch, log with W&B', hours: 3, priority: 'must-know', weekNumber: 11, resources: [{ type: 'doc', label: 'Self-driven — pytorch-mnist-mlp' }] },
        ],
      },
      {
        id: 'w12',
        title: 'Week 12 — Computer Vision Foundations (CNNs)',
        subtopics: [
          { id: 'w12-mon', title: 'Day 1 — What is convolution? Filters, stride, padding', hours: 1.5, priority: 'must-know', weekNumber: 12, resources: [{ type: 'youtube', label: 'CS231n 2017 — Lecture 5: Convolutional Neural Networks', url: 'https://www.youtube.com/watch?v=bNb2fEVKeEo' }] },
          { id: 'w12-tue', title: 'Day 2 — Pooling, receptive field', hours: 1.5, priority: 'must-know', weekNumber: 12, resources: [{ type: 'youtube', label: 'CS231n 2017 — Lecture 5: CNNs (continued, pooling + receptive fields)', url: 'https://www.youtube.com/watch?v=bNb2fEVKeEo' }] },
          { id: 'w12-wed', title: 'Day 3 — CNN architectures: LeNet, AlexNet, VGG', hours: 1.5, priority: 'must-know', weekNumber: 12, resources: [{ type: 'youtube', label: 'CS231n 2017 — Lecture 9: CNN Architectures (LeNet, AlexNet, VGG, ResNet)', url: 'https://www.youtube.com/watch?v=DAOcjicFr1Y' }] },
          { id: 'w12-thu', title: 'Day 4 — ResNet + residual connections (critical)', hours: 1.5, priority: 'must-know', weekNumber: 12, resources: [{ type: 'youtube', label: 'CS231n 2017 — Lecture 9: ResNet + residual connections (continued)', url: 'https://www.youtube.com/watch?v=DAOcjicFr1Y' }] },
          { id: 'w12-fri', title: 'Day 5 — Transfer learning, fine-tuning pretrained models', hours: 1.5, priority: 'must-know', weekNumber: 12, resources: [{ type: 'course', label: 'fast.ai Practical Deep Learning Lesson 1', url: 'https://course.fast.ai/' }] },
          { id: 'w12-sat', title: 'Day 6 — Build a CNN in PyTorch for CIFAR-10', hours: 3, priority: 'must-know', weekNumber: 12, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w12-sun', title: 'Day 7 — Fine-tune pretrained ResNet-18 on custom dataset + read about ViT, CLIP', hours: 3, priority: 'must-know', weekNumber: 12, resources: [{ type: 'doc', label: 'torchvision docs', url: 'https://pytorch.org/vision/stable/index.html' }, { type: 'article', label: 'CLIP paper abstract', url: 'https://arxiv.org/abs/2103.00020' }] },
        ],
      },
      {
        id: 'w13',
        title: 'Week 13 — NLP Fundamentals + Word Embeddings',
        subtopics: [
          { id: 'w13-mon', title: 'Day 1 — Tokenization basics: characters, words, subwords', hours: 1.5, priority: 'must-know', weekNumber: 13, resources: [{ type: 'youtube', label: 'CS224n 2023 — Lecture 1: Introduction and Word Vectors', url: 'https://www.youtube.com/watch?v=rmVRLeJRkl4' }] },
          { id: 'w13-tue', title: 'Day 2 — BPE (Byte-Pair Encoding) — how GPT tokenizes', hours: 1.5, priority: 'must-know', weekNumber: 13, resources: [{ type: 'youtube', label: 'Karpathy "Let\'s build the GPT Tokenizer" Part 1', url: 'https://www.youtube.com/watch?v=zduSFxRajkE' }] },
          { id: 'w13-wed', title: 'Day 3 — Karpathy tokenizer Part 2 + finish', hours: 1.5, priority: 'must-know', weekNumber: 13, resources: [{ type: 'youtube', label: 'YouTube — Karpathy Tokenizer Part 2', url: 'https://www.youtube.com/watch?v=zduSFxRajkE' }] },
          { id: 'w13-thu', title: 'Day 4 — Word2Vec, GloVe (legacy but interview-relevant)', hours: 1.5, priority: 'must-know', weekNumber: 13, resources: [{ type: 'youtube', label: 'CS224n 2023 — Lecture 2: Neural Classifiers (Word2Vec, GloVe)', url: 'https://www.youtube.com/watch?v=gqaHkPEZAew' }] },
          { id: 'w13-fri', title: 'Day 5 — Modern embeddings: sentence-transformers, BGE, OpenAI embeddings', hours: 1.5, priority: 'must-know', weekNumber: 13, resources: [{ type: 'doc', label: 'HF sentence-transformers docs', url: 'https://www.sbert.net/' }] },
          { id: 'w13-sat', title: 'Day 6 — RNN basics + why they failed → motivation for Transformers', hours: 3, priority: 'must-know', weekNumber: 13, resources: [{ type: 'youtube', label: 'CS224n 2023 — Lecture 5: Recurrent Neural Networks', url: 'https://www.youtube.com/watch?v=X1HKxQDOPLE' }] },
          { id: 'w13-sun', title: 'Day 7 — LSTM + vanishing gradients (interview topic)', hours: 3, priority: 'must-know', weekNumber: 13, resources: [{ type: 'youtube', label: 'CS224n 2023 — Lecture 6: Sequence to Sequence (LSTM + attention)', url: 'https://www.youtube.com/watch?v=wzfWHP6SXxY' }] },
        ],
      },
      {
        id: 'w14',
        title: 'Week 14 — The Transformer Architecture',
        subtopics: [
          { id: 'w14-mon', title: 'Day 1 — "Attention Is All You Need" paper — first pass, skim', hours: 2, priority: 'must-know', weekNumber: 14, resources: [{ type: 'article', label: 'arXiv:1706.03762', url: 'https://arxiv.org/abs/1706.03762' }] },
          { id: 'w14-tue', title: 'Day 2 — 3Blue1Brown "But what is a GPT?" + "Attention in transformers, visually explained"', hours: 2, priority: 'must-know', weekNumber: 14, resources: [{ type: 'youtube', label: '3B1B: But what is a GPT? — visual intro to transformers', url: 'https://www.youtube.com/watch?v=wjZofJX0v4M' }, { type: 'youtube', label: '3B1B: Attention in transformers, visually explained', url: 'https://www.youtube.com/watch?v=eMlx5fFNoYc' }] },
          { id: 'w14-wed', title: 'Day 3 — Self-attention math: Q, K, V matrices', hours: 1.5, priority: 'must-know', weekNumber: 14, resources: [{ type: 'youtube', label: 'Re-watch 3B1B + paper', url: 'https://arxiv.org/abs/1706.03762' }] },
          { id: 'w14-thu', title: 'Day 4 — Multi-head attention, positional encodings (sinusoidal, RoPE, ALiBi)', hours: 1.5, priority: 'must-know', weekNumber: 14, resources: [{ type: 'article', label: '"The Illustrated Transformer" by Jay Alammar', url: 'https://jalammar.github.io/illustrated-transformer/' }] },
          { id: 'w14-fri', title: 'Day 5 — Encoder-only (BERT), Decoder-only (GPT), Encoder-Decoder (T5) — when to use which', hours: 1.5, priority: 'must-know', weekNumber: 14, resources: [{ type: 'article', label: "Jay Alammar's BERT/ELMo blog", url: 'https://jalammar.github.io/illustrated-bert/' }] },
          { id: 'w14-sat', title: 'Day 6 — Re-read "Attention Is All You Need" — careful second pass', hours: 3, priority: 'must-know', weekNumber: 14, resources: [{ type: 'article', label: 'arXiv', url: 'https://arxiv.org/abs/1706.03762' }] },
          { id: 'w14-sun', title: 'Day 7 — KV cache, Pre-LN vs Post-LN (interview topics)', hours: 2.5, priority: 'must-know', weekNumber: 14, resources: [{ type: 'article', label: "Sebastian Raschka: Understanding and Coding the KV Cache in LLMs from Scratch", url: 'https://magazine.sebastianraschka.com/p/coding-the-kv-cache-in-llms' }, { type: 'article', label: "Sebastian Raschka: Pre-LN vs Post-LN in Transformers (Ahead of AI)", url: 'https://magazine.sebastianraschka.com/p/understanding-large-language-models' }] },
        ],
      },
      {
        id: 'w15',
        title: 'Week 15 — Build GPT from Scratch with Karpathy',
        subtopics: [
          { id: 'w15-mon', title: 'Day 1 — Karpathy "Let\'s build GPT: from scratch" — minutes 0-30', hours: 2, priority: 'must-know', weekNumber: 15, resources: [{ type: 'youtube', label: 'Karpathy — Let\'s build GPT', url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY' }] },
          { id: 'w15-tue', title: 'Day 2 — Continue — minutes 30-60', hours: 2, priority: 'must-know', weekNumber: 15, resources: [{ type: 'youtube', label: 'Karpathy — Let\'s build GPT', url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY' }] },
          { id: 'w15-wed', title: 'Day 3 — Continue — minutes 60-90', hours: 2, priority: 'must-know', weekNumber: 15, resources: [{ type: 'youtube', label: 'Karpathy — Let\'s build GPT', url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY' }] },
          { id: 'w15-thu', title: 'Day 4 — Continue — minutes 90-120', hours: 2, priority: 'must-know', weekNumber: 15, resources: [{ type: 'youtube', label: 'Karpathy — Let\'s build GPT', url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY' }] },
          { id: 'w15-fri', title: 'Day 5 — Re-watch multi-head attention section, pause and code along', hours: 1.5, priority: 'must-know', weekNumber: 15, resources: [{ type: 'youtube', label: 'Karpathy — Let\'s build GPT', url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY' }] },
          { id: 'w15-sat', title: 'Day 6 — Re-implement entire nanoGPT from memory — don\'t copy his code', hours: 3, priority: 'must-know', weekNumber: 15, resources: [{ type: 'doc', label: 'Self-driven — nanogpt-from-scratch (Portfolio Project #2)' }] },
          { id: 'w15-sun', title: 'Day 7 — Train mini-GPT on custom text (Shakespeare, song lyrics, your favorite book)', hours: 1.5, priority: 'must-know', weekNumber: 15, resources: [{ type: 'doc', label: 'Self-driven' }] },
        ],
      },
      {
        id: 'w16',
        title: 'Week 16 — HuggingFace Ecosystem + Fine-Tuning Basics',
        subtopics: [
          { id: 'w16-mon', title: 'Day 1 — HF Transformers: pipeline, AutoModel, AutoTokenizer', hours: 1.5, priority: 'must-know', weekNumber: 16, resources: [{ type: 'course', label: 'HuggingFace NLP Course Chapter 1', url: 'https://huggingface.co/learn/nlp-course/chapter1' }] },
          { id: 'w16-tue', title: 'Day 2 — Loading + using pretrained models (BERT, GPT-2)', hours: 1.5, priority: 'must-know', weekNumber: 16, resources: [{ type: 'course', label: 'HF NLP Course Chapter 2', url: 'https://huggingface.co/learn/nlp-course/chapter2' }] },
          { id: 'w16-wed', title: 'Day 3 — Tokenizers in HF, padding, attention masks', hours: 1.5, priority: 'must-know', weekNumber: 16, resources: [{ type: 'course', label: 'HF NLP Course Chapter 3', url: 'https://huggingface.co/learn/nlp-course/chapter3' }] },
          { id: 'w16-thu', title: 'Day 4 — Datasets library: load, map, filter', hours: 1.5, priority: 'must-know', weekNumber: 16, resources: [{ type: 'course', label: 'HF NLP Course Chapter 5', url: 'https://huggingface.co/learn/nlp-course/chapter5' }] },
          { id: 'w16-fri', title: 'Day 5 — Trainer API — training on custom dataset', hours: 1.5, priority: 'must-know', weekNumber: 16, resources: [{ type: 'course', label: 'HF NLP Course Chapter 3 continued', url: 'https://huggingface.co/learn/nlp-course/chapter3' }] },
          { id: 'w16-sat', title: 'Day 6 — Fine-tune DistilBERT for sentiment classification (IMDB)', hours: 3, priority: 'must-know', weekNumber: 16, resources: [{ type: 'course', label: 'HF NLP Course Chapter 3 lab', url: 'https://huggingface.co/learn/nlp-course/chapter3' }] },
          { id: 'w16-sun', title: 'Day 7 — Push model to HuggingFace Hub with model card', hours: 3, priority: 'must-know', weekNumber: 16, resources: [{ type: 'doc', label: 'HF docs "Sharing a model"', url: 'https://huggingface.co/docs/transformers/model_sharing' }] },
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
          { id: 'w17-mon', title: 'Day 1 — System/User/Assistant structure, OpenAI API basics, async API calls', hours: 1.5, priority: 'must-know', weekNumber: 17, resources: [{ type: 'doc', label: 'OpenAI Quickstart: Chat Completions API', url: 'https://platform.openai.com/docs/quickstart' }, { type: 'doc', label: 'OpenAI Cookbook: How to use the Chat Completions API', url: 'https://cookbook.openai.com/examples/how_to_format_inputs_to_chatgpt_models' }] },
          { id: 'w17-tue', title: 'Day 2 — Anthropic API + Claude vision API (multimodal bonus)', hours: 1.5, priority: 'must-know', weekNumber: 17, resources: [{ type: 'doc', label: 'Anthropic: Getting started with the API', url: 'https://docs.anthropic.com/en/api/getting-started' }, { type: 'doc', label: 'Anthropic: Vision (multimodal image inputs)', url: 'https://docs.anthropic.com/en/docs/build-with-claude/vision' }] },
          { id: 'w17-wed', title: 'Day 3 — Few-shot prompting, chain-of-thought, self-consistency, ReAct', hours: 1.5, priority: 'must-know', weekNumber: 17, resources: [{ type: 'doc', label: 'Anthropic: Prompt Engineering Overview', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' }, { type: 'doc', label: 'Anthropic: Chain of Thought prompting', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/chain-of-thought' }] },
          { id: 'w17-thu', title: 'Day 4 — Structured output: JSON mode, function calling', hours: 1.5, priority: 'must-know', weekNumber: 17, resources: [{ type: 'doc', label: 'OpenAI: Structured Outputs (JSON mode)', url: 'https://platform.openai.com/docs/guides/structured-outputs' }, { type: 'doc', label: 'OpenAI: Function calling', url: 'https://platform.openai.com/docs/guides/function-calling' }] },
          { id: 'w17-fri', title: 'Day 5 — Pydantic + instructor library for typed LLM outputs', hours: 1.5, priority: 'must-know', weekNumber: 17, resources: [{ type: 'doc', label: 'instructor GitHub README', url: 'https://github.com/jxnl/instructor' }] },
          { id: 'w17-sat', title: 'Day 6 — Build resume → JSON extractor with retries + exponential backoff', hours: 3, priority: 'must-know', weekNumber: 17, resources: [{ type: 'doc', label: 'Use tenacity library + OpenAI/Anthropic', url: 'https://tenacity.readthedocs.io/' }] },
          { id: 'w17-sun', title: 'Day 7 — Token budgeting, context window management, cost tracking', hours: 3, priority: 'must-know', weekNumber: 17, resources: [{ type: 'doc', label: 'OpenAI: Rate limits and tier management', url: 'https://platform.openai.com/docs/guides/rate-limits' }, { type: 'doc', label: 'OpenAI: Tokenizer (counts tokens for budgeting)', url: 'https://platform.openai.com/tokenizer' }] },
        ],
      },
      {
        id: 'w18',
        title: 'Week 18 — RAG Foundations + Vector Databases',
        subtopics: [
          { id: 'w18-mon', title: 'Day 1 — What is RAG? Why it exists. RAG vs fine-tuning decision', hours: 1.5, priority: 'must-know', weekNumber: 18, resources: [{ type: 'doc', label: 'LangChain: RAG concepts (what + why)', url: 'https://python.langchain.com/docs/concepts/rag/' }, { type: 'article', label: 'Pinecone Learn: RAG vs Fine-tuning — when to use which', url: 'https://www.pinecone.io/learn/retrieval-augmented-generation/' }] },
          { id: 'w18-tue', title: 'Day 2 — Chunking strategies: fixed, semantic, recursive, late chunking', hours: 1.5, priority: 'must-know', weekNumber: 18, resources: [{ type: 'doc', label: 'LangChain text splitter docs', url: 'https://python.langchain.com/docs/concepts/text_splitters/' }] },
          { id: 'w18-wed', title: 'Day 3 — Embedding models: BGE, e5, nomic, OpenAI text-embedding-3', hours: 1.5, priority: 'must-know', weekNumber: 18, resources: [{ type: 'doc', label: 'HuggingFace MTEB leaderboard', url: 'https://huggingface.co/spaces/mteb/leaderboard' }] },
          { id: 'w18-thu', title: 'Day 4 — Vector databases: Qdrant + pgvector', hours: 1.5, priority: 'must-know', weekNumber: 18, resources: [{ type: 'doc', label: 'Qdrant Quickstart (qdrant.tech/documentation/quickstart)', url: 'https://qdrant.tech/documentation/quickstart/' }] },
          { id: 'w18-fri', title: 'Day 5 — Cosine similarity, HNSW indexing intuition', hours: 1.5, priority: 'must-know', weekNumber: 18, resources: [{ type: 'article', label: 'Pinecone learning articles', url: 'https://www.pinecone.io/learn/' }] },
          { id: 'w18-sat', title: 'Day 6 — Build basic RAG: load → chunk → embed → store → retrieve → generate', hours: 3, priority: 'must-know', weekNumber: 18, resources: [{ type: 'doc', label: 'LangChain RAG tutorial', url: 'https://python.langchain.com/docs/tutorials/rag/' }] },
          { id: 'w18-sun', title: 'Day 7 — Hybrid search: BM25 + dense embeddings + multimodal (CLIP) intro', hours: 3, priority: 'must-know', weekNumber: 18, resources: [{ type: 'doc', label: 'Qdrant hybrid search docs', url: 'https://qdrant.tech/articles/hybrid-search/' }] },
        ],
      },
      {
        id: 'w19',
        title: 'Week 19 — Advanced RAG: Reranking, Query Rewriting, Evaluation',
        subtopics: [
          { id: 'w19-mon', title: 'Day 1 — Why basic RAG fails in production', hours: 1.5, priority: 'must-know', weekNumber: 19, resources: [{ type: 'article', label: 'Anyscale + Pinecone "Advanced RAG" blog posts', url: 'https://www.pinecone.io/learn/advanced-rag-techniques/' }] },
          { id: 'w19-tue', title: 'Day 2 — Cross-encoder rerankers: bge-reranker, cohere-rerank', hours: 1.5, priority: 'must-know', weekNumber: 19, resources: [{ type: 'doc', label: 'HuggingFace bge-reranker model card', url: 'https://huggingface.co/BAAI/bge-reranker-base' }] },
          { id: 'w19-wed', title: 'Day 3 — Query rewriting + HyDE (Hypothetical Document Embeddings)', hours: 1.5, priority: 'must-know', weekNumber: 19, resources: [{ type: 'doc', label: 'LangChain query transformation docs', url: 'https://python.langchain.com/docs/concepts/retrieval/' }] },
          { id: 'w19-thu', title: 'Day 4 — Multi-hop retrieval, parent-document retrieval', hours: 1.5, priority: 'must-know', weekNumber: 19, resources: [{ type: 'doc', label: 'LangChain advanced retrievers', url: 'https://python.langchain.com/docs/how_to/parent_document_retriever/' }] },
          { id: 'w19-fri', title: 'Day 5 — RAG evaluation: faithfulness, answer relevance, context precision', hours: 1.5, priority: 'must-know', weekNumber: 19, resources: [{ type: 'doc', label: 'RAGAS: Getting Started — your first eval', url: 'https://docs.ragas.io/en/stable/getstarted/index.html' }, { type: 'doc', label: 'RAGAS: Core metrics (faithfulness, answer relevance, context precision)', url: 'https://docs.ragas.io/en/stable/concepts/metrics/index.html' }] },
          { id: 'w19-sat', title: 'Day 6 — Upgrade Week 18 RAG: + reranker + query rewriting + RAGAS', hours: 3, priority: 'must-know', weekNumber: 19, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w19-sun', title: 'Day 7 — Document everything in README. Before/after metrics comparison', hours: 3, priority: 'must-know', weekNumber: 19, resources: [{ type: 'doc', label: 'Self-driven' }] },
        ],
      },
      {
        id: 'w20',
        title: 'Week 20 — PROJECT 3: Production RAG over Real Corpus',
        subtopics: [
          { id: 'w20-mon', title: 'Day 1 — Pick corpus, document ingestion pipeline', hours: 1.5, priority: 'must-know', weekNumber: 20, resources: [{ type: 'doc', label: 'ArXiv / Wikipedia / OSS docs corpus' }] },
          { id: 'w20-tue', title: 'Day 2 — Implement chunking', hours: 1.5, priority: 'must-know', weekNumber: 20, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w20-wed', title: 'Day 3 — Embedding + Qdrant storage', hours: 1.5, priority: 'must-know', weekNumber: 20, resources: [{ type: 'doc', label: 'Qdrant docs', url: 'https://qdrant.tech/documentation/' }] },
          { id: 'w20-thu', title: 'Day 4 — Retrieval + reranker integration', hours: 1.5, priority: 'must-know', weekNumber: 20, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w20-fri', title: 'Day 5 — FastAPI streaming endpoint + auth + rate limiting', hours: 1.5, priority: 'must-know', weekNumber: 20, resources: [{ type: 'doc', label: 'FastAPI + slowapi', url: 'https://fastapi.tiangolo.com/' }] },
          { id: 'w20-sat', title: 'Day 6 — Dockerize + deploy to Render/HF Spaces', hours: 3, priority: 'must-know', weekNumber: 20, resources: [{ type: 'doc', label: 'Render / HF Spaces docs', url: 'https://render.com/docs' }] },
          { id: 'w20-sun', title: 'Day 7 — RAGAS evaluation + README + demo video', hours: 3, priority: 'must-know', weekNumber: 20, resources: [{ type: 'doc', label: 'Portfolio Project #3 — production RAG' }] },
        ],
      },
      {
        id: 'w21',
        title: 'Week 21 — Fine-Tuning Theory: LoRA, QLoRA, PEFT',
        subtopics: [
          { id: 'w21-mon', title: 'Day 1 — When fine-tuning beats prompting', hours: 1.5, priority: 'must-know', weekNumber: 21, resources: [{ type: 'article', label: 'Sebastian Raschka: Finetuning Large Language Models — when and how', url: 'https://magazine.sebastianraschka.com/p/finetuning-large-language-models' }] },
          { id: 'w21-tue', title: 'Day 2 — Full FT vs PEFT trade-offs', hours: 1.5, priority: 'must-know', weekNumber: 21, resources: [{ type: 'article', label: 'Sebastian Raschka: Practical Tips for Finetuning LLMs Using LoRA', url: 'https://magazine.sebastianraschka.com/p/practical-tips-for-finetuning-llms' }, { type: 'article', label: 'Sebastian Raschka: Understanding Parameter-Efficient Finetuning of LLMs', url: 'https://magazine.sebastianraschka.com/p/understanding-parameter-efficient' }] },
          { id: 'w21-wed', title: "Day 3 — LoRA math: W' = W + AB, why low-rank works", hours: 1.5, priority: 'must-know', weekNumber: 21, resources: [{ type: 'article', label: 'LoRA paper (arXiv:2106.09685) — abstract + intro + section 4', url: 'https://arxiv.org/abs/2106.09685' }] },
          { id: 'w21-thu', title: 'Day 4 — QLoRA: 4-bit quantization + LoRA', hours: 1.5, priority: 'must-know', weekNumber: 21, resources: [{ type: 'article', label: 'QLoRA paper abstract', url: 'https://arxiv.org/abs/2305.14314' }, { type: 'doc', label: 'bitsandbytes docs', url: 'https://github.com/TimDettmers/bitsandbytes' }] },
          { id: 'w21-fri', title: 'Day 5 — SFT vs DPO vs RLHF concepts', hours: 1.5, priority: 'must-know', weekNumber: 21, resources: [{ type: 'doc', label: 'HuggingFace TRL docs', url: 'https://huggingface.co/docs/trl' }] },
          { id: 'w21-sat', title: 'Day 6 — HuggingFace PEFT library hands-on', hours: 3, priority: 'must-know', weekNumber: 21, resources: [{ type: 'doc', label: 'huggingface.co/docs/peft', url: 'https://huggingface.co/docs/peft' }] },
          { id: 'w21-sun', title: 'Day 7 — Dataset formatting: chat templates, ShareGPT, Alpaca', hours: 3, priority: 'must-know', weekNumber: 21, resources: [{ type: 'doc', label: 'HF docs', url: 'https://huggingface.co/docs/transformers/chat_templating' }] },
        ],
      },
      {
        id: 'w22',
        title: 'Week 22 — Hands-On QLoRA Fine-Tuning',
        subtopics: [
          { id: 'w22-mon', title: 'Day 1 — Pick base model (Qwen2.5-1.5B or Llama-3.2-1B-Instruct) and domain dataset', hours: 1.5, priority: 'must-know', weekNumber: 22, resources: [{ type: 'doc', label: 'HF Hub: Qwen2.5-1.5B-Instruct (recommended small base)', url: 'https://huggingface.co/Qwen/Qwen2.5-1.5B-Instruct' }, { type: 'doc', label: 'HF Hub: Llama-3.2-1B-Instruct (alternative small base)', url: 'https://huggingface.co/meta-llama/Llama-3.2-1B-Instruct' }] },
          { id: 'w22-tue', title: 'Day 2 — Prepare dataset in correct chat template format', hours: 1.5, priority: 'must-know', weekNumber: 22, resources: [{ type: 'doc', label: 'HF chat templating', url: 'https://huggingface.co/docs/transformers/chat_templating' }] },
          { id: 'w22-wed', title: 'Day 3 — Set up trl.SFTTrainer + bitsandbytes 4-bit + LoRA config', hours: 1.5, priority: 'must-know', weekNumber: 22, resources: [{ type: 'doc', label: 'HF TRL SFTTrainer', url: 'https://huggingface.co/docs/trl/sft_trainer' }] },
          { id: 'w22-thu', title: 'Day 4 — First training run (small) — debug issues', hours: 1.5, priority: 'must-know', weekNumber: 22, resources: [{ type: 'doc', label: 'Self-driven (Colab Pro / Kaggle T4)' }] },
          { id: 'w22-fri', title: 'Day 5 — Full training run with W&B logging', hours: 1.5, priority: 'must-know', weekNumber: 22, resources: [{ type: 'doc', label: 'W&B: Quickstart (log your first run)', url: 'https://docs.wandb.ai/quickstart' }, { type: 'doc', label: 'W&B: Hugging Face Trainer integration (for SFT runs)', url: 'https://docs.wandb.ai/guides/integrations/huggingface' }] },
          { id: 'w22-sat', title: 'Day 6 — Evaluate before/after on held-out set — target ≥5% improvement', hours: 3, priority: 'must-know', weekNumber: 22, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w22-sun', title: 'Day 7 — Push LoRA adapter to HF Hub with model card', hours: 3, priority: 'must-know', weekNumber: 22, resources: [{ type: 'doc', label: 'HF Hub — Portfolio Project #4', url: 'https://huggingface.co/docs/hub/model-cards' }] },
        ],
      },
      {
        id: 'w23',
        title: 'Week 23 — Agents + Tool Use + MCP',
        subtopics: [
          { id: 'w23-mon', title: 'Day 1 — What is an AI agent? Tool calling protocols', hours: 1.5, priority: 'must-know', weekNumber: 23, resources: [{ type: 'doc', label: 'OpenAI function calling docs + Anthropic tool use docs', url: 'https://platform.openai.com/docs/guides/function-calling' }] },
          { id: 'w23-tue', title: 'Day 2 — LangGraph for stateful agents', hours: 1.5, priority: 'must-know', weekNumber: 23, resources: [{ type: 'doc', label: 'LangGraph docs (langchain-ai.github.io/langgraph)', url: 'https://langchain-ai.github.io/langgraph/' }] },
          { id: 'w23-wed', title: 'Day 3 — LangGraph tutorial — build first agent', hours: 1.5, priority: 'must-know', weekNumber: 23, resources: [{ type: 'doc', label: 'LangGraph tutorials', url: 'https://langchain-ai.github.io/langgraph/tutorials/' }] },
          { id: 'w23-thu', title: 'Day 4 — Pydantic AI / instructor for typed agent outputs', hours: 1.5, priority: 'must-know', weekNumber: 23, resources: [{ type: 'doc', label: 'pydantic-ai docs', url: 'https://ai.pydantic.dev/' }] },
          { id: 'w23-fri', title: 'Day 5 — MCP (Model Context Protocol)', hours: 1.5, priority: 'must-know', weekNumber: 23, resources: [{ type: 'doc', label: 'MCP: Introduction — what is Model Context Protocol', url: 'https://modelcontextprotocol.io/introduction' }, { type: 'doc', label: 'MCP: Quickstart — build your first MCP server', url: 'https://modelcontextprotocol.io/quickstart/server' }] },
          { id: 'w23-sat', title: 'Day 6 — Build tool-using agent: ≥3 tools (web search, calculator, file I/O)', hours: 3, priority: 'must-know', weekNumber: 23, resources: [{ type: 'doc', label: 'LangGraph', url: 'https://langchain-ai.github.io/langgraph/' }] },
          { id: 'w23-sun', title: 'Day 7 — Memory: short-term vs long-term, episodic', hours: 3, priority: 'must-know', weekNumber: 23, resources: [{ type: 'doc', label: 'LangGraph memory docs', url: 'https://langchain-ai.github.io/langgraph/concepts/memory/' }] },
        ],
      },
      {
        id: 'w24',
        title: 'Week 24 — Production LLM Patterns: Observability, Streamlit, Frontend Demo',
        subtopics: [
          { id: 'w24-mon', title: 'Day 1 — Streamlit basics — build LLM demos in Python', hours: 1.5, priority: 'must-know', weekNumber: 24, resources: [{ type: 'doc', label: 'Streamlit docs Quick Start', url: 'https://docs.streamlit.io/get-started' }] },
          { id: 'w24-tue', title: 'Day 2 — Wrap your RAG (Project 3) with a Streamlit UI', hours: 1.5, priority: 'must-know', weekNumber: 24, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w24-wed', title: 'Day 3 — LLM observability: Langfuse setup + integration', hours: 1.5, priority: 'must-know', weekNumber: 24, resources: [{ type: 'doc', label: 'Langfuse docs', url: 'https://langfuse.com/docs' }] },
          { id: 'w24-thu', title: 'Day 4 — Add tracing + cost tracking to your RAG project', hours: 1.5, priority: 'must-know', weekNumber: 24, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w24-fri', title: 'Day 5 — Build simple vanilla HTML+JS frontend that calls your FastAPI', hours: 1.5, priority: 'must-know', weekNumber: 24, resources: [{ type: 'doc', label: 'MDN fetch() docs', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch' }] },
          { id: 'w24-sat', title: 'Day 6 — Add prompt injection guardrails + PII detection (Presidio)', hours: 3, priority: 'must-know', weekNumber: 24, resources: [{ type: 'doc', label: 'Guardrails-AI library docs', url: 'https://www.guardrailsai.com/docs' }] },
          { id: 'w24-sun', title: 'Day 7 — Buffer: catch up on incomplete work, polish projects', hours: 3, priority: 'must-know', weekNumber: 24, resources: [{ type: 'doc', label: 'Self-driven — Buffer / polish' }] },
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
          { id: 'w25-mon', title: 'Day 1 — Two pointers pattern', hours: 1.5, priority: 'must-know', weekNumber: 25, resources: [{ type: 'youtube', label: 'NeetCode: Valid Palindrome (two pointers)', url: 'https://www.youtube.com/watch?v=jJXJ16kPFWg' }, { type: 'youtube', label: 'NeetCode: Two Sum II — Sorted Array', url: 'https://www.youtube.com/watch?v=cQ1Oz4ckceM' }, { type: 'youtube', label: 'NeetCode: 3Sum', url: 'https://www.youtube.com/watch?v=jzZsG8n2R9A' }] },
          { id: 'w25-tue', title: 'Day 2 — Sliding window', hours: 1.5, priority: 'must-know', weekNumber: 25, resources: [{ type: 'youtube', label: 'NeetCode: Best Time to Buy and Sell Stock (sliding window)', url: 'https://www.youtube.com/watch?v=1pkOgXD63yU' }, { type: 'youtube', label: 'NeetCode: Longest Substring Without Repeating Characters', url: 'https://www.youtube.com/watch?v=wiGpQwVHdE0' }, { type: 'youtube', label: 'NeetCode: Longest Repeating Character Replacement', url: 'https://www.youtube.com/watch?v=gqXU1UyA8pk' }] },
          { id: 'w25-wed', title: 'Day 3 — Hash maps / sets', hours: 1.5, priority: 'must-know', weekNumber: 25, resources: [{ type: 'youtube', label: 'NeetCode: Two Sum (hash map)', url: 'https://www.youtube.com/watch?v=KLlXCFG5TnA' }, { type: 'youtube', label: 'NeetCode: Group Anagrams', url: 'https://www.youtube.com/watch?v=vzdNOK2oB2E' }, { type: 'youtube', label: 'NeetCode: Contains Duplicate', url: 'https://www.youtube.com/watch?v=3OamzN90kPg' }] },
          { id: 'w25-thu', title: 'Day 4 — Prefix sum', hours: 1.5, priority: 'must-know', weekNumber: 25, resources: [{ type: 'youtube', label: 'NeetCode: Range Sum Query — Immutable (prefix sum)', url: 'https://www.youtube.com/watch?v=2pndAmo_sMA' }, { type: 'youtube', label: 'NeetCode: Subarray Sum Equals K', url: 'https://www.youtube.com/watch?v=fFVZt-6sgyo' }] },
          { id: 'w25-fri', title: 'Day 5 — Mock interview practice on Pramp', hours: 1.5, priority: 'must-know', weekNumber: 25, resources: [{ type: 'doc', label: 'Pramp.com (free)', url: 'https://www.pramp.com/' }] },
          { id: 'w25-sat', title: 'Day 6 — Catch-up + pattern review', hours: 3, priority: 'must-know', weekNumber: 25, resources: [{ type: 'doc', label: 'Re-solve hardest problems' }] },
          { id: 'w25-sun', title: 'Day 7 — Blind 75 progress — aim for 15 problems done', hours: 3, priority: 'must-know', weekNumber: 25, resources: [{ type: 'doc', label: 'NeetCode Blind 75 — filtered problem list', url: 'https://neetcode.io/practice?tab=blind75' }, { type: 'youtube', label: 'NeetCode: Blind 75 walkthrough playlist', url: 'https://www.youtube.com/playlist?list=PLot-Xpze53ldVwtstag2TL4HQhAnC8ATf' }] },
        ],
      },
      {
        id: 'w26',
        title: 'Week 26 — DSA Sprint Part 2: Trees, Graphs, DP',
        subtopics: [
          { id: 'w26-mon', title: 'Day 1 — Binary trees: DFS (pre/in/post), BFS', hours: 1.5, priority: 'must-know', weekNumber: 26, resources: [{ type: 'youtube', label: 'NeetCode: Invert Binary Tree (BFS/DFS basics)', url: 'https://www.youtube.com/watch?v=OnSn2XEQ4MY' }, { type: 'youtube', label: 'NeetCode: Maximum Depth of Binary Tree', url: 'https://www.youtube.com/watch?v=hTM3phVI6YQ' }, { type: 'youtube', label: 'NeetCode: Diameter of Binary Tree', url: 'https://www.youtube.com/watch?v=bkxqA8Rfv04' }] },
          { id: 'w26-tue', title: 'Day 2 — BST operations + LCA', hours: 1.5, priority: 'must-know', weekNumber: 26, resources: [{ type: 'youtube', label: 'NeetCode: Validate Binary Search Tree', url: 'https://www.youtube.com/watch?v=s6ATEkipzow' }, { type: 'youtube', label: 'NeetCode: Lowest Common Ancestor of a BST', url: 'https://www.youtube.com/watch?v=gs2LMfuOR9k' }, { type: 'youtube', label: 'NeetCode: Kth Smallest Element in BST', url: 'https://www.youtube.com/watch?v=5LUXSvjmGCw' }] },
          { id: 'w26-wed', title: 'Day 3 — Graphs: BFS/DFS, connected components', hours: 1.5, priority: 'must-know', weekNumber: 26, resources: [{ type: 'youtube', label: 'NeetCode: Number of Islands (BFS/DFS)', url: 'https://www.youtube.com/watch?v=pV2kpPD66nE' }, { type: 'youtube', label: 'NeetCode: Clone Graph', url: 'https://www.youtube.com/watch?v=mQeF6bN8hMk' }, { type: 'youtube', label: 'NeetCode: Pacific Atlantic Water Flow', url: 'https://www.youtube.com/watch?v=s-VkcjHqkGI' }] },
          { id: 'w26-thu', title: 'Day 4 — Topological sort, Union-Find', hours: 1.5, priority: 'must-know', weekNumber: 26, resources: [{ type: 'youtube', label: 'NeetCode: Course Schedule (topological sort)', url: 'https://www.youtube.com/watch?v=EgI5nU9etnU' }, { type: 'youtube', label: 'NeetCode: Redundant Connection (Union-Find)', url: 'https://www.youtube.com/watch?v=FXWRE67PLL0' }] },
          { id: 'w26-fri', title: 'Day 5 — DP basics: climbing stairs, coin change', hours: 1.5, priority: 'must-know', weekNumber: 26, resources: [{ type: 'youtube', label: 'NeetCode: Climbing Stairs (1-D DP intro)', url: 'https://www.youtube.com/watch?v=Y0lT9Fck7qI' }, { type: 'youtube', label: 'NeetCode: Coin Change', url: 'https://www.youtube.com/watch?v=H9bfqozjoqs' }] },
          { id: 'w26-sat', title: 'Day 6 — DP intermediate: LIS, edit distance', hours: 3, priority: 'must-know', weekNumber: 26, resources: [{ type: 'youtube', label: 'NeetCode: Longest Increasing Subsequence (LIS)', url: 'https://www.youtube.com/watch?v=cjWnW0hdF1Y' }, { type: 'youtube', label: 'NeetCode: Edit Distance', url: 'https://www.youtube.com/watch?v=XYi2-LPrwm4' }, { type: 'youtube', label: 'NeetCode: Longest Common Subsequence', url: 'https://www.youtube.com/watch?v=Ua0GhsJSlWM' }] },
          { id: 'w26-sun', title: 'Day 7 — Heaps: top-K, merge K sorted lists', hours: 3, priority: 'must-know', weekNumber: 26, resources: [{ type: 'youtube', label: 'NeetCode: Kth Largest Element in an Array (heap top-K)', url: 'https://www.youtube.com/watch?v=XEmy13g1Qxc' }, { type: 'youtube', label: 'NeetCode: Merge K Sorted Lists', url: 'https://www.youtube.com/watch?v=q5a5OiGbT6Q' }, { type: 'youtube', label: 'NeetCode: Find Median from Data Stream', url: 'https://www.youtube.com/watch?v=itmhHWaHupI' }] },
        ],
      },
      {
        id: 'w27',
        title: 'Week 27 — ML System Design Framework',
        subtopics: [
          { id: 'w27-mon', title: 'Day 1 — The 8-step framework', hours: 1.5, priority: 'must-know', weekNumber: 27, resources: [{ type: 'book', label: 'Aminian book Chapter 1' }] },
          { id: 'w27-tue', title: 'Day 2 — Steps 1-2: Requirements, metrics', hours: 1.5, priority: 'must-know', weekNumber: 27, resources: [{ type: 'book', label: 'Aminian book' }] },
          { id: 'w27-wed', title: 'Day 3 — Steps 3-4: ML problem framing, data strategy', hours: 1.5, priority: 'must-know', weekNumber: 27, resources: [{ type: 'book', label: 'Aminian book' }] },
          { id: 'w27-thu', title: 'Day 4 — Steps 5-6: Feature engineering, model architecture', hours: 1.5, priority: 'must-know', weekNumber: 27, resources: [{ type: 'book', label: 'Aminian book' }] },
          { id: 'w27-fri', title: 'Day 5 — Steps 7-8: Training pipeline, serving + monitoring', hours: 1.5, priority: 'must-know', weekNumber: 27, resources: [{ type: 'book', label: 'Aminian book' }] },
          { id: 'w27-sat', title: 'Day 6 — Case Study 1: Video Recommendation System (YouTube)', hours: 3, priority: 'must-know', weekNumber: 27, resources: [{ type: 'book', label: 'Aminian Ch 2-3' }] },
          { id: 'w27-sun', title: 'Day 7 — Write your own design doc for the case study', hours: 3, priority: 'must-know', weekNumber: 27, resources: [{ type: 'doc', label: 'Self-driven' }] },
        ],
      },
      {
        id: 'w28',
        title: 'Week 28 — ML System Design Practice (5 Case Studies)',
        subtopics: [
          { id: 'w28-mon', title: 'Mon-Day 2 — Search & Ranking System — Aminian', hours: 3, priority: 'must-know', weekNumber: 28, resources: [{ type: 'book', label: 'Aminian — Search & Ranking' }] },
          { id: 'w28-wed', title: 'Wed-Day 4 — Ad Click Prediction at Scale — Aminian', hours: 3, priority: 'must-know', weekNumber: 28, resources: [{ type: 'book', label: 'Aminian — Ad Click Prediction' }] },
          { id: 'w28-fri', title: 'Day 5 — RAG Chatbot Architecture — use your Project 3 as starting point', hours: 1.5, priority: 'must-know', weekNumber: 28, resources: [{ type: 'doc', label: 'Self-driven (build on Project 3)' }] },
          { id: 'w28-sat', title: 'Day 6 — Content Moderation System — Aminian', hours: 3, priority: 'must-know', weekNumber: 28, resources: [{ type: 'book', label: 'Aminian — Content Moderation' }] },
          { id: 'w28-sun', title: 'Day 7 — Fraud Detection (imbalanced, real-time) — Aminian', hours: 3, priority: 'must-know', weekNumber: 28, resources: [{ type: 'book', label: 'Aminian — Fraud Detection' }] },
        ],
      },
      {
        id: 'w29',
        title: 'Week 29 — DSA Sprint Part 3: Hard Patterns',
        subtopics: [
          { id: 'w29-mon', title: 'Day 1 — Backtracking: subsets, permutations, N-queens', hours: 1.5, priority: 'must-know', weekNumber: 29, resources: [{ type: 'youtube', label: 'NeetCode: Subsets (backtracking template)', url: 'https://www.youtube.com/watch?v=REOH22Xwdkk' }, { type: 'youtube', label: 'NeetCode: Permutations', url: 'https://www.youtube.com/watch?v=s7AvT7cGdSo' }, { type: 'youtube', label: 'NeetCode: N-Queens', url: 'https://www.youtube.com/watch?v=Ph95IHmRp5M' }] },
          { id: 'w29-tue', title: 'Day 2 — Greedy: interval scheduling, jump game', hours: 1.5, priority: 'must-know', weekNumber: 29, resources: [{ type: 'youtube', label: 'NeetCode: Jump Game (greedy)', url: 'https://www.youtube.com/watch?v=Yan0cv2cLy8' }, { type: 'youtube', label: 'NeetCode: Non-overlapping Intervals (interval scheduling)', url: 'https://www.youtube.com/watch?v=nONCGxWoUfM' }] },
          { id: 'w29-wed', title: 'Day 3 — Binary search variants', hours: 1.5, priority: 'must-know', weekNumber: 29, resources: [{ type: 'youtube', label: 'NeetCode: Binary Search (template)', url: 'https://www.youtube.com/watch?v=s4DPM8ct1pI' }, { type: 'youtube', label: 'NeetCode: Find Minimum in Rotated Sorted Array', url: 'https://www.youtube.com/watch?v=nIVW4P8b1VA' }, { type: 'youtube', label: 'NeetCode: Search in Rotated Sorted Array', url: 'https://www.youtube.com/watch?v=U8XENwh8Oy8' }] },
          { id: 'w29-thu', title: 'Day 4 — Trie problems', hours: 1.5, priority: 'must-know', weekNumber: 29, resources: [{ type: 'youtube', label: 'NeetCode: Implement Trie (Prefix Tree)', url: 'https://www.youtube.com/watch?v=oobqoCJlHA0' }, { type: 'youtube', label: 'NeetCode: Word Search II (Trie + DFS)', url: 'https://www.youtube.com/watch?v=asbcE9mZz_U' }] },
          { id: 'w29-fri', title: 'Day 5 — Bit manipulation basics', hours: 1.5, priority: 'must-know', weekNumber: 29, resources: [{ type: 'youtube', label: 'NeetCode: Single Number (XOR trick)', url: 'https://www.youtube.com/watch?v=qMPX1AOa83k' }, { type: 'youtube', label: 'NeetCode: Number of 1 Bits (Hamming weight)', url: 'https://www.youtube.com/watch?v=5Km3utixwZs' }, { type: 'youtube', label: 'NeetCode: Counting Bits', url: 'https://www.youtube.com/watch?v=RyBM56RIWrM' }] },
          { id: 'w29-sat', title: 'Day 6 — Hard DP: knapsack, LCS', hours: 3, priority: 'must-know', weekNumber: 29, resources: [{ type: 'youtube', label: 'NeetCode: 0/1 Knapsack pattern (Partition Equal Subset Sum)', url: 'https://www.youtube.com/watch?v=IsvocB5BJhw' }, { type: 'youtube', label: 'NeetCode: Longest Common Subsequence (2-D DP)', url: 'https://www.youtube.com/watch?v=Ua0GhsJSlWM' }, { type: 'youtube', label: 'NeetCode: Unique Paths', url: 'https://www.youtube.com/watch?v=IlEsdxuD4lY' }] },
          { id: 'w29-sun', title: 'Day 7 — Mock interview on Pramp + review', hours: 3, priority: 'must-know', weekNumber: 29, resources: [{ type: 'doc', label: 'Pramp.com', url: 'https://www.pramp.com/' }] },
        ],
      },
      {
        id: 'w30',
        title: 'Week 30 — ML Breadth Interview Review',
        subtopics: [
          { id: 'w30-mon', title: 'Day 1 — Why gradient descent works. Cross-entropy derivation.', hours: 1.5, priority: 'must-know', weekNumber: 30, resources: [{ type: 'article', label: "Eldan's guide page 11" }] },
          { id: 'w30-tue', title: 'Day 2 — Bias-variance tradeoff. L1 vs L2.', hours: 1.5, priority: 'must-know', weekNumber: 30, resources: [{ type: 'article', label: "Eldan's guide page 11" }] },
          { id: 'w30-wed', title: 'Day 3 — Batch norm vs Layer norm. Vanishing gradients + ResNet.', hours: 1.5, priority: 'must-know', weekNumber: 30, resources: [{ type: 'article', label: "Eldan's guide page 11" }] },
          { id: 'w30-thu', title: 'Day 4 — Adam math (first + second moments). MSE vs cross-entropy.', hours: 1.5, priority: 'must-know', weekNumber: 30, resources: [{ type: 'article', label: "Eldan's guide page 11" }] },
          { id: 'w30-fri', title: 'Day 5 — Self-attention from scratch. Q/K/V.', hours: 1.5, priority: 'must-know', weekNumber: 30, resources: [{ type: 'article', label: 'Attention Is All You Need', url: 'https://arxiv.org/abs/1706.03762' }] },
          { id: 'w30-sat', title: 'Day 6 — LoRA math + why it works. RLHF end-to-end. KV cache.', hours: 3, priority: 'must-know', weekNumber: 30, resources: [{ type: 'article', label: 'LoRA paper + Raschka substack', url: 'https://arxiv.org/abs/2106.09685' }] },
          { id: 'w30-sun', title: 'Day 7 — SFT vs RLHF vs DPO. Build Anki deck of 100+ Q&A.', hours: 3, priority: 'must-know', weekNumber: 30, resources: [{ type: 'doc', label: 'Anki + Notion flashcards' }] },
        ],
      },
      {
        id: 'w31',
        title: 'Week 31 — Resume + GitHub Polish + Behavioral Stories',
        subtopics: [
          { id: 'w31-mon', title: 'Day 1 — Rewrite resume (Action verb → What → Result with numbers)', hours: 1.5, priority: 'must-know', weekNumber: 31, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w31-tue', title: 'Day 2 — Polish all GitHub repos: clean READMEs, architecture diagrams, demo GIFs', hours: 1.5, priority: 'must-know', weekNumber: 31, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w31-wed', title: 'Day 3 — Build portfolio website (GitHub Pages + template)', hours: 1.5, priority: 'must-know', weekNumber: 31, resources: [{ type: 'doc', label: 'GitHub Pages docs', url: 'https://pages.github.com/' }] },
          { id: 'w31-thu', title: 'Day 4 — LinkedIn profile overhaul — keywords for recruiter search', hours: 1.5, priority: 'must-know', weekNumber: 31, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w31-fri', title: "Day 5 — Prepare 8 STAR stories (Eldan's page 14)", hours: 1.5, priority: 'must-know', weekNumber: 31, resources: [{ type: 'article', label: "Eldan's guide page 14" }] },
          { id: 'w31-sat', title: 'Day 6 — Practice STAR stories out loud, record yourself', hours: 3, priority: 'must-know', weekNumber: 31, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w31-sun', title: 'Day 7 — Get resume reviewed: r/EngineeringResumes or senior', hours: 3, priority: 'must-know', weekNumber: 31, resources: [{ type: 'doc', label: 'r/EngineeringResumes', url: 'https://www.reddit.com/r/EngineeringResumes/' }] },
        ],
      },
      {
        id: 'w32',
        title: 'Week 32 — Full Mock Interview Loops',
        subtopics: [
          { id: 'w32-mon', title: 'Day 1 — Pramp DSA mock', hours: 1.5, priority: 'must-know', weekNumber: 32, resources: [{ type: 'doc', label: 'Pramp', url: 'https://www.pramp.com/' }] },
          { id: 'w32-tue', title: 'Day 2 — Pramp behavioral mock', hours: 1.5, priority: 'must-know', weekNumber: 32, resources: [{ type: 'doc', label: 'Pramp', url: 'https://www.pramp.com/' }] },
          { id: 'w32-wed', title: 'Day 3 — interviewing.io DSA mock or another Pramp', hours: 1.5, priority: 'must-know', weekNumber: 32, resources: [{ type: 'doc', label: 'interviewing.io', url: 'https://interviewing.io/' }] },
          { id: 'w32-thu', title: 'Day 4 — ML system design mock with peer', hours: 1.5, priority: 'must-know', weekNumber: 32, resources: [{ type: 'doc', label: 'Self-driven (peer pairing)' }] },
          { id: 'w32-fri', title: 'Day 5 — ML breadth mock with peer', hours: 1.5, priority: 'must-know', weekNumber: 32, resources: [{ type: 'doc', label: 'Self-driven (peer pairing)' }] },
          { id: 'w32-sat', title: 'Day 6 — Review all feedback, identify weak spots', hours: 3, priority: 'must-know', weekNumber: 32, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w32-sun', title: 'Day 7 — Focused drilling on weak spots', hours: 3, priority: 'must-know', weekNumber: 32, resources: [{ type: 'doc', label: 'Self-driven' }] },
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
          { id: 'w33-mon', title: 'Day 1 — vLLM: continuous batching, PagedAttention', hours: 1.5, priority: 'must-know', weekNumber: 33, resources: [{ type: 'doc', label: 'vLLM: Quickstart — install and serve a model', url: 'https://docs.vllm.ai/en/latest/getting_started/quickstart.html' }, { type: 'doc', label: 'vLLM: PagedAttention & continuous batching explained', url: 'https://docs.vllm.ai/en/latest/serving/distributed_serving.html' }] },
          { id: 'w33-tue', title: 'Day 2 — Ollama for local LLM serving', hours: 1.5, priority: 'must-know', weekNumber: 33, resources: [{ type: 'doc', label: 'Ollama docs', url: 'https://github.com/ollama/ollama' }] },
          { id: 'w33-wed', title: 'Day 3 — Quantization: GPTQ, AWQ, GGUF, INT4', hours: 1.5, priority: 'must-know', weekNumber: 33, resources: [{ type: 'doc', label: 'bitsandbytes + GGUF docs', url: 'https://github.com/ggerganov/llama.cpp/blob/master/gguf-py/README.md' }] },
          { id: 'w33-thu', title: 'Day 4 — AWS basics: S3, EC2, IAM', hours: 1.5, priority: 'must-know', weekNumber: 33, resources: [{ type: 'course', label: 'AWS Skill Builder (free) — Cloud Practitioner path', url: 'https://explore.skillbuilder.aws/' }] },
          { id: 'w33-fri', title: 'Day 5 — AWS Bedrock for hosted LLM access', hours: 1.5, priority: 'must-know', weekNumber: 33, resources: [{ type: 'doc', label: 'AWS Bedrock: Getting Started — your first hosted model call', url: 'https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started.html' }, { type: 'doc', label: 'AWS Bedrock: Foundation models supported (Claude, Llama, etc.)', url: 'https://docs.aws.amazon.com/bedrock/latest/userguide/models-supported.html' }] },
          { id: 'w33-sat', title: 'Day 6 — Stand up vLLM locally with a small model, benchmark tokens/sec', hours: 3, priority: 'must-know', weekNumber: 33, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w33-sun', title: 'Day 7 — Deploy a model to AWS (EC2 or Bedrock) — get hands-on cloud experience', hours: 3, priority: 'must-know', weekNumber: 33, resources: [{ type: 'doc', label: 'AWS free tier', url: 'https://aws.amazon.com/free/' }] },
        ],
      },
      {
        id: 'w34',
        title: 'Week 34 — LLM Evaluation + Guardrails + Observability',
        subtopics: [
          { id: 'w34-mon', title: 'Day 1 — LLM-as-a-judge: biases (verbosity, position, self-preference)', hours: 1.5, priority: 'must-know', weekNumber: 34, resources: [{ type: 'article', label: 'Anthropic + OpenAI eval blog posts', url: 'https://www.anthropic.com/news' }] },
          { id: 'w34-tue', title: 'Day 2 — Golden datasets + regression suites', hours: 1.5, priority: 'must-know', weekNumber: 34, resources: [{ type: 'article', label: 'aiwithanju roadmap slide 9' }] },
          { id: 'w34-wed', title: 'Day 3 — DeepEval + Promptfoo for systematic testing', hours: 1.5, priority: 'must-know', weekNumber: 34, resources: [{ type: 'doc', label: 'DeepEval: Quickstart — write your first LLM eval', url: 'https://docs.confident-ai.com/docs/getting-started' }, { type: 'doc', label: 'Promptfoo: Getting Started — prompt regression testing', url: 'https://www.promptfoo.dev/docs/getting-started/' }] },
          { id: 'w34-thu', title: 'Day 4 — Prompt injection attacks + defenses (OWASP LLM Top 10)', hours: 1.5, priority: 'must-know', weekNumber: 34, resources: [{ type: 'doc', label: 'OWASP LLM docs', url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/' }] },
          { id: 'w34-fri', title: 'Day 5 — Guardrails: input/output filtering, allowlists', hours: 1.5, priority: 'must-know', weekNumber: 34, resources: [{ type: 'doc', label: 'Guardrails-AI', url: 'https://www.guardrailsai.com/docs' }] },
          { id: 'w34-sat', title: 'Day 6 — Add full eval suite + CI gates to your RAG project', hours: 3, priority: 'must-know', weekNumber: 34, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w34-sun', title: 'Day 7 — Add prompt injection guardrails + red-team your own agent', hours: 3, priority: 'must-know', weekNumber: 34, resources: [{ type: 'doc', label: 'Self-driven' }] },
        ],
      },
      {
        id: 'w35',
        title: 'Week 35 — Open Source Contribution + Capstone Kickoff',
        subtopics: [
          { id: 'w35-mon', title: 'Day 1 — Find a "good first issue" on a target repo', hours: 1.5, priority: 'must-know', weekNumber: 35, resources: [{ type: 'doc', label: 'GitHub good-first-issue search', url: 'https://github.com/search?q=label%3A%22good+first+issue%22&type=issues' }] },
          { id: 'w35-tue', title: 'Day 2 — Clone, set up dev environment, understand codebase', hours: 1.5, priority: 'must-know', weekNumber: 35, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w35-wed', title: 'Day 3 — Work on the issue', hours: 1.5, priority: 'must-know', weekNumber: 35, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w35-thu', title: 'Day 4 — Work on the issue', hours: 1.5, priority: 'must-know', weekNumber: 35, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w35-fri', title: 'Day 5 — Open the PR', hours: 1.5, priority: 'must-know', weekNumber: 35, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w35-sat', title: 'Day 6 — Start CAPSTONE: Multi-agent system with evals', hours: 3, priority: 'must-know', weekNumber: 35, resources: [{ type: 'doc', label: 'LangGraph or Microsoft Agent Framework' }] },
          { id: 'w35-sun', title: 'Day 7 — Continue capstone', hours: 3, priority: 'must-know', weekNumber: 35, resources: [{ type: 'doc', label: 'Self-driven' }] },
        ],
      },
      {
        id: 'w36',
        title: 'Week 36 — CAPSTONE: Multi-Agent Production System',
        subtopics: [
          { id: 'w36-mon', title: 'Mon-Day 3 — Build core agent + tool integrations', hours: 4.5, priority: 'must-know', weekNumber: 36, resources: [{ type: 'doc', label: 'LangGraph', url: 'https://langchain-ai.github.io/langgraph/' }] },
          { id: 'w36-thu', title: 'Day 4 — Pydantic validation on all tool inputs', hours: 1.5, priority: 'must-know', weekNumber: 36, resources: [{ type: 'doc', label: 'pydantic-ai', url: 'https://ai.pydantic.dev/' }] },
          { id: 'w36-fri', title: 'Day 5 — Build golden eval set', hours: 1.5, priority: 'must-know', weekNumber: 36, resources: [{ type: 'doc', label: 'Self-driven (≥50 cases)' }] },
          { id: 'w36-sat', title: 'Day 6 — Set up CI/CD with eval gates', hours: 3, priority: 'must-know', weekNumber: 36, resources: [{ type: 'doc', label: 'GitHub Actions', url: 'https://docs.github.com/en/actions' }] },
          { id: 'w36-sun', title: 'Day 7 — Deploy + Langfuse tracing — Portfolio Capstone Project #5', hours: 3, priority: 'must-know', weekNumber: 36, resources: [{ type: 'doc', label: 'Langfuse + Render/Railway/AWS', url: 'https://langfuse.com/docs' }] },
        ],
      },
      {
        id: 'w37',
        title: 'Week 37 — Internship/Job Applications Sprint',
        subtopics: [
          { id: 'w37-mon', title: 'Day 1 — Identify 30 target companies (5 stretch MAANG, 15 strong AI startups, 10 realistic)', hours: 1.5, priority: 'must-know', weekNumber: 37, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w37-tue', title: 'Day 2 — Apply to 10 — tailor resume per role', hours: 1.5, priority: 'must-know', weekNumber: 37, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w37-wed', title: 'Day 3 — LinkedIn outreach: 20 AI engineers at target companies', hours: 1.5, priority: 'must-know', weekNumber: 37, resources: [{ type: 'doc', label: 'LinkedIn', url: 'https://www.linkedin.com/' }] },
          { id: 'w37-thu', title: 'Day 4 — Ask 3 connections for referrals', hours: 1.5, priority: 'must-know', weekNumber: 37, resources: [{ type: 'doc', label: 'Self-driven — referral rule: "One genuine referral is worth 50 cold applies."' }] },
          { id: 'w37-fri', title: 'Day 5 — Apply to 10 more', hours: 1.5, priority: 'must-know', weekNumber: 37, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w37-sat', title: 'Day 6 — Write 3 detailed blog posts on your projects (Medium/personal site)', hours: 3, priority: 'must-know', weekNumber: 37, resources: [{ type: 'doc', label: 'Medium / personal site', url: 'https://medium.com/' }] },
          { id: 'w37-sun', title: 'Day 7 — Cross-post projects on Twitter/X with #BuildInPublic', hours: 3, priority: 'must-know', weekNumber: 37, resources: [{ type: 'doc', label: 'Twitter / X', url: 'https://x.com/' }] },
        ],
      },
      {
        id: 'w38',
        title: 'Week 38 — Phone Screens + Onsite Prep',
        subtopics: [
          { id: 'w38-mon', title: 'Day 1 — DSA: 1 medium problem to stay sharp', hours: 1, priority: 'must-know', weekNumber: 38, resources: [{ type: 'doc', label: 'LeetCode: Medium problems filtered', url: 'https://leetcode.com/problemset/?difficulty=MEDIUM' }] },
          { id: 'w38-tue', title: 'Day 2 — Review ML breadth flashcards (Anki)', hours: 0.5, priority: 'must-know', weekNumber: 38, resources: [{ type: 'doc', label: 'Anki deck (from Week 30)' }] },
          { id: 'w38-wed', title: 'Day 3 — Prep for upcoming interviews (research company + recent papers from their team)', hours: 1.5, priority: 'must-know', weekNumber: 38, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w38-thu', title: 'Day 4 — DSA: 1 medium problem + ML flashcards', hours: 1.5, priority: 'must-know', weekNumber: 38, resources: [{ type: 'doc', label: 'LeetCode: Medium problems filtered', url: 'https://leetcode.com/problemset/?difficulty=MEDIUM' }] },
          { id: 'w38-fri', title: 'Day 5 — DSA + flashcards + interview prep continued', hours: 1.5, priority: 'must-know', weekNumber: 38, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w38-sat', title: 'Day 6 — Mock interview + project deep-dive practice', hours: 3, priority: 'must-know', weekNumber: 38, resources: [{ type: 'doc', label: 'Pramp + peer pairing', url: 'https://www.pramp.com/' }] },
          { id: 'w38-sun', title: 'Day 7 — Mock interview + project deep-dive practice', hours: 3, priority: 'must-know', weekNumber: 38, resources: [{ type: 'doc', label: 'Pramp + peer pairing', url: 'https://www.pramp.com/' }] },
        ],
      },
      {
        id: 'w39',
        title: 'Week 39 — Specialization Decision Point',
        subtopics: [
          { id: 'w39-mon', title: 'Day 1 — Track A — Applied LLM Engineering: agents, MCP, structured generation, observability', hours: 1.5, priority: 'must-know', weekNumber: 39, resources: [{ type: 'doc', label: 'Track A (recommended default)' }] },
          { id: 'w39-tue', title: 'Day 2 — Track B — ML Platform / MLOps: Kubernetes, Ray, feature stores (Feast)', hours: 1.5, priority: 'must-know', weekNumber: 39, resources: [{ type: 'doc', label: 'Feast: Quickstart — set up your first feature store', url: 'https://docs.feast.dev/getting-started/quickstart' }] },
          { id: 'w39-wed', title: 'Day 3 — Track C — Multimodal AI: CV + LLMs, VLMs like LLaVA, Qwen-VL', hours: 1.5, priority: 'must-know', weekNumber: 39, resources: [{ type: 'doc', label: 'LLaVA project', url: 'https://llava-vl.github.io/' }] },
          { id: 'w39-thu', title: 'Day 4 — Track D — Foundation Models / Research (needs MS+); read papers, reproduce SOTA', hours: 1.5, priority: 'must-know', weekNumber: 39, resources: [{ type: 'doc', label: 'arXiv: cs.LG (machine learning) — recent papers', url: 'https://arxiv.org/list/cs.LG/recent' }, { type: 'doc', label: 'arXiv Sanity (Karpathy) — curated ML papers', url: 'https://arxiv-sanity-lite.com/' }] },
          { id: 'w39-fri', title: 'Day 5 — Pick ONE track and outline mini-project scope', hours: 1.5, priority: 'must-know', weekNumber: 39, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w39-sat', title: 'Day 6 — Deep-dive study on chosen track', hours: 3, priority: 'must-know', weekNumber: 39, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w39-sun', title: 'Day 7 — Start mini-project in chosen specialization', hours: 3, priority: 'must-know', weekNumber: 39, resources: [{ type: 'doc', label: 'Self-driven' }] },
        ],
      },
      {
        id: 'w40',
        title: 'Week 40 — Final Buffer + MS Application Kickoff',
        subtopics: [
          { id: 'w40-mon', title: 'Day 1 — GRE prep starts (target 325+, Quant 168+) — Magoosh or Manhattan Prep', hours: 2, priority: 'must-know', weekNumber: 40, resources: [{ type: 'course', label: 'Magoosh / Manhattan Prep', url: 'https://magoosh.com/gre/' }] },
          { id: 'w40-tue', title: 'Day 2 — GRE prep continues', hours: 2, priority: 'must-know', weekNumber: 40, resources: [{ type: 'course', label: 'Magoosh', url: 'https://magoosh.com/gre/' }] },
          { id: 'w40-wed', title: 'Day 3 — GRE prep + identify 10 target universities (Tier 1/2/3)', hours: 2, priority: 'must-know', weekNumber: 40, resources: [{ type: 'doc', label: 'University shortlist research' }] },
          { id: 'w40-thu', title: 'Day 4 — GRE prep + identify 5 faculty per university whose research aligns', hours: 2, priority: 'must-know', weekNumber: 40, resources: [{ type: 'doc', label: 'Faculty research alignment' }] },
          { id: 'w40-fri', title: 'Day 5 — Draft SOP v0 — concrete research alignment, not generic AI enthusiasm', hours: 2, priority: 'must-know', weekNumber: 40, resources: [{ type: 'doc', label: 'SOP draft v0' }] },
          { id: 'w40-sat', title: 'Day 6 — Buffer: catch up on incomplete weeks, polish capstone', hours: 2, priority: 'must-know', weekNumber: 40, resources: [{ type: 'doc', label: 'Self-driven' }] },
          { id: 'w40-sun', title: 'Day 7 — Plan next 6 months: MS timeline + specialization deep-dive', hours: 2, priority: 'must-know', weekNumber: 40, resources: [{ type: 'doc', label: 'Forward planning' }] },
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
