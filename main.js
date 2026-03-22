const DATA = {
  zh: {
    brand: "于天佑",
    name: "Tianyou Yu (于天佑)",
    subtitle: "本科生 · 2023级 · 大三在读 · 2027毕业",
    sidebar: [
      { k: "城市", v: "Beijing, China" },
      { k: "学校", v: "北京化工大学（BUCT）" },
      { k: "政治面貌", v: "中共党员" },
      { k: "邮箱", v: "2023040091@buct.edu.cn", link: "mailto:2023040091@buct.edu.cn" },
      { k: "ORCID", v: "0009-0001-2390-3603", link: "https://orcid.org/0009-0001-2390-3603" },
      { k: "GitHub", v: "Sky-Right", link: "https://github.com/Sky-Right" },
      { k: "联系方式", v: "13946343018" }
    ],
    nav: {
      edu: "教育经历",
      research: "科研经历",
      contests: "竞赛经历",
      work: "实践经历",
      skills: "个人技能",
      honors: "荣誉奖项",
      about: "自我评价"
    },
    sections: [
      {
        id: "edu",
        title: "教育经历",
        items: [
          {
            title: "北京化工大学（211）｜信息科学与技术学院｜人工智能",
            right: "2023 — 2027（预计）",
            badges: ["GPA 3.66", "排名 4/60", "CET-4 / CET-6"],
            bullets: [
              "主修课程：数据结构、离散数学、数字信号处理、机器学习、人工智能基础、模式识别基础、神经网络与深度学习、自然语言理解、图像理解与机器视觉等",
              "海外交流：Scientific Literacy Development Programme（Nanyang Technological University, Singapore），2025.07.19 — 2025.07.28，北京化工大学第九期“拓航计划”海外交流项目"
            ]
          }
        ]
      },
{
  id: "research",
  title: "科研经历",
  items: [
    {
      title: "Multi-order Filter Fusion and Triple Contrastive Learning for Attribute Graph Clustering",
      right: "IJCNN 2026（CCF-C,THCPL-B）· Accepted（共一第一）",
      badges: ["MT-AGC", "Graph Clustering", "Contrastive Learning", "Topology Augmentation"],
bullets: [
"项目简介：提出 MT-AGC（Multi-order Filtering Fusion 和 Triple Contrastive Learning）属性图聚类方法，针对现有深度对比图聚类过度依赖观测邻接矩阵、在拓扑稀疏或噪声场景下难以捕捉由属性诱导的全局语义结构的问题，构建“语义增强拓扑增广 + 自监督对比学习”的统一框架。其中通过 MFF（Multi-order Filtering Fusion）模块利用属性相似度构建全局语义图并与原始拓扑融合，在融合图上执行多阶低通滤波并通过自注意机制实现多尺度表示融合；同时设计 TCL（Triple Contrastive Learning）三重对比学习目标，从表征一致性、结构一致性与伪标签语义匹配三个层面联合优化，并通过 two-stage 高置信伪标签策略逐步引入聚类结构信息，提升模型在稀疏或噪声图结构下的表示能力与聚类性能。在 6 个公开基准数据集上的实验结果表明该方法取得稳定且显著的性能提升。",
"我的贡献：论文第一作者，负责整体方法设计与算法框架构建，完成核心模块 MFF 与 TCL 的代码实现，搭建实验体系并完成主要实验分析，同时负责论文主体撰写及主要图表绘制（通讯作者：郭继鹏）。",
"代码：[https://github.com/Sky-Right/MT-AGC]"
]

    },

{
  title: "CRIC-Net: Decision-Oriented Calibrated Forecasting for Sparse User-Level Demand in Resource-Constrained Service Systems",
  right: "Expert Systems with Applications（ESWA，中科院一区 Top）· Under Review（独立一作）",
  badges: ["CRIC-Net", "Decision-Oriented Forecasting", "Calibration", "Sparse User-level Demand", "SAA Planning"],
  bullets: [
    "项目简介：面向资源受限服务系统中稀疏用户级需求预测与风险敏感决策问题，构建“是否发生需求 + 首次事件时间窗”的联合概率预测框架，并提出 CRIC-Net（Calendar-aware Retrieval and Intent Calibration Network）。该方法突破仅关注总量预测的传统设定，将共享电助力车充电网络作为代表性应用场景，进一步抽象到更一般的服务系统资源分配与维护规划问题。模型通过 calendar-aligned periodic retrieval 检索与目标时段在日历语义上相似的历史片段，以引入长程行为规律；利用 multi-intent capsule decomposition 显式刻画用户行为中通勤惯例、临时意图等软混合机制及其切换；并设计 entropy-guided sample-dependent temperature scaling，根据意图混合不确定性进行样本级概率校准，抑制行为模糊样本上的过度自信预测。在真实充电数据上的实验表明，该方法不仅提升了预测区分性与概率可靠性，还在滚动 Sample Average Approximation（SAA）维护规划闭环中有效降低了容量短缺风险与归一化运维成本。",
    "我的贡献：独立第一作者，负责将问题从具体充电预测进一步抽象为资源受限服务系统中的决策导向型概率预测问题，完成整体方法设计与算法框架构建，实现 calendar-aware retrieval、multi-intent capsule 与 dynamic calibration 等核心模块，搭建预测评估与 SAA 闭环决策实验体系，完成主要实验分析、图表绘制及论文主体撰写工作（通讯作者：郭旦怀）。",
    "投稿状态：Under Review"
  ]
},


{
  title: "Dynamic Decision Optimization for Resource Allocation under Finite Resource Competition",
  right: "Working Paper · In Preparation（共一作者）",
  badges: ["Working Paper", "Resource Allocation", "Decision Optimization", "Game Theory"],
  bullets: [
    "项目简介：围绕有限资源竞争场景中的动态资源分配问题，构建融合时空供需平衡与博弈机制的决策模型。",
    "我的贡献：作为共一作者，负责主要建模与实验推进，完成多主体交互模拟、策略调整与均衡求解，并参与论文撰写。"
  ]
},

    {
      title: "融合多模态自适应感知与行为分析的充电网络智能监测与推荐系统｜大学生创新训练项目",
      right: "第一负责人",
      badges: ["产学合作", "Signal Modeling", "Game Theory", "Charging Network"],
bullets: [
"项目简介：面向共享充电网络运行监测与推荐决策问题，与驴充充物联网有限公司开展产学合作研究，利用真实复杂充电数据探索“多模态信号感知 + 用户行为建模 + 供需博弈分析”的综合建模框架。在信号建模层面，探索突破传统 VMD 等固定信号分解方法的充电信号表征策略，以提升对复杂噪声与非平稳信号的建模能力；在机制建模层面，构建用户—充电桩供需双层博弈模型刻画充电资源匹配与策略演化过程，并在北四环区域数据上完成初步实验验证，为共享充电网络的监测与推荐策略优化提供数据驱动与机制结合的分析框架。",
"我的贡献：项目第一负责人，负责需求分析与研究方案设计，完成核心算法实现与实验流程搭建，开展模型验证与结果分析，同时负责企业合作对接及论文撰写。"
]

    },

    {
      title: "磁驱探微：利用先进仿生磁膜技术实现电磁驱动的微型机器人｜大学生创新训练项目",
      right: "核心成员",
      badges: ["Microrobot", "Biomimetic", "Magnetic Membrane", "COMSOL"],
bullets: [
"项目简介：基于仿生磁膜技术设计电磁驱动微型机器人，通过径向磁化磁膜结构实现磁致变形驱动与可控运动。项目构建了机器人实体结构并完成电磁驱动实验验证，同时建立 COMSOL 多物理场耦合仿真模型（电磁—结构耦合）用于分析磁致变形特性、力学响应及运动机理，并对仿生运动模式进行验证。实验结果与仿真结果具有较高一致性，验证了磁致驱动机制与机器人运动方案的可行性。",
"我的贡献：参与机器人结构方案设计，完成 COMSOL 多物理场仿真模型搭建与参数分析，参与实验测试流程设计与结果整理，并协助完成阶段性技术报告。"
]

    }
  ]
},
{
  id: "contests",
  title: "竞赛经历",
  contests: [
    {
      title: "美国大学生数学建模竞赛（MCM/ICM, COMAP）",
      award: "F奖（Finalist / 特等奖提名，前 1.7%）",
      time: "2025.01.24 — 2025.01.28",
bullets: [
  "赛道：MCM（COMAP）· Problem B｜Managing Sustainable Tourism（为阿拉斯加 Juneau 构建可持续旅游管理模型，平衡游客规模、财政收益、社区承载与生态环境）。",
  "项目简介：以 Juneau 邮轮旅游带来的“财政收益提升 vs. 拥挤与环境退化（如门登霍尔冰川退缩、碳排与基础设施压力）”矛盾为背景，基于官方预算/温室气体排放/冰川监测等高可信数据完成清洗与可视化，提出“Juneau 4P Equation（Policy–Profit–Planet–People）”综合建模框架。针对 Problem 1 构建多目标优化模型（融合系统动力学 + 博弈论），以环境可持续指数（ESI）、旅游收入与拥挤密度为核心目标，并设置 ESI 下限、游客容量与政府投资比例等约束；进一步设计“财政盈余→环保与公共设施再投资→反馈改善承载力”的闭环机制，迭代仿真至收敛并给出可操作的政策与资金分配建议；通过敏感性分析验证模型鲁棒性。针对 Problem 2 通过地区参数校准将模型迁移到其他过度旅游目的地，并在生态敏感区域提高生态脆弱性权重，采用迭代优化求解纳什均衡，输出可推广的策略建议与一页备忘录。",
  "我的贡献：担任建模与论文主笔，负责问题抽象与指标体系设计（ESI/拥挤/收入）、系统动力学—博弈—多目标优化联合框架推导与求解流程设计；参与数据清洗、参数边界设定与关键实验/敏感性分析；主导英文论文写作结构（Abstract→Methods→Results→Discussion）与图表可视化排版，形成面向 Juneau 旅游委员会的一页政策备忘录。"
]

    },

    {
      title: "中国大学生工程实践与创新能力大赛",
      award: "国家级二等奖",
      time: "2024.11 — 2025.08",
      bullets: [
        "赛道：\"智能+\" 赛道｜生活垃圾智能分类 赛项（自动判别与分类投放；强调系统集成与工程实现）。",
        "项目简介：自主设计并制作单投入口智能垃圾分类装置，实现对多类城市生活垃圾的自动识别、分类投放与状态显示；包含传感/视觉识别、执行机构（分拣/压缩）、控制系统与显示交互等模块，并在现场任务流程中完成分类与展示要求。",
        "我的贡献：我主要负责的就是完整视觉部分的搭建，自主设计整套视觉识别方案（数据处理、模型选择与训练流程）；负责模型训练与调参、轻量化与部署封装（面向边缘ai计算运行）；联调识别—控制链路，提升现场任务的稳定性与实时性，并输出可复用的部署脚本与测试用例，并且将我的经验写成了完整的实现文档，开源给本校的学弟学妹们学习。"
      ]
    },

{
  title: "全国大学生嵌入式芯片与系统设计竞赛（龙芯赛道）",
  award: "国家级三等奖",
  time: "2025.05 — 2025.08",
  bullets: [
    "选题方向：智能车辅助驾驶。基于龙芯 2K0300 久久派开发板，围绕阿克曼转向小车完成自主导航、车道保持、自动泊车等任务，要求融合视觉与激光雷达感知，并在指定赛道中实现稳定无人驾驶。其实就是指定龙芯开发板的智能车竞赛，在第一年这个比赛之后，智能车竞赛也有了类似的龙芯赛题。",
    "项目简介：搭建基于 ROS 的车载控制系统，完成 PC 端通过 WiFi 接入 ROS 网络实现车体行进与转向控制；在视觉导航区利用摄像头完成车道识别、车道保持与车库检测，在围挡区域结合激光雷达实现定位、路径规划与自主导航，最终完成侧方停车与倒车入库等任务。",
    "个人贡献：作为我校首次参与龙芯赛道、首次选择该题方向的团队成员，在缺乏经验传承的情况下主导完成视觉方案落地；负责传统视觉算法设计与优化，包括赛道特征提取、车道线识别、抗干扰处理与停车位检测；深入调试循迹控制、转向控制及泊车策略，完成关键参数整定、工程部署与现场联调，提升系统在龙芯平台上的实时性、稳定性与任务完成度。"
  ]
},


{
  title: "“西门子杯”中国智能制造挑战赛（信息化网络化赛项）",
  award: "省部级一等奖（华北赛区第2名）",
  time: "2025.03 — 2025.07",
  bullets: [
    "赛道：信息化网络化赛项。以真实工业现场为背景，在 80 分钟限时内根据任务书给出的工业网络需求，自主设计网络拓扑并完成现场设备配置与系统调试，重点考察工业网络架构设计、通信配置与系统可靠性等工程能力。",
    "项目简介：围绕工业生产系统的信息化与网络化需求，设计工业以太网拓扑结构并完成 SCALANCE 工业交换机（如 X408、X208）与 PLC 等设备的网络配置；通过 VLAN 划分、环网冗余、路由及访问控制策略实现设备互联与稳定通信，并完成系统连通性验证与网络故障排查。",
    "个人贡献：负责工业网络拓扑设计与主干环网规划，在限时环境下完成交换机与 PLC 的网络配置与调试，包括 VLAN、端口映射、通信链路与安全策略配置；组织现场联调与故障定位（链路、路由、策略冲突排查），确保系统在竞赛时间内稳定运行。团队最终取得 92/100 成绩，位列华北赛区第 2，全国初赛成绩排名前列。"
  ]
},



    {
      title: "中国大学生计算机设计大赛",
      award: "省部级二等奖",
      time: "2025.04 — 2025.05",
      bullets: [
        "赛道：软件应用与开发 类（面向实际场景的软件系统设计、实现与应用价值展示）。",
        "项目简介：开发“课标精算系统”（基于 FineReport 的管理信息系统应用），面向教学管理场景提供课程指标/达成度的统计计算与可视化展示，支持数据汇总、报表输出与管理决策辅助。",
        "我的贡献：负责核心数据库设计与实现（表结构、约束、索引与查询优化）；设计并落地鉴权机制（登录态、权限边界、接口访问控制）；对接 FineReport 数据源与业务口径，保证指标计算一致性与结果可追溯。"
      ]
    },

{
  title: "全国大学生电子设计竞赛（电赛）",
  award: "省部级二等奖",
  time: "2025.07.30 — 2025.08.02",
  bullets: [
    "赛道/题目：2025 年本科组 C 题｜基于单目视觉的目标物测量装置。在 4 天 3 夜的限时竞赛环境下完成系统设计、算法开发与整机调试，要求实现目标距离 D 与图形尺寸 x 的实时测量与显示，并保证测量精度与系统稳定性。",
    "项目简介：构建基于 MaixCam 的单目视觉测量系统，通过相机标定与几何建模实现目标物距离与尺寸估计，并完成实时图像处理与结果显示；系统需要在嵌入式平台上稳定运行，对算法实时性、测量误差控制以及光照变化鲁棒性提出较高要求。",
    "个人贡献：负责全部视觉系统与算法设计与实现，包括相机标定流程、目标检测与特征提取、单目测距与尺寸估计算法等核心模块开发；在竞赛前两天完成主要视觉功能并与电控系统联调。针对 MaixCam 平台上 OpenCV 性能瓶颈进行调试与优化，解决嵌入式环境下图像处理效率问题，保证系统实时运行并完成全部基础测量功能。"
  ]
}
  ]
},

{
  id: "work",
  title: "实践经历",
  items: [
    {
      title: "学工办学工数据中心｜信息系统运维 / 协助开发校内学工系统",
      right: "2023.09 — 至今",
      badges: ["Data Ops", "System Development", "Testing", "Deployment"],
      bullets: [
        "面向学工业务数据与流程，负责对接学工数据库与数据口径整理（抽取/清洗/对齐），整理可复用的数据统计与查询结果，支持业务分析与系统功能迭代。",
        "协助校内学工系统工程化建设与运维：参与需求梳理、接口联调、功能开发与测试验收，推动版本发布与线上问题定位；参与第二课堂、勤工助学、军训等系统建设，目前这些系统仍在校内稳定使用。"
      ]
    }
  ]
},


{
  id: "skills",
  title: "个人技能",
  items: [
    {
      title: "科研技能",
      bullets: [
        "熟练使用 LaTeX 进行学术论文与技术文档排版，能够独立完成论文模板配置、公式排版、参考文献管理与图表排版。",
        "具备科研代码复现能力，能够使用 PyTorch、MATLAB 等工具进行论文算法复现、实验环境搭建与模型调试。",
        "具备基础的机器学习与计算机视觉实验经验，能够进行数据处理、实验设计与结果分析。"
      ]
    },
    {
      title: "开发技能",
      bullets: [
        "掌握 Python、C/C++、Java、JavaScript 等编程语言，具备良好的编程基础与工程实现能力。",
        "具备 Web 全栈开发经验，能够独立完成前后端系统设计与开发。",
        "熟练使用 Vue3 等前端框架进行现代 Web 应用开发，能够完成组件化开发、状态管理与接口联调。",
        "熟悉 Flask、Fastapi 等后端框架，可进行全栈开发。",
        "具备嵌入式与系统开发基础，能够在 Linux 环境下进行程序开发、调试与部署。",
        "熟练使用 Git 进行版本管理，掌握分支管理、代码合并、Pull Request 与冲突解决等团队协作流程。",
        "熟悉 GitHub 基本协作模式，能够进行开源项目管理、Issue 追踪与代码协作开发。"
      ]
    },
    {
      title: "办公技能",
      bullets: [
        "熟练使用 Zotero 进行文献检索、管理与阅读，能够构建规范的学术文献库并与 LaTeX 协同完成论文写作。",
        "熟练使用 Microsoft Office（Word / Excel / PowerPoint）进行技术报告撰写、数据整理与项目汇报。",
        "能够使用 Excel 进行数据统计分析、表格建模与图表制作。",
        "熟练使用 Inkscape 等矢量绘图工具绘制论文插图、算法流程图与系统架构图。",
        "能够使用 Visio / draw.io 绘制工程系统图、网络拓扑图与技术架构图。"
      ]
    }
  ]
},
      {
        id: "honors",
        title: "荣誉奖项",
        items: [
          { title: "优秀团员 · 国家励志奖学金 · 三好学生 · 优秀学生干部", bullets: [] }
        ]
      },
      {
        id: "about",
        title: "自我评价",
items: [
  {
    title: "关于科研",
    bullets: [
      "从大一下学期开始进入课题组参与科研训练，逐渐形成了比较稳定的科研节奏：坚持参加组会与讨论，定期汇报阶段性进展，也习惯把研究过程中的思路、实验结果和问题整理清楚再与老师交流。",
      "本科阶段参与过较完整的科研与项目过程，对科研工作的基本流程和节奏有一定理解。面对新的研究方向时，通常会先系统阅读相关论文与资料，再逐步搭建实验环境与基础代码，尽量在较短时间内形成可运行的实验框架。",
      "我希望未来能够直博继续从事科研工作，长期投入到人工智能方向的研究中。除了纯 AI 方法研究之外，我也对 AI4Science 非常感兴趣，希望能够在导师指导下探索 AI 在生物、化学、材料或环境等领域中的应用问题。"
    ]
  },
  {
    title: "关于能力",
    bullets: [
      "学习和迁移能力较强。面对新的研究任务时，通常会先理解问题需求，尽快搭建一个能够跑通的最小实验流程，再在此基础上逐步完善实验设计和模型方法。",
      "具有一定的科研工程能力，熟悉 PyTorch 等深度学习框架，能够完成论文复现、实验环境搭建以及基础模型调试，并在此基础上进行实验改进与结果分析。",
      "比较重视团队协作与沟通。在团队合作中习惯把复杂问题拆解为可讨论的小模块，及时同步进度与问题；也会通过文档、表格或图示整理信息，使交流更加清晰高效。",
      "对于跨学科研究保持开放态度，如果研究方向涉及具体领域问题（如生物、材料或环境数据），我也愿意花时间系统学习相关背景知识，逐步理解领域问题并结合 AI 方法进行研究。"
    ]
  },
  {
    title: "关于性格",
    bullets: [
      "性格相对外向，沟通意愿比较强。在团队中会主动与老师和同学对齐目标和进展，遇到分歧时也会尽量基于实验结果和事实进行讨论。",
      "做事情比较自律，也有一定的抗压能力。面对科研中的困难或实验失败，通常会先复盘原因并尝试新的思路，而不是轻易放弃。",
      "我比较享受长期专注做一件事情的过程，也愿意沉下心来持续推进研究。如果有机会读博，希望能够在导师的指导下扎实做研究，并为课题组的工作贡献自己的力量。"
    ]
  }
]



      }
    ],
ui: { langBtn: "中文 / EN", pdfBtn: "下载PDF", clickHint: "点击查看详情" }
  },

  en: {
  brand: "Tianyou Yu · CV",
  name: "Tianyou Yu (于天佑)",
  subtitle: "Undergraduate · Class of 2023 · Junior · Expected 2027",
  sidebar: [
    { k: "Location", v: "Beijing, China" },
    { k: "University", v: "Beijing University of Chemical Technology (BUCT)" },
    { k: "Political Status", v: "CPC Member" },
    { k: "Email", v: "2023040091@buct.edu.cn", link: "mailto:2023040091@buct.edu.cn" },
    { k: "ORCID", v: "0009-0001-2390-3603", link: "https://orcid.org/0009-0001-2390-3603" },
    { k: "GitHub", v: "Sky-Right", link: "https://github.com/Sky-Right" },
    { k: "Contact", v: "13946343018" }
  ],
  nav: {
    edu: "Education",
    research: "Research",
    contests: "Contests",
    work: "Experience",
    skills: "Skills",
    honors: "Honors",
    about: "Self-Assessment"
  },
  sections: [
    {
      id: "edu",
      title: "Education",
      items: [
        {
          title: "Beijing University of Chemical Technology (Project 211) · School of Information Science & Technology · Artificial Intelligence",
          right: "2023 — 2027 (Expected)",
          badges: ["GPA 3.66", "Rank 4/60", "CET-4 / CET-6"],
          bullets: [
            "Key courses: Data Structures, Discrete Mathematics, Digital Signal Processing, Machine Learning, Fundamentals of AI, Pattern Recognition, Neural Networks & Deep Learning, Natural Language Understanding, Image Understanding & Computer Vision, etc.",
            "Overseas program: Scientific Literacy Development Programme (Nanyang Technological University, Singapore), 2025.07.19 — 2025.07.28; BUCT “Tuohang Program” (9th cohort)"
          ]
        }
      ]
    },
    {
      id: "research",
      title: "Research",
      items: [
        {
          title: "Multi-order Filter Fusion and Triple Contrastive Learning for Attribute Graph Clustering",
          right: "IJCNN 2026 (CCF-C) · Accepted (Co-first First Author)",
          badges: ["MT-AGC", "Graph Clustering", "Contrastive Learning", "Topology Augmentation"],
          bullets: [
            "Project Summary: Proposed MT-AGC (Multi-order Filtering Fusion + Triple Contrastive Learning) for attribute graph clustering to address the over-reliance on observed adjacency matrices in existing deep contrastive graph clustering methods, which often fail to capture attribute-induced global semantic structures under sparse or noisy topology. The framework follows a unified pipeline of “semantically enhanced topology augmentation + self-supervised contrastive learning”: MFF constructs a global semantic graph via attribute similarity, fuses it with the original topology, performs multi-order low-pass filtering on the fused graph, and adaptively fuses multi-scale representations with self-attention; TCL jointly optimizes triple contrastive objectives (representation consistency, structural consistency, and pseudo-label guided semantic matching) and introduces a two-stage high-confidence pseudo-label strategy to progressively inject cluster structure, improving representation quality and clustering robustness. Experiments on 6 public benchmarks show stable and significant improvements.",
            "My Contribution: First author; designed the overall method and framework, implemented the core MFF/TCL modules, built the experimental pipeline and conducted major experiments/analysis, and led the main writing and figure plotting (Corresponding author: Jipeng Guo).",
            "Code: https://anonymous.4open.science/status/MT-AGC-CEC2"
          ]
        },
        {
          title: "CRIC-Net: Calendar-Aware Retrieval and Intent Calibration for E-bike Charging Forecasting",
          right: "Expert Systems with Applications (ESWA, CAS Q1 Top) · Preparing Submission (Sole First Author)",
          badges: ["CRIC-Net", "Probabilistic Forecasting", "Calibration", "Retrieval", "SAA Planning"],
          bullets: [
            "Project Summary: For day-ahead maintenance planning in shared e-bike charging networks, predicting only total demand is insufficient to capture temporal concentration and tail risk. This project formulates joint distribution forecasting of “whether charging occurs next day” and “time of the first charging event”, and proposes CRIC-Net (Calendar-Aware Retrieval and Intent Calibration Network). CRIC-Net performs calendar-aligned retrieval to fetch similar historical days under the target day’s calendar context to introduce long-range routine evidence; applies a multi-intent capsule mechanism to softly decompose competing behavioral regimes (e.g., routine commuting vs. opportunistic top-ups); and uses entropy-driven temperature scaling to conduct sample-dependent calibration based on intent-mixture entropy, suppressing overconfidence on ambiguous samples while keeping predictions sharp on regular patterns. Experiments on real industrial data show significant gains in both discrimination and calibration, and closed-loop evaluation with Sample Average Approximation (SAA) demonstrates measurable operational benefits by reducing shortage risk and maintenance cost under a fixed budget.",
            "My Contribution: Sole first author; responsible for problem formulation, method design and implementation, experimental evaluation and closed-loop SAA planning validation, and manuscript writing (Corresponding author: Danhuai Guo).",
            "Status: Under Review"
          ]
        },
        {
          title: "Intelligent Monitoring and Recommendation for Charging Networks via Multimodal Adaptive Sensing and Behavioral Analysis | Undergraduate Innovation & Entrepreneurship Training Program",
          right: "Project Lead (PI)",
          badges: ["Industry Collaboration", "Signal Modeling", "Game Theory", "Charging Network"],
          bullets: [
            "Project Summary: Targeting operational monitoring and recommendation decisions in shared charging networks, this industry–academia project (with Lvchongchong IoT Co., Ltd.) leverages real-world complex charging-signal data to explore an integrated modeling framework of “multimodal signal sensing + user behavior modeling + supply–demand game analysis”. On the signal side, we investigate charging-signal representation methods beyond conventional fixed decompositions (e.g., VMD) to better characterize heavy noise and non-stationary patterns; on the mechanism side, we build a two-level supply–demand game between users and chargers to analyze matching dynamics and strategy evolution. Preliminary experiments and validation have been conducted on data from the North 4th Ring Road area, supporting future optimization of monitoring and recommendation strategies with both data-driven and mechanism-based insights.",
            "My Contribution: Project lead; drove requirement analysis and overall research plan, implemented core algorithms and the experimental workflow, conducted validation and result analysis, handled industry collaboration communication, and drafted the initial paper/manuscript."
          ]
        },
        {
          title: "Magnetically Driven Microrobot: Electromagnetic Actuation Enabled by Advanced Biomimetic Magnetic Membranes | Undergraduate Innovation & Entrepreneurship Training Program",
          right: "Core Member",
          badges: ["Microrobot", "Biomimetics", "Magnetic Membrane", "COMSOL"],
          bullets: [
            "Project Summary: Designed an electromagnetically actuated microrobot based on biomimetic magnetic-membrane technology, enabling controllable locomotion via magneto-induced deformation in a radially magnetized membrane structure. The project fabricated the physical prototype and performed electromagnetic actuation tests, and built a coupled COMSOL multiphysics simulation (electromagnetics–structural coupling) to analyze deformation characteristics, mechanical response, and locomotion mechanisms, verifying consistency with biomimetic motion patterns. Experimental observations align well with simulation results, demonstrating the feasibility of the proposed actuation mechanism and microrobot design.",
            "My Contribution: Contributed to structural design, built the COMSOL multiphysics model and performed parametric analysis, participated in experimental testing and result organization, and assisted in delivering milestone reports and documentation."
          ]
        }
      ]
    },
    {
      id: "contests",
      title: "Contests",
      contests: [
        {
          title: "Mathematical Contest in Modeling / Interdisciplinary Contest in Modeling (MCM/ICM, COMAP)",
          award: "Finalist (Top 1.7%)",
          time: "2025.01.24 — 2025.01.28",
          bullets: [
            "Track: MCM Track (Problem B; a discrete optimization problem).",
            "Project Summary: Worked on an open-ended real-world problem released by the organizers, completing an end-to-end modeling pipeline from problem abstraction → assumptions and metrics → model building → algorithm implementation → sensitivity/robustness analysis → interpretable conclusions and recommendations, and submitted a full English paper with figures, comparisons, and conclusions.",
            "My Contribution: Served as the modeling and writing lead; designed the main solution strategy and derivations, supported key experiments and comparative analyses (e.g., sensitivity and scenario studies), and led the paper structure (Abstract→Methods→Results→Discussion) and figure/table visualization to ensure clarity and reproducibility."
          ]
        },
        {
          title: "China Undergraduate Engineering Practice and Innovation Competition",
          award: "National Second Prize",
          time: "2024.11 — 2025.08",
          bullets: [
            "Track: “Intelligent+” · Smart Waste Sorting (automatic identification and classified disposal; focused on system integration and engineering implementation).",
            "Project Summary: Designed and built a single-inlet smart waste-sorting device that automatically recognizes multiple categories of municipal waste, performs classified disposal, and provides status display/interaction; the system typically includes sensing/vision recognition, actuators (sorting/compression), control logic, and UI, and was evaluated through on-site task workflows.",
            "My Contribution: Designed the end-to-end vision recognition pipeline (data processing, model selection, and training workflow); handled training/tuning, lightweighting and packaging for edge/embedded deployment; integrated recognition-to-control linkage to improve stability and real-time performance; delivered reusable deployment scripts and test cases, and wrote a complete implementation guide that was open-sourced for junior students."
          ]
        },
        {
          title: "National Undergraduate Embedded System and Chip Design Competition (Loongson Track)",
          award: "National Third Prize",
          time: "2025.05 — 2025.08",
          bullets: [
            "Track: Loongson Track · Smart Car (embedded system design and algorithm implementation on a designated platform/processor; emphasized hardware–software co-design and stable on-site operation).",
            "Project Summary: Built and deployed an end-to-end smart-car system on the Loongson platform for typical tasks such as track recognition, lane following control, and parking/garage maneuvers, integrating perception/sensing, control strategies, and engineering deployment; performance was evaluated by speed, stability, and task completion on site.",
            "My Contribution: As the first team in our university to choose the Loongson track and this topic without prior references, we pioneered the solution from scratch: built and optimized a classical vision pipeline (feature extraction, localization, and anti-interference processing), refined lane-following and parking strategies and controller tuning, and completed deployment and on-site debugging (bottleneck diagnosis, stability hardening, and automated configuration) to ensure reliable operation on Loongson 99 Pi and related platforms."
          ]
        },
        {
          title: "Siemens Cup China Intelligent Manufacturing Challenge (Informatization & Networking Track)",
          award: "Provincial First Prize (North China #2)",
          time: "2025.03 — 2025.07",
          bullets: [
            "Track: Informatization & Networking (comprehensive assessment of industrial network architecture, communications, and security configuration).",
            "Project Summary: Designed an industrial networking solution for on-site informatization needs, including network topology and system planning, device interconnection with redundancy/reliability design, and security/access-control configurations; emphasized correctness, deployability, stability, and security.",
            "My Contribution: Designed the industrial network topology and built the backbone ring network; configured firewall policies (e.g., S615), security-zone segmentation, wireless, VLANs and port mappings; organized joint debugging and fault localization (links, routing, ACL/policy conflicts) to improve availability and robustness. Achieved 92/100 and ranked #2 in North China; did not advance to finals due to a rule constraint (the #1 team was also from our university, scoring 94)."
          ]
        },
        {
          title: "China Undergraduate Computer Design Competition",
          award: "Provincial Second Prize",
          time: "2025.04 — 2025.05",
          bullets: [
            "Track: Software Application & Development (software system design and implementation with practical value and demonstrable impact).",
            "Project Summary: Developed a “Curriculum Standards Analytics System” (a FineReport-based management information system) for teaching management scenarios, providing statistical calculation and visualization of course indicators/attainment, supporting data aggregation, report generation, and decision support.",
            "My Contribution: Designed and implemented the core database (schema, constraints, indexes, and query optimization); built the authentication and authorization mechanisms (sessions, permission boundaries, and API access control); integrated FineReport data sources and business definitions to ensure consistent, traceable indicator computations."
          ]
        },
        {
          title: "National Undergraduate Electronics Design Contest (NUEDC)",
          award: "Provincial Second Prize",
          time: "2025.07.30 — 2025.08.02",
          bullets: [
            "Track/Problem: 2025 Undergraduate Group · Problem C | Monocular-vision-based target measurement device (measuring distance D and size x).",
            "Project Summary: Designed and built a monocular vision measurement system to estimate target distance and geometric size with real-time display and controlled error. Key components include camera calibration, geometric modeling/pose estimation, real-time measurement, and engineering robustness (FPS, illumination robustness, anti-shake, and edge-case handling).",
            "My Contribution: Completed the core algorithm development in the first two days (within a 4-day, 3-night sprint) and collaborated with the electrical/control team for integration; led the full AI/vision pipeline design and implementation (calibration, distance and size estimation), implemented most modules for monocular ranging with error analysis and correction, and performed on-site tuning, robustness improvements, and system integration to ensure stable real-time output."
          ]
        }
      ]
    },


    {
  id: "work",
  title: "Experience",
  items: [
    {
      title: "Student Affairs Data Center, BUCT · Information Systems Operations / Development Support",
      right: "2023.09 — Present",
      badges: ["Data Ops", "System Development", "Testing", "Deployment"],
      bullets: [
        "Worked with student-affairs databases and data definitions (extraction/cleaning/alignment), producing reusable queries and statistics to support analysis and feature iteration.",
        "Supported the engineering lifecycle of campus student-affairs systems: requirements clarification, API integration, feature development, testing/acceptance, releases, and online issue triage; contributed to modules such as Second Classroom, Work-Study, and Military Training systems, which remain in active use."
      ]
    }
  ]
},

    {
      id: "skills",
      title: "Skills",
      items: [
        {
          title: "Research",
          bullets: ["LaTeX typesetting; able to reproduce papers and build experimental codebases using PyTorch and MATLAB."]
        },
        {
          title: "Engineering",
          bullets: ["Proficient in Python/Java/C/C++/JavaScript; full-stack web development and engineering practice. Experienced with Vue3 for frontend and Flask/SpringBoot for backend development. Familiar with Git workflows (branching/merging, PRs, conflict resolution) for collaborative version control; comfortable with GitHub collaboration."]
        },
        {
          title: "Productivity",
          bullets: [
            "Proficient with Zotero for literature management and reading; able to write and typeset papers and technical documents with LaTeX. Skilled in Microsoft Office (Word/Excel/PowerPoint) for data organization, report writing, and presentations; capable of building well-structured tables, charts, and polished slides. Experienced with Inkscape for vector illustrations (paper figures, flowcharts, architecture diagrams) and also familiar with Visio/draw.io for engineering and system design diagrams."
          ]
        }
      ]
    },
    {
      id: "honors",
      title: "Honors",
      items: [
        { title: "Outstanding League Member · National Encouragement Scholarship · Merit Student · Outstanding Student Leader", bullets: [] }
      ]
    },
    {
      id: "about",
      title: "Self-Assessment",
      items: [
        {
          title: "Research",
          bullets: [
            "Joined a research group since the second semester of freshman year and maintained a steady rhythm: weekly group meetings/discussions with periodic progress reporting, holding myself to the standard of “build it and explain it clearly”. I have end-to-end research experience and can ramp up quickly in new areas, and I also iterate fast on new ideas.",
            "Able to sustain careful, detail-oriented work and invest time in scientific writing quality: clearly articulating motivation, experimental settings, and the boundaries of conclusions so others can reproduce and trust the results."
          ]
        },
        {
          title: "Capabilities",
          bullets: [
            "Fast learner with strong transfer ability: start from task requirements, quickly build a minimal runnable loop, and iteratively improve to a deliverable version.",
            "Strong project execution; very familiar with PyTorch environments and able to quickly reproduce and improve research code.",
            "Strong collaboration and communication: break complex problems into discussable modules, proactively synchronize risks and progress, respond quickly to teammates’ needs, and use docs/tables/visuals to communicate clearly. I enjoy teamwork."
          ]
        },
        {
          title: "Personality",
          bullets: [
            "Outgoing and friendly with strong willingness to communicate (ENFJ): proactively align on goals and drive progress; when disagreements arise, I prefer discussing with facts and experimental evidence rather than intuition.",
            "Self-motivated and resilient under pressure: when facing deadlines or stacked tasks, I tend to plan and push steadily; after setbacks, I reflect and adjust quickly instead of getting stuck in emotions.",
            "Care about team culture and contribute actively: happy to share experience and materials to help newcomers ramp up, and also open to feedback and continuous improvement."
          ]
        }
      ]
    }
  ],
ui: { langBtn: "中文 / EN", pdfBtn: "Download PDF", clickHint: "Click to view details" }
}

};

