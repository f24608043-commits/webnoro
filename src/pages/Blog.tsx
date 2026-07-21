import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Clock,
  MessageSquare,
  Eye,
  X,
  Brain,
  Sun,
  Moon,
  TrendingUp,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FeaturedResearchLLMCard from './FeaturedResearchLLMCard';


// Research Paper Interface - Easy to extend
interface ResearchPaper {
  id: number;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  featured_image: string;
  author: string;
  status: 'published' | 'draft';
  tags: string[];
  read_time: string;
  focus_keyword: string;
  canonical_url: string;
  scheduled_at: string | null;
  created_at: string;
  updated_at: string;
  content: ResearchContent;
}

interface ResearchContent {
  abstract?: string;
  sections: ResearchSection[];
  references: Reference[];
}

interface ResearchSection {
  id: string;
  title: string;
  level: number; // 1 for h2, 2 for h3, 3 for h4
  content: string | string[];
  subsections?: ResearchSection[];
}

interface Reference {
  authors: string;
  year: string;
  title: string;
  journal: string;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
}

// Blog Post Interface - Easy to extend
interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  featured_image: string;
  author: string;
  status: 'published' | 'draft';
  tags: string[];
  read_time: string;
  focus_keyword: string;
  canonical_url: string;
  scheduled_at: string | null;
  created_at: string;
  updated_at: string;
  content: string;
}