let lang = "zh";

function el(tag, cls, text){
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text !== undefined) n.textContent = text;
  return n;
}

function iconSVG(name){
  const common = `width="16" height="16" viewBox="0 0 24 24" fill="none"
    xmlns="http://www.w3.org/2000/svg" class="meta-ico" aria-hidden="true"`;

  const icons = {
    location: `<svg ${common}><path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" stroke="currentColor" stroke-width="1.6"/><path d="M12 13.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z" stroke="currentColor" stroke-width="1.6"/></svg>`,
    school: `<svg ${common}><path d="M12 3 2.5 8 12 13l9.5-5L12 3Z" stroke="currentColor" stroke-width="1.6"/><path d="M5 10.5V16c0 1.7 3.1 3 7 3s7-1.3 7-3v-5.5" stroke="currentColor" stroke-width="1.6"/><path d="M21.5 8v7" stroke="currentColor" stroke-width="1.6"/></svg>`,
    email: `<svg ${common}><path d="M4 6.5h16v11H4v-11Z" stroke="currentColor" stroke-width="1.6"/><path d="m4 7 8 6 8-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    orcid: `<svg ${common}><path d="M7.5 7.5h2V18h-2V7.5Z" fill="currentColor"/><path d="M13 7.6h3.2c2.2 0 3.8 1.4 3.8 3.7v2.9c0 2.3-1.6 3.8-3.8 3.8H13V7.6Zm2 1.8V16h1.1c1.2 0 1.9-.7 1.9-2v-2.7c0-1.2-.7-1.9-1.9-1.9H15Z" fill="currentColor"/><path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z" stroke="currentColor" stroke-width="1.2" opacity=".35"/></svg>`,
    github: `<svg ${common}><path d="M12 2.5A9.5 9.5 0 0 0 9 21.6c.5.1.7-.2.7-.5v-1.8c-2.9.7-3.5-1.2-3.5-1.2-.5-1.3-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .8.1-.7.3-1.1.6-1.4-2.3-.3-4.7-1.2-4.7-5.2 0-1.1.4-2 1-2.8-.1-.3-.4-1.4.1-2.8 0 0 .8-.3 2.8 1.1a9.7 9.7 0 0 1 5.1 0c2-1.4 2.8-1.1 2.8-1.1.5 1.4.2 2.5.1 2.8.6.8 1 1.7 1 2.8 0 4-2.4 4.9-4.7 5.2.4.3.7 1 .7 2v3c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z" fill="currentColor"/></svg>`,
    phone: `<svg ${common}><path d="M8 3.8h8c1 0 1.8.8 1.8 1.8v12.8c0 1-.8 1.8-1.8 1.8H8c-1 0-1.8-.8-1.8-1.8V5.6c0-1 .8-1.8 1.8-1.8Z" stroke="currentColor" stroke-width="1.6"/><path d="M10 17.5h4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
    link: `<svg ${common}><path d="M10 13a4 4 0 0 1 0-6l1.3-1.3a4 4 0 0 1 5.7 5.7L16 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M14 11a4 4 0 0 1 0 6L12.7 18.3A4 4 0 0 1 7 12.6L8 11" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
    party: `<svg ${common}>
  <path d="M7 7.5h10c1.1 0 2 .9 2 2V18c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V9.5c0-1.1.9-2 2-2Z"
        stroke="currentColor" stroke-width="1.6"/>
  <path d="M8 6.2 12 3.8l4 2.4" stroke="currentColor" stroke-width="1.6"
        stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 10.2l.8 1.7 1.8.2-1.3 1.2.4 1.8-1.7-.9-1.7.9.4-1.8-1.3-1.2 1.8-.2.8-1.7Z"
        fill="currentColor"/>
</svg>`,

  };

  return icons[name] || icons.link;
}

function pickIconByKey(k){
  const key = String(k).toLowerCase();
  if (key.includes("城市") || key.includes("location")) return "location";
  if (key.includes("学校") || key.includes("university")) return "school";
  if (key.includes("政治") || key.includes("political")) return "party";
  if (key.includes("邮箱") || key.includes("email")) return "email";
  if (key.includes("orcid")) return "orcid";
  if (key.includes("github")) return "github";
  if (key.includes("联系") || key.includes("contact") || key.includes("电话") || key.includes("phone")) return "phone";
  return "link";
}

function renderSidebar(d){
  document.getElementById("sideName").textContent = d.name;
  document.getElementById("sideSubtitle").textContent = d.subtitle;
  document.getElementById("brandName").textContent = d.brand;

  const tagEl = document.getElementById("sideTag");
  const tagText = d.tag || "";
  tagEl.textContent = tagText;
  tagEl.style.display = tagText ? "inline-flex" : "none";

  // nav labels
  document.getElementById("navEdu").textContent = d.nav.edu;
  document.getElementById("navResearch").textContent = d.nav.research;
  document.getElementById("navContests").textContent = d.nav.contests;
  document.getElementById("navWork").textContent = d.nav.work;
  document.getElementById("navSkills").textContent = d.nav.skills;
  document.getElementById("navHonors").textContent = d.nav.honors;
  document.getElementById("navAbout").textContent = d.nav.about;

  document.getElementById("langBtn").textContent = d.ui.langBtn;
  document.getElementById("pdfBtn").textContent = d.ui.pdfBtn;

  const ul = document.getElementById("sideMeta");
  ul.innerHTML = "";

  d.sidebar.forEach(row=>{
    const li = document.createElement("li");
    li.className = "meta-row";

    // icon
    const icoWrap = document.createElement("span");
    icoWrap.className = "meta-ico-wrap";
    icoWrap.innerHTML = iconSVG(pickIconByKey(row.k));
    li.appendChild(icoWrap);

    // text
    const textWrap = document.createElement("div");
    textWrap.className = "meta-text";

    const k = el("span", "meta-k", row.k);
    textWrap.appendChild(k);

    const vWrap = document.createElement("div");
    vWrap.className = "meta-v";

    if (row.link){
      const a = document.createElement("a");
      a.href = row.link;
      a.target = row.link.startsWith("http") ? "_blank" : "_self";
      a.rel = row.link.startsWith("http") ? "noreferrer" : "";
      a.textContent = row.v;
      vWrap.appendChild(a);
    } else {
      vWrap.appendChild(el("span", null, row.v));
    }

    textWrap.appendChild(vWrap);
    li.appendChild(textWrap);

    ul.appendChild(li);
  });
}