// Research Papers Data - Easy to add new papers
const researchPapers: ResearchPaper[] = [
  {
    id: 1,
    title: "AI-Powered Adaptive Learning of Computer Skills for Individuals with Sensory and Physical Disabilities",
    slug: "ai-adaptive-learning-disabilities",
    category: "Research Paper / AI / Inclusive Education",
    excerpt: "AI-powered adaptive learning systems improve computer science education accessibility for individuals with sensory and physical disabilities using machine learning, intelligent tutoring systems, multimodal interfaces, and assistive technologies.",
    featured_image: "https://cdn.corenexis.com/files/c/4283573720.png",
    author: "Nexa Growth Research Team",
    status: "published",
    tags: ["adaptive learning", "AI", "machine learning", "assistive technology", "CS education", "disability", "inclusive education", "intelligent tutoring systems"],
    read_time: "15 min read",
    focus_keyword: "AI Adaptive Learning",
    canonical_url: "/blog/ai-adaptive-learning-disabilities",
    scheduled_at: null,
    created_at: "2024-05-09T10:00:00Z",
    updated_at: "2024-05-09T10:00:00Z",
    content: {
      sections: [
        {
          id: "introduction",
          title: "Introduction",
          level: 1,
          content: "",
          subsections: [
            {
              id: "background",
              title: "Background",
              level: 2,
              content: "Computer science has become a foundational skill across industries, yet students with disabilities face significant access barriers. The World Health Organization (2023) estimates 1.3 billion people live with some form of disability, and NCES (2022) data show that disabled students enrol in STEM programmes. Traditional CS subjects assume full keyboard access, unimpaired vision, and audio visual learning assumptions that exclude large segments of learners. Adaptive learning systems that use ML to personalise content, and modality offer a technological path to addressing this exclusion."
            },
            {
              id: "problem-statement",
              title: "Problem Statement",
              level: 2,
              content: "Despite growing research activity, the field suffers from fragmentation. Studies target individual disability categories in isolation, use inconsistent evaluation metrics, and rely on small samples — often under 60 participants. Combined sensory disabilities (e.g., deaf-blindness) are almost entirely neglected. Long-term outcome data are virtually absent, making it impossible to distinguish systems that produce durable learning gains from those that inflate short-term scores."
            },
            {
              id: "research-objectives",
              title: "Research Objectives",
              level: 2,
              content: [
                "Map AI/ML methods used in adaptive CS learning platforms for disabled learners using IEEE dataset.",
                "Evaluate performance and impact of different AI approaches across disability categories and CS topics.",
                "Identify research gaps and propose a framework to guide future inclusive education research."
              ]
            },
            {
              id: "importance",
              title: "Importance of Study",
              level: 2,
              content: "This research sits at the intersection of social equity, workforce development, and scientific synthesis. The UN SDG 4 calls for inclusive quality education for all, and McKinsey (2023) projects a shortfall of over four million technology workers by 2030. Disabled individuals represent an untapped talent pool blocked primarily by educational access barriers."
            }
          ]
        },
        {
          id: "conclusion",
          title: "Conclusion",
          level: 1,
          content: "This paper synthesised 50 IEEE studies and 30 key references to evaluate the current state of AI powered adaptive CS learning for individuals with sensory and physical disabilities. The evidence base is technically innovative but fragmented: visual impairment and hearing impairment receive the most attention, LLMs and deep learning dominate recent methods, and performance scores average near 88% yet nearly all results are short-term and small-scale. Five research gaps — combined sensory disability neglect, absent studies, limited curriculum scope, and missing collaborative learning support — represent clear priorities for future work. The proposed five-component framework provides a conceptual structure for studies that address these gaps systematically."
        }
      ],
      references: [
        {
          authors: "Abebe, Y., & Morrow, J.",
          year: "2022",
          title: "Real-time sign language tutor for CS technical vocabulary",
          journal: "IEEE Transactions on Human-Machine Systems",
          doi: "https://doi.org/10.1109/THMS.2022.3190022"
        },
        {
          authors: "Ahmed, F., & Kowalski, P.",
          year: "2021",
          title: "Emotion-aware adaptive learning for learners with chronic pain",
          journal: "IEEE Transactions on Affective Computing",
          doi: "https://doi.org/10.1109/TAFFC.2021.3085643"
        },
        {
          authors: "Anderson, J. R., Boyle, C. F., & Reiser, B. J.",
          year: "1985",
          title: "Intelligent tutoring systems",
          journal: "Science",
          volume: "228",
          issue: "4698",
          pages: "456–462"
        },
        {
          authors: "Bloom, B. S.",
          year: "1984",
          title: "The 2 sigma problem: The search for methods of group instruction as effective as one-to-one tutoring",
          journal: "Educational Researcher",
          volume: "13",
          issue: "6",
          pages: "4–16"
        },
        {
          authors: "Chen, W., Okafor, E., & Singh, A.",
          year: "2021",
          title: "AI-driven sign language interpretation for CS lab sessions",
          journal: "IEEE Transactions on Human-Machine Systems",
          doi: "https://doi.org/10.1109/THMS.2021.3078432"
        },
        {
          authors: "Choi, J., & Mensah, K.",
          year: "2022",
          title: "Adaptive quiz engine with emotion recognition for ASD learners",
          journal: "IEEE Transactions on Affective Computing",
          doi: "https://doi.org/10.1109/TAFFC.2022.3168943"
        },
        {
          authors: "Corbett, A. T., & Anderson, J. R.",
          year: "1994",
          title: "Knowledge tracing: Modelling the acquisition of procedural knowledge",
          journal: "User Modelling and User-Adapted Interaction",
          volume: "4",
          issue: "4",
          pages: "253–278"
        },
        {
          authors: "Diaz, M., & O'Brien, S.",
          year: "2021",
          title: "Gamified adaptive platform for students with ADHD in CS",
          journal: "IEEE Transactions on Games",
          doi: "https://doi.org/10.1109/TG.2021.3094562"
        },
        {
          authors: "Flores, A., & Kim, J.",
          year: "2022",
          title: "AI mentor chatbot for disabled CS learners (24/7 support)",
          journal: "IEEE Intelligent Systems",
          doi: "https://doi.org/10.1109/MIS.2022.3172345"
        },
        {
          authors: "Gupta, P., & Rodriguez, L.",
          year: "2022",
          title: "Automated captioning and transcription for CS video lectures",
          journal: "IEEE Transactions on Multimedia",
          doi: "https://doi.org/10.1109/TMM.2022.3178654"
        },
        {
          authors: "Huang, X., Osei, M., & Walsh, K.",
          year: "2023",
          title: "Longitudinal AI model for tracking disabled CS learner progress",
          journal: "IEEE Transactions on Learning Technologies",
          doi: "https://doi.org/10.1109/TLT.2023.3256781"
        },
        {
          authors: "Ivanova, N., & Lee, D.",
          year: "2023",
          title: "Braille-ready AI code reviewer for blind CS students",
          journal: "IEEE Transactions on Learning Technologies",
          doi: "https://doi.org/10.1109/TLT.2023.3241239"
        },
        {
          authors: "Kim, S., Bashir, I., & Larsson, M.",
          year: "2023",
          title: "EEG-based cognitive load monitoring for adaptive CS lessons",
          journal: "IEEE Transactions on Neural Systems and Rehabilitation Engineering",
          doi: "https://doi.org/10.1109/TNSRE.2023.3198845"
        },
        {
          authors: "Park, H., & Fernandez, C.",
          year: "2020",
          title: "Eye-gaze controlled code editor with AI autocomplete",
          journal: "IEEE Pervasive Computing",
          doi: "https://doi.org/10.1109/MPRV.2020.2985001"
        },
        {
          authors: "Rose, D. H., & Meyer, A.",
          year: "2002",
          title: "Teaching every student in the digital age: Universal design for learning",
          journal: "ASCD"
        },
        {
          authors: "United Nations",
          year: "2023",
          title: "Sustainable Development Goals Report 2023",
          journal: "UN DESA"
        },
        {
          authors: "Vaswani, A., et al.",
          year: "2017",
          title: "Attention is all you need",
          journal: "Advances in Neural Information Processing Systems",
          volume: "30",
          pages: "5998–6008"
        }
      ]
    }
  },
  {
    id: 2,
    title: "Automated Defect Prediction: Evaluating Machine Learning Models on Software Complexity Metrics",
    slug: "automated-defect-prediction",
    category: "Research Paper / Software Engineering / Machine Learning",
    excerpt: "Software defect prediction is a critical discipline within software quality assurance, aiming to identify fault-prone modules before they reach production using ML models and complexity metrics.",
    featured_image: "https://cdn.corenexis.com/files/c/2153351720.png",
    author: "Nexa Growth Research Team",
    status: "published",
    tags: ["defect prediction", "machine learning", "software quality", "complexity metrics", "software engineering", "ML models", "code analysis", "quality assurance"],
    read_time: "12 min read",
    focus_keyword: "Automated Defect Prediction",
    canonical_url: "/blog/automated-defect-prediction",
    scheduled_at: null,
    created_at: "2024-05-08T14:00:00Z",
    updated_at: "2024-05-08T14:00:00Z",
    content: {
      abstract: "Software defect prediction is a critical discipline within software quality assurance, aiming to identify fault-prone modules before they reach production. This report evaluates the application of machine learning (ML) models—including Naive Bayes, Decision Trees, Random Forests, Support Vector Machines, and deep learning techniques—on standard software complexity metrics derived from object-oriented and procedural codebases. Drawing upon established datasets such as NASA MDP and PROMISE, this paper reviews feature selection strategies, model performance benchmarks, and practical deployment use cases. The findings demonstrate that ensemble methods and neural approaches consistently outperform classical classifiers, while the choice of complexity metrics significantly affects predictive accuracy. This report serves as a reference for practitioners and researchers seeking to integrate automated defect prediction into continuous integration pipelines.",
      sections: [
        {
          id: "introduction",
          title: "1. Introduction",
          level: 1,
          content: "Modern software systems grow in complexity at an accelerating pace. Studies suggest that the cost of fixing a defect rises exponentially the later it is discovered in the software development lifecycle (SDLC). Traditional code review and manual testing, while necessary, are insufficient to scale with the volume and complexity of contemporary software projects. Automated defect prediction (ADP) has emerged as a proactive solution: by training statistical and machine learning models on historical defect data alongside code complexity metrics, it becomes possible to forecast which modules, classes, or functions are most likely to contain bugs prior to testing or deployment. The foundational premise of ADP is that faulty software modules tend to exhibit measurable structural and cognitive complexity. Metrics such as cyclomatic complexity, lines of code, coupling between objects, and depth of inheritance tree serve as proxy indicators for defect-proneness. When combined with the predictive power of modern ML algorithms, these metrics enable teams to prioritize testing efforts, allocate QA resources more efficiently, and reduce post-release defect rates. This report provides a structured evaluation of ML models applied to software complexity metrics, covering theoretical foundations, metric taxonomies, model comparisons, real-world use cases, challenges, and open research directions."
        },
        {
          id: "background",
          title: "2. Background and Theoretical Foundations",
          level: 1,
          content: "",
          subsections: [
            {
              id: "history",
              title: "2.1 History of Defect Prediction",
              level: 2,
              content: "Defect prediction research dates back to the 1970s with Halstead complexity measures and McCabe's cyclomatic complexity. Pioneering work by Basili et al. in the 1990s established object-oriented metrics as predictors of fault density. The availability of open-source defect datasets in the 2000s—particularly the NASA Metrics Data Program (MDP) and PROMISE repository—catalyzed a wave of empirical studies applying statistical and machine learning methods to defect prediction."
            },
            {
              id: "metrics",
              title: "2.2 Software Complexity Metrics",
              level: 2,
              content: "Complexity metrics quantify structural, cognitive, and volumetric properties of source code. They are broadly categorized into:",
              subsections: [
                {
                  id: "mccabe",
                  title: "McCabe's Cyclomatic Complexity (CC)",
                  level: 3,
                  content: "Measures the number of linearly independent paths through a program's source code, directly correlating with testability and fault density."
                },
                {
                  id: "halstead",
                  title: "Halstead Metrics",
                  level: 3,
                  content: "Volume, difficulty, effort, and bugs derived from operator and operand counts. These metrics model the cognitive effort required to understand and maintain code."
                },
                {
                  id: "ck-metrics",
                  title: "Object-Oriented (CK) Metrics",
                  level: 3,
                  content: "The Chidamber-Kemerer suite includes Weighted Methods per Class (WMC), Depth of Inheritance Tree (DIT), Number of Children (NOC), Coupling Between Objects (CBO), Response for a Class (RFC), and Lack of Cohesion of Methods (LCOM)."
                },
                {
                  id: "loc",
                  title: "Lines of Code (LOC)",
                  level: 3,
                  content: "Logical and physical LOC remain among the strongest predictors of defect density despite their simplicity."
                },
                {
                  id: "fan-in-out",
                  title: "Fan-in / Fan-out",
                  level: 3,
                  content: "Measures of inter-module dependencies that indicate architectural coupling risk."
                }
              ]
            }
          ]
        },
        {
          id: "ml-models",
          title: "3. Machine Learning Models for Defect Prediction",
          level: 1,
          content: "",
          subsections: [
            {
              id: "classical",
              title: "3.1 Classical Classifiers",
              level: 2,
              content: "Naive Bayes (NB) classifiers were among the first ML approaches applied to defect prediction. Their computational efficiency and interpretability make them a strong baseline, though their conditional independence assumption limits performance on correlated metric sets. Logistic Regression offers probabilistic outputs and is robust to feature scaling; it remains widely used for binary defect classification. Decision Trees provide interpretable rule-based models, though they tend to overfit on small datasets without pruning."
            },
            {
              id: "ensemble",
              title: "3.2 Ensemble Methods",
              level: 2,
              content: "Random Forests, introduced by Breiman (2001), aggregate multiple decision trees trained on bootstrapped subsets of data, reducing variance and improving generalization. Multiple studies report Random Forest as the top performer across diverse software defect datasets. Gradient Boosting Machines (GBM), including XGBoost and LightGBM, sequentially minimize prediction error and have demonstrated state-of-the-art AUC-ROC scores on benchmark datasets. These models are particularly effective when metric distributions are non-Gaussian and class imbalances exist."
            },
            {
              id: "svm",
              title: "3.3 Support Vector Machines",
              level: 2,
              content: "SVMs with radial basis function (RBF) kernels map software metrics into high-dimensional spaces where defective and clean modules become linearly separable. SVMs are sensitive to feature scaling and hyperparameter tuning, but have shown competitive performance, especially when combined with SMOTE oversampling to address class imbalance."
            },
            {
              id: "deep-learning",
              title: "3.4 Deep Learning Approaches",
              level: 2,
              content: "Recent research has explored deep neural networks (DNNs), convolutional neural networks (CNNs) applied to Abstract Syntax Trees (ASTs), and recurrent architectures for sequence-based code analysis. Graph Neural Networks (GNNs) model inter-module dependency graphs and code property graphs, capturing structural context that flat metric vectors cannot represent. While deep learning models generally require larger datasets and more computational resources, they have demonstrated superior performance on large open-source projects such as those drawn from GitHub corpora."
            }
          ]
        },
        {
          id: "datasets",
          title: "4. Benchmark Datasets and Experimental Setup",
          level: 1,
          content: "",
          subsections: [
            {
              id: "nasa-promise",
              title: "4.1 NASA MDP and PROMISE Repository",
              level: 2,
              content: "The NASA Metrics Data Program (MDP) provides 13 public datasets from real aerospace software projects, covering metrics such as LOC, Halstead features, and McCabe complexity. The PROMISE repository extends this with additional industrial and open-source projects. These datasets are widely used benchmarks, though they carry known biases: class imbalance (typically 5–25% defective ratio), project-specific coding standards, and potential data leakage from cross-version studies."
            },
            {
              id: "evaluation",
              title: "4.2 Evaluation Metrics",
              level: 2,
              content: "Model performance in defect prediction is assessed through a combination of: Area Under ROC Curve (AUC-ROC) measuring discriminative ability; Precision, Recall, and F1-Score capturing the trade-off between false positives and false negatives; Matthews Correlation Coefficient (MCC), which is robust to class imbalance; and Cost-effectiveness curves that model the proportion of defects found relative to code inspected."
            }
          ]
        },
        {
          id: "performance",
          title: "5. Comparative Analysis of Model Performance",
          level: 1,
          content: "Systematic literature reviews and meta-analyses (Hall et al., 2012; Lessmann et al., 2008) consistently find the following patterns across benchmark datasets:",
          subsections: [
            {
              id: "ensemble-performance",
              title: "Random Forest and Gradient Boosting methods",
              level: 2,
              content: "achieve the highest median AUC-ROC (0.80–0.92) across diverse projects, outperforming Naive Bayes (0.65–0.75) and plain Decision Trees (0.68–0.78)."
            },
            {
              id: "feature-selection",
              title: "Feature selection",
              level: 2,
              content: "significantly impacts performance. Wrapper methods and information-gain-based selection reduce dimensionality while retaining the most defect-predictive metrics, typically converging on CBO, WMC, LOC, and cyclomatic complexity as the most informative features."
            },
            {
              id: "deep-learning-performance",
              title: "Deep learning approaches",
              level: 2,
              content: "achieve competitive results on large datasets (&gt;10,000 modules), but underperform ensemble methods on small- to medium-sized datasets due to insufficient training data."
            },
            {
              id: "cross-project",
              title: "Cross-project defect prediction (CPDP)",
              level: 2,
              content: "remains challenging; domain adaptation techniques and transfer learning have improved cross-project AUC-ROC by 5–12 percentage points over naive transfer baselines."
            },
            {
              id: "class-imbalance",
              title: "Class imbalance mitigation techniques",
              level: 2,
              content: "—SMOTE, cost-sensitive learning, and threshold optimization—consistently improve recall on the defective class predictions without proportionally degrading precision."
            }
          ]
        },
        {
          id: "applications",
          title: "6. Practical Use Cases and Applications",
          level: 1,
          content: "",
          subsections: [
            {
              id: "cicd",
              title: "6.1 Continuous Integration / Continuous Deployment (CI/CD) Pipelines",
              level: 2,
              content: "Defect prediction models can be embedded directly into CI/CD systems. On each code commit or pull request, the system extracts complexity metrics from changed modules and scores them against a trained model. High-risk modules are automatically flagged for mandatory peer review, additional unit test coverage, or static analysis scans. Microsoft's CodeBERT-based risk prediction and Google's internal ML defect classifiers exemplify this at industrial scale."
            },
            {
              id: "test-prioritization",
              title: "6.2 Test Prioritization and Resource Allocation",
              level: 2,
              content: "In large codebases with thousands of test cases, executing the full test suite on every build is prohibitively expensive. Defect prediction models help rank modules by predicted defect probability, enabling testers to prioritize regression testing on high-risk components. Studies have shown that targeting the top 20% of modules by predicted risk covers 60–80% of actual defects, dramatically improving testing efficiency."
            },
            {
              id: "technical-debt",
              title: "6.3 Technical Debt Management",
              level: 2,
              content: "Defect prediction scores combined with maintainability indices provide development teams with an actionable view of technical debt hotspots. Modules persistently flagged as high-risk across multiple releases signal candidates for refactoring. Tools such as SonarQube integrate complexity-based risk scoring to help teams quantify and manage accumulated technical debt."
            }
          ]
        },
        {
          id: "challenges",
          title: "7. Challenges and Limitations",
          level: 1,
          content: "",
          subsections: [
            {
              id: "data-quality",
              title: "Data Quality and Labeling",
              level: 2,
              content: "Defect labels are derived from version control history, which may under-report defects fixed informally or over-report minor changes as defect-fixes. Noisy labels degrade model performance."
            },
            {
              id: "class-imbalance-limitation",
              title: "Class Imbalance",
              level: 2,
              content: "Defective modules are a minority in most projects. Without appropriate handling, models default to predicting all modules as clean, achieving high accuracy but near-zero recall."
            },
            {
              id: "cross-project-generalization",
              title: "Cross-Project Generalization",
              level: 2,
              content: "Models trained on one project often fail to generalize to others due to differences in programming language, coding standards, and domain context."
            },
            {
              id: "interpretability",
              title: "Metric Interpretability vs. Model Accuracy Trade-off",
              level: 2,
              content: "The most accurate models (GBM, deep learning) are the least interpretable, hindering adoption in safety-critical development environments where explainability is required."
            },
            {
              id: "temporal-validity",
              title: "Temporal Validity",
              level: 2,
              content: "Software evolves; models trained on historical versions become stale as coding practices, architectures, and team compositions change. Continuous model retraining is necessary."
            }
          ]
        },
        {
          id: "future-research",
          title: "8. Future Research Directions",
          level: 1,
          content: "Several promising avenues are shaping the next generation of defect prediction research. Large Language Models (LLMs) such as CodeBERT, GraphCodeBERT, and StarCoder are being fine-tuned for defect localization directly from source code tokens, bypassing the need for manual metric extraction. Graph Neural Networks on code property graphs (combining control flow, data flow, and call graphs) capture inter-procedural complexity that scalar metrics miss. Federated learning approaches enable cross-organization model training without sharing proprietary source code, addressing the data scarcity problem. Additionally, human-in-the-loop and active learning frameworks can reduce annotation costs by strategically querying developers to label ambiguous predictions."
        },
        {
          id: "conclusion",
          title: "9. Conclusion",
          level: 1,
          content: "Automated defect prediction using machine learning on software complexity metrics represents a mature yet rapidly evolving research area with demonstrated industrial applicability. Ensemble methods—particularly Random Forest and Gradient Boosting—consistently achieve the best performance on benchmark datasets, while deep learning approaches show promise for large-scale code corpora. Careful attention to class imbalance, feature selection, and cross-project generalization is essential for building reliable production-grade systems. As software systems grow in size and consequence, integrating defect prediction into the development lifecycle is no longer an academic exercise but a practical imperative for engineering robust, high-quality software."
        }
      ],
      references: [
        {
          authors: "Basili, V. R., Briand, L. C., & Melo, W. L.",
          year: "1996",
          title: "A validation of object-oriented design metrics as quality indicators",
          journal: "IEEE Transactions on Software Engineering",
          volume: "22",
          issue: "10",
          pages: "751–761"
        },
        {
          authors: "McCabe, T. J.",
          year: "1976",
          title: "A complexity measure",
          journal: "IEEE Transactions on Software Engineering",
          volume: "SE-2",
          issue: "4",
          pages: "308–320"
        },
        {
          authors: "Halstead, M. H.",
          year: "1977",
          title: "Elements of Software Science",
          journal: "Elsevier North-Holland"
        },
        {
          authors: "Chidamber, S. R., & Kemerer, C. F.",
          year: "1994",
          title: "A metrics suite for object-oriented design",
          journal: "IEEE Transactions on Software Engineering",
          volume: "20",
          issue: "6",
          pages: "476–493"
        },
        {
          authors: "Lessmann, S., Baesens, B., Mues, C., & Pietsch, S.",
          year: "2008",
          title: "Benchmarking classification models for software defect prediction",
          journal: "IEEE Transactions on Software Engineering",
          volume: "34",
          issue: "4",
          pages: "485–496"
        },
        {
          authors: "Hall, T., Beecham, S., Bowes, D., Gray, D., & Counsell, S.",
          year: "2012",
          title: "A systematic literature review on fault prediction performance in software engineering",
          journal: "IEEE Transactions on Software Engineering",
          volume: "38",
          issue: "6",
          pages: "1276–1304"
        },
        {
          authors: "Breiman, L.",
          year: "2001",
          title: "Random forests",
          journal: "Machine Learning",
          volume: "45",
          issue: "1",
          pages: "5–32"
        },
        {
          authors: "Menzies, T., Greenwald, J., & Frank, A.",
          year: "2007",
          title: "Data mining static code attributes to learn defect predictors",
          journal: "IEEE Transactions on Software Engineering",
          volume: "33",
          issue: "1",
          pages: "2–13"
        },
        {
          authors: "Zimmermann, T., Nagappan, N., Gall, H., Giger, E., & Murphy, B.",
          year: "2009",
          title: "Cross-project defect prediction",
          journal: "Proceedings of ESEC/FSE 2009",
          pages: "91–100"
        },
        {
          authors: "Nagappan, N., Ball, T., & Zeller, A.",
          year: "2006",
          title: "Mining metrics to predict component failures",
          journal: "Proceedings of ICSE 2006",
          pages: "452–461"
        },
        {
          authors: "D'Ambros, M., Lanza, M., & Robbes, R.",
          year: "2012",
          title: "Evaluating defect prediction approaches: A benchmark and an extensive comparison",
          journal: "Empirical Software Engineering",
          volume: "17",
          issue: "4–5",
          pages: "531–577"
        },
        {
          authors: "Wang, S., & Yao, X.",
          year: "2013",
          title: "Using class imbalance learning for software defect prediction",
          journal: "IEEE Transactions on Reliability",
          volume: "62",
          issue: "2",
          pages: "434–443"
        },
        {
          authors: "Fu, W., Menzies, T., & Shen, X.",
          year: "2016",
          title: "Tuning for software analytics: Is it really necessary?",
          journal: "Information and Software Technology",
          volume: "76",
          pages: "135–146"
        },
        {
          authors: "Li, J., He, P., Zhu, J., & Lyu, M. R.",
          year: "2017",
          title: "Software defect prediction via convolutional neural network",
          journal: "Proceedings of QRS 2017",
          pages: "318–328"
        },
        {
          authors: "Ni, C., Xia, X., Lo, D., Chen, X., & Gu, Q.",
          year: "2022",
          title: "Just-in-time defect prediction on JavaScript projects: A replication study",
          journal: "Proceedings of MSR 2022",
          pages: "255–267"
        },
        {
          authors: "Feng, S., et al.",
          year: "2020",
          title: "CodeBERT: A pre-trained model for programming and natural languages",
          journal: "Proceedings of EMNLP Findings 2020",
          pages: "1536–1547"
        },
        {
          authors: "Chakraborty, S., Ray, B., & Chang, K. W.",
          year: "2022",
          title: "Deep learning based vulnerability detection: Are we there yet?",
          journal: "IEEE Transactions on Software Engineering",
          volume: "48",
          issue: "9",
          pages: "3280–3296"
        },
        {
          authors: "Kamei, Y., Shihab, E., Adams, B., Hassan, A. E., Mockus, A., Sinha, A., & Ubayashi, N.",
          year: "2013",
          title: "A large-scale empirical study of just-in-time quality assurance",
          journal: "IEEE Transactions on Software Engineering",
          volume: "39",
          issue: "6",
          pages: "757–773"
        },
        {
          authors: "Bowes, D., Hall, T., & Petrić, J.",
          year: "2018",
          title: "Software defect prediction: Do different classifiers find the same defects?",
          journal: "Software Quality Journal",
          volume: "26",
          issue: "2",
          pages: "555–590"
        },
        {
          authors: "Yatish, S., Jiarpakdee, J., Hasan, I., & Tantithamthavorn, C.",
          year: "2019",
          title: "Mining software defects: Should we consider affected releases?",
          journal: "Proceedings of ICSE 2019",
          pages: "654–665"
        },
        {
          authors: "Tantithamthavorn, C., McIntosh, S., Hassan, A. E., & Matsumoto, K.",
          year: "2016",
          title: "Automated parameter optimization of classification techniques for defect prediction models",
          journal: "Proceedings of ICSE 2016",
          pages: "321–332"
        },
        {
          authors: "Yan, M., Fang, Y., Lo, D., Xia, X., & Zhang, X.",
          year: "2020",
          title: "File-level defect prediction: Unsupervised vs. supervised models",
          journal: "Proceedings of EASE 2020",
          pages: "1–10"
        }
      ]
    }
  }
];