function renderSections(d){
  const root = document.getElementById("contentRoot");
  root.innerHTML = "";

  d.sections.forEach(sec=>{
    const section = el("section", "section");
    section.id = sec.id;

    const h2 = el("h2", "section-title");
h2.textContent = sec.title;

if (sec.contests) {
  const hint = el("span", "section-hint", d.ui?.clickHint || "Click to view details");
  h2.appendChild(hint);
}

section.appendChild(h2);


    // contests: use details
    if (sec.contests){
  sec.contests.forEach(c=>{
    const details = document.createElement("details");
    details.className = "contest-details";

    const summary = document.createElement("summary");

    const title = el("span", "summary-title", `${c.title} · ${c.award}`);
    const right = el("span", "summary-right", c.time);

    summary.appendChild(title);
    summary.appendChild(right);
    details.appendChild(summary);

    const body = document.createElement("div");
    body.className = "details-body";

    const ul = el("ul", "bullets");
    (c.bullets || []).forEach(b=> ul.appendChild(el("li", null, b)));

    body.appendChild(ul);
    details.appendChild(body);

    section.appendChild(details);
  });

  root.appendChild(section);
  return;
}


    // normal items
    (sec.items || []).forEach(it=>{
      const item = el("div", "item");

      const head = el("div", "item-title");
      head.appendChild(el("strong", null, it.title));

      if (it.right){
        head.appendChild(el("span", "right", it.right));
      }
      item.appendChild(head);

      if (it.badges && it.badges.length){
        const kv = el("div", "kv");
        it.badges.forEach(b=> kv.appendChild(el("span", "badge", b)));
        item.appendChild(kv);
      }

      if (it.bullets && it.bullets.length){
        const ul = el("ul", "bullets");
        it.bullets.forEach(b=> ul.appendChild(el("li", null, b)));
        item.appendChild(ul);
      }

      section.appendChild(item);
    });

    root.appendChild(section);
  });
}

function setLang(next){
  lang = next;
  const d = DATA[lang];
  renderSidebar(d);
  renderSections(d);
  setupContestAccordion();
  setupScrollEffects();
}


// click language
document.getElementById("langBtn").addEventListener("click", ()=>{
  setLang(lang === "zh" ? "en" : "zh");
});

// ensure anchor jump offsets feel nice
document.querySelectorAll(".navlink").forEach(a=>{
  a.addEventListener("click", (e)=>{
    const href = a.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    const id = href.slice(1);
    const target = document.getElementById(id);
    if (target){
      e.preventDefault();
      target.scrollIntoView({ behavior:"smooth", block:"start" });
      history.replaceState(null, "", href);
    }
  });
});

// init
setLang("zh");

function setupContestAccordion() {
  const detailsList = document.querySelectorAll(".contest-details");

  detailsList.forEach((details) => {
    const summary = details.querySelector("summary");
    const body = details.querySelector(".details-body");

    if (!summary || !body) return;

    // 初始化
    if (details.open) {
      body.style.height = body.scrollHeight + "px";
    } else {
      body.style.height = "0px";
    }

    summary.addEventListener("click", (e) => {
      e.preventDefault();

      const isOpen = details.open;

      if (isOpen) {
        // 收起
        body.style.height = body.scrollHeight + "px";
        requestAnimationFrame(() => {
          body.style.height = "0px";
        });

        details.classList.remove("is-open");

        const onEnd = (evt) => {
          if (evt.propertyName !== "height") return;
          details.open = false;
          body.removeEventListener("transitionend", onEnd);
        };
        body.addEventListener("transitionend", onEnd);
      } else {
        // 展开
        details.open = true;
        details.classList.add("is-open");

        body.style.height = "0px";
        requestAnimationFrame(() => {
          body.style.height = body.scrollHeight + "px";
        });

        const onEnd = (evt) => {
          if (evt.propertyName !== "height") return;
          body.style.height = "auto";
          body.removeEventListener("transitionend", onEnd);
        };
        body.addEventListener("transitionend", onEnd);
      }
    });
  });
}