// Blog Posts Data - Easy to add new blog posts
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 Skills You Need to Stay Relevant in 2026",
    slug: "5-skills-relevant-2026",
    category: "Career Development / Future Skills",
    excerpt: "The workplace is changing faster than ever. AI, remote work, and digital transformation are rewriting the rules of success. Here are 5 essential skills you should invest in right now.",
    featured_image: "https://cdn.corenexis.com/files/c/5393832720.png",
    author: "Nexa Growth Team",
    status: "published",
    tags: ["career development", "future skills", "AI literacy", "emotional intelligence", "adaptability", "critical thinking", "personal branding"],
    read_time: "5 min read",
    focus_keyword: "Career Skills 2026",
    canonical_url: "/blog/5-skills-relevant-2026",
    scheduled_at: null,
    created_at: "2024-05-12T10:00:00Z",
    updated_at: "2024-05-12T10:00:00Z",
    content: `
The workplace is changing faster than ever. AI, remote work, and digital transformation are rewriting the rules of success.

But here's the truth: Degrees alone won't future-proof your career.
It's the right skills that will.

According to leading career trends, here are 5 skills you should invest in right now ⬇️

1️⃣ Adaptability – Technology changes, industries shift. The ones who thrive are those who adjust fast.
2️⃣ Emotional Intelligence (EQ) – The ability to lead with empathy and communicate effectively is becoming more valuable than ever.
3️⃣ AI & Tech Literacy – You don't need to be a programmer, but you need to understand how AI tools work in your field.
4️⃣ Critical Thinking – In a world full of data and noise, your ability to analyze and decide will set you apart.
5️⃣ Personal Branding – Opportunities now find you online. A strong LinkedIn presence is as important as your CV.

🌟 Remember: Hard skills get you hired. Soft skills keep you growing.

The future belongs to those who learn, unlearn, and relearn.
    `
  }
];