/* nav active + reveal animation */
function setupScrollEffects() {
  const sections = [...document.querySelectorAll(".section")];
  const navlinks = [...document.querySelectorAll(".navlink")];

  sections.forEach(sec => sec.classList.add("reveal"));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  }, {
    threshold: 0.12
  });

  sections.forEach(sec => revealObserver.observe(sec));

  const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navlinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    });
  }, {
    rootMargin: "-25% 0px -60% 0px",
    threshold: 0.01
  });

  sections.forEach(sec => activeObserver.observe(sec));
}
(function setupAppleBackgroundMotion(){
  const root = document.documentElement;

  function updatePos(x, y){
    root.style.setProperty("--mx", `${x}%`);
    root.style.setProperty("--my", `${y}%`);
  }

  updatePos(18, 22);

  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    updatePos(x.toFixed(2), y.toFixed(2));
  }, { passive: true });

  window.addEventListener("deviceorientation", (e) => {
    const gamma = Math.max(-20, Math.min(20, e.gamma || 0));
    const beta = Math.max(-20, Math.min(20, e.beta || 0));
    const x = 50 + gamma * 1.2;
    const y = 35 + beta * 0.8;
    updatePos(x.toFixed(2), y.toFixed(2));
  }, { passive: true });
})();

setLang("zh");