// Research Card Component
const ResearchCard = ({ paper, onClick }: { paper: ResearchPaper; onClick: () => void }) => {
  const date = new Date(paper.created_at);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="bg-card rounded-[14px] border border-border shadow-[0_2px_20px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.13)] cursor-pointer"
    >
      {/* Square Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={paper.featured_image} 
          alt={paper.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        
        {/* Date Badge */}
        <div className="absolute top-3 right-3 bg-[#e74c3c] text-white w-12 h-12 rounded-full flex flex-col items-center justify-center font-bold shadow-lg">
          <span className="text-sm leading-none">{day}</span>
          <span className="text-[10px] leading-none opacity-80">{month}</span>
        </div>

        {/* Category Pill */}
        <div className="absolute bottom-0 left-0 bg-primary text-white px-3.5 py-1 text-[11px] font-black uppercase tracking-widest">
          {paper.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-primary text-sm italic mb-1">
          {paper.excerpt.slice(0, 50) + '...'}
        </p>
        <h3 className="font-display font-bold text-[1.1rem] text-foreground leading-tight mb-3 hover:text-primary transition-colors">
          {paper.title}
        </h3>
        <p className="text-[13.5px] text-muted-foreground line-clamp-3 leading-relaxed mb-6">
          {paper.excerpt}
        </p>

        {/* Keywords */}
        <div className="flex flex-wrap gap-2 mb-6">
          {paper.tags.slice(0, 4).map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs rounded-full hover:bg-primary/20 transition-colors"
            >
              {tag}
            </span>
          ))}
          {paper.tags.length > 4 && (
            <span className="px-3 py-1 bg-muted/50 border border-muted/30 text-muted-foreground text-xs rounded-full">
              +{paper.tags.length - 4} more
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-4 text-[12px] text-muted-foreground font-medium">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {paper.read_time}
            </div>
            <div className="flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5" />
              0 comments
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="ghost"
              className="rounded-xl text-primary hover:bg-primary/10"
            >
              <Eye className="w-4 h-4 mr-1" />
              Read Research
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

// Blog Card Component
const BlogCard = ({ post, onClick }: { post: BlogPost; onClick: () => void }) => {
  const date = new Date(post.created_at);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      className="bg-card border border-border rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={post.featured_image} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Date Badge */}
        <div className="absolute top-3 right-3 bg-gradient-to-r from-primary to-primary/80 text-white w-12 h-12 rounded-full flex flex-col items-center justify-center font-bold shadow-lg">
          <span className="text-sm leading-none">{day}</span>
          <span className="text-[10px] leading-none opacity-80">{month}</span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm text-white px-3 py-1 text-[11px] font-black uppercase tracking-widest rounded-full">
          <TrendingUp className="w-3 h-3 inline mr-1" />
          Blog
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-primary text-xs font-semibold uppercase tracking-wider">
            {post.category}
          </span>
          <span className="text-muted-foreground">•</span>
          <span className="text-muted-foreground text-xs">
            {post.read_time}
          </span>
        </div>

        <h3 className="font-bold text-xl text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-xs rounded-full hover:bg-primary/20 transition-colors"
            >
              {tag}
            </span>
          ))}
          {post.tags.length > 3 && (
            <span className="px-3 py-1 bg-muted border border-border text-muted-foreground text-xs rounded-full">
              +{post.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.read_time}
            </div>
            <div className="flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5" />
              0 comments
            </div>
          </div>
          <Button
            size="sm"
            variant="ghost"
            className="rounded-xl text-primary hover:bg-primary/10"
          >
            Read Blog
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </motion.article>
  );
};

// Blog Modal Component
const BlogModal = ({ post, isOpen, onClose }: { post: BlogPost; isOpen: boolean; onClose: () => void }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-card border border-border rounded-2xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Scroll Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/60 z-10" />
          
          {/* Header */}
          <div className="relative p-6 border-b border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{post.title}</h2>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {post.category} • {post.read_time}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <button
                  onClick={onClose}
                  className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
            <div className="p-8">
              {/* Blog Image */}
              <div className="mb-8 rounded-xl overflow-hidden">
                <img 
                  src={post.featured_image} 
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Blog Meta */}
              <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                <span>By {post.author}</span>
                <span>•</span>
                <span>{new Date(post.created_at).toLocaleDateString()}</span>
                <span>•</span>
                <span>{post.read_time}</span>
              </div>

              {/* Blog Content */}
              <div className={`prose prose-lg max-w-none ${isDarkMode ? 'prose-invert' : ''}`}>
                {post.content.split('\n').map((paragraph, index) => {
                  if (paragraph.trim() === '') return <br key={index} />;
                  
                  // Check if paragraph contains numbered list items
                  if (paragraph.includes('1️⃣') || paragraph.includes('2️⃣') || paragraph.includes('3️⃣') || 
                      paragraph.includes('4️⃣') || paragraph.includes('5️⃣')) {
                    return (
                      <div key={index} className="mb-4">
                        <p className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {paragraph.split('–')[0]}–
                        </p>
                        <p className={`ml-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {paragraph.split('–')[1]}
                        </p>
                      </div>
                    );
                  }
                  
                  // Check for special highlighted paragraphs
                  if (paragraph.includes('🌟') || paragraph.includes('The future belongs')) {
                    return (
                      <p key={index} className={`mb-4 font-semibold ${paragraph.includes('🌟') ? 'text-yellow-400' : 'text-primary'} leading-relaxed`}>
                        {paragraph}
                      </p>
                    );
                  }
                  
                  return (
                    <p key={index} className={`mb-4 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Tags */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 text-xs rounded-full ${isDarkMode ? 'bg-primary/10 border border-primary/30 text-primary' : 'bg-blue-50 border border-blue-200 text-blue-600'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Content Renderer Component
const ContentRenderer = ({ section, isDarkMode }: { section: ResearchSection; isDarkMode: boolean }) => {
  const renderContent = (content: string | string[]) => {
    if (Array.isArray(content)) {
      return (
        <ol className={`list-decimal list-inside space-y-3 mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          {content.map((item, index) => (
            <li key={index} className="leading-relaxed">{item}</li>
          ))}
        </ol>
      );
    }
    return <p className={`mb-4 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{content}</p>;
  };

  const renderSection = (section: ResearchSection, depth: number = 0) => {
    const HeadingTag = `h${Math.min(2 + section.level, 4)}` as keyof JSX.IntrinsicElements;
    const headingClasses = {
      1: `text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
      2: `text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
      3: `text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`
    };

    return (
      <div key={section.id} className={depth > 0 ? 'ml-6' : ''}>
        <HeadingTag className={headingClasses[section.level as keyof typeof headingClasses]}>
          {section.title}
        </HeadingTag>
        {section.content && renderContent(section.content)}
        {section.subsections && section.subsections.map(subsection => renderSection(subsection, depth + 1))}
      </div>
    );
  };

  return renderSection(section);
};

// Research Modal Component
const ResearchModal = ({ paper, isOpen, onClose }: { paper: ResearchPaper; isOpen: boolean; onClose: () => void }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`fixed inset-0 z-50 backdrop-blur-xl ${isDarkMode ? 'bg-black/95' : 'bg-white/95'}`}
        onClick={onClose}
      >
        {/* Progress Bar */}
        <div className={`fixed top-0 left-0 right-0 h-1 z-50 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
          <div 
            className={`h-full transition-all duration-300 ${isDarkMode ? 'bg-gradient-to-r from-primary to-primary/80' : 'bg-gradient-to-r from-blue-500 to-blue-400'}`}
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Theme Toggle Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          onClick={toggleTheme}
          className={`fixed top-6 left-6 z-50 p-3 backdrop-blur-sm rounded-full border transition-all duration-300 ${isDarkMode ? 'bg-black/60 border-primary/20 hover:bg-primary/10 hover:border-primary/40' : 'bg-white/60 border-gray-300 hover:bg-gray-100 hover:border-gray-400'}`}
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-gray-700" />
          )}
        </motion.button>

        {/* Close Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={onClose}
          className={`fixed top-6 right-6 z-50 p-3 backdrop-blur-sm rounded-full border transition-all duration-300 ${isDarkMode ? 'bg-black/60 border-primary/20 hover:bg-primary/10 hover:border-primary/40' : 'bg-white/60 border-gray-300 hover:bg-gray-100 hover:border-gray-400'}`}
        >
          <X className={`w-6 h-6 ${isDarkMode ? 'text-primary' : 'text-gray-700'}`} />
        </motion.button>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.2 }}
          className="relative max-w-4xl mx-auto px-6 py-20 overflow-y-auto max-h-[100vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Hero Banner */}
          <div className="relative h-96 rounded-3xl overflow-hidden mb-12">
            <img 
              src={paper.featured_image} 
              alt={paper.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/40 rounded-full mb-4"
              >
                <Brain className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-semibold">{paper.category}</span>
              </motion.div>
              <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {paper.title}
              </h1>
              <div className={`flex items-center gap-6 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <span className="flex items-center gap-2">
                  <span className="text-primary">Author:</span> {paper.author}
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-primary">Date:</span> {new Date(paper.created_at).toLocaleDateString()}
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-primary">Read Time:</span> {paper.read_time}
                </span>
              </div>
            </div>
          </div>

          {/* Keywords */}
          <div className="flex flex-wrap gap-2 mb-8">
            {paper.tags.map((tag, idx) => (
              <span
                key={idx}
                className={`px-3 py-1 text-xs rounded-full ${isDarkMode ? 'bg-primary/10 border border-primary/30 text-primary' : 'bg-blue-50 border border-blue-200 text-blue-600'}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Research Content */}
          <article className={`prose prose-lg max-w-none ${isDarkMode ? 'prose-invert' : ''}`}>
            {/* Abstract */}
            {paper.content.abstract && (
              <section className="mb-12">
                <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Abstract</h2>
                <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {paper.content.abstract}
                </p>
              </section>
            )}

            {/* Sections */}
            {paper.content.sections.map((section) => (
              <section key={section.id} className="mb-12">
                <ContentRenderer section={section} isDarkMode={isDarkMode} />
              </section>
            ))}

            {/* References */}
            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>References</h2>
              <div className="space-y-3">
                {paper.content.references.map((ref, index) => (
                  <div key={index} className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className="font-semibold">[{index + 1}]</span> {ref.authors} ({ref.year}). {ref.title}. <em>{ref.journal}</em>
                    {ref.volume && <span>, {ref.volume}</span>}
                    {ref.issue && <span>({ref.issue})</span>}
                    {ref.pages && <span>, {ref.pages}</span>}
                    {ref.doi && (
                      <a 
                        href={ref.doi} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`ml-2 ${isDarkMode ? 'text-primary hover:text-primary/80' : 'text-blue-600 hover:text-blue-800'} underline`}
                      >
                        {ref.doi}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </article>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Main Blog Page Component
const BlogPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPaper, setSelectedPaper] = useState<ResearchPaper | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => { 
    window.scrollTo(0, 0); 
    document.title = "Research | Nexa Growth";
  }, []);

  const openModal = (paper: ResearchPaper) => {
    setSelectedPaper(paper);
    setSelectedPost(null);
    setIsModalOpen(true);
  };

  const openBlogModal = (post: BlogPost) => {
    setSelectedPost(post);
    setSelectedPaper(null);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedPaper(null);
      setSelectedPost(null);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-card border-b border-border">

        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary rounded-full blur-[160px]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-primary/10">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Research Papers
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-black mb-8 text-foreground tracking-tighter leading-[0.9] italic uppercase">
              Research <span className="text-primary">Studies</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium italic">
              Cutting-edge research in AI, software engineering, and adaptive learning systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Cards Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-[2px] bg-primary" />
              <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] font-display italic">Featured Research</h2>
            </div>
            
            {/* Research Papers Grid - Easy to extend */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {researchPapers.map((paper) => (
                <ResearchCard key={paper.id} paper={paper} onClick={() => openModal(paper)} />
              ))}


            </div>

          </motion.div>
        </div>
      </section>

      {/* Featured Blog Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-[2px] bg-primary" />
              <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] font-display italic">Featured Blog</h2>
            </div>
            
            {/* Blog Posts Grid - Easy to extend */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} onClick={() => openBlogModal(post)} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Modal */}
      {selectedPaper && (
        <ResearchModal 
          paper={selectedPaper} 
          isOpen={isModalOpen} 
          onClose={closeModal} 
        />
      )}

      {/* Blog Modal */}
      {selectedPost && (
        <BlogModal 
          post={selectedPost} 
          isOpen={isModalOpen} 
          onClose={closeModal} 
        />
      )}

      <Footer />
    </div>
  );
};

export default BlogPage;
