export interface Work {
    title: string
    employer: string
    dateRange: string
    bullets: string[]
    website?: string
}

export const WORK_LIST: Work[] = [
    {
        title: "Backend Developer",
        employer: "LabMotus Health & Performance Clinic",
        dateRange: "Jan - Apr 2021",
        bullets: [
            "Developed a React application that generates physiological assessments from videos using 3D pose estimation; worked in an Agile team of 7 students as part of a software engineering course",
            "Integrated AWS microservices (S3, Lambda, DynamoDB) for receiving video uploads, interfacing with pose estimation API, and storing user profiles and assessments",
            "Set up CI/CD pipeline for automated testing, building, and deployment to development and production environments, allowing development team to efficiently perform updates and find bugs"
        ]
    },
    {
        title: "Full-Stack Developer",
        employer: "MoneyPod.ca",
        dateRange: "2019 – 2020",
        bullets: [
            "Developed a personal finance planning application for Android and iOS devices, made using AngularJS and NativeScript",
            "Developed a server backend with a relational database and a RESTful API, providing a convenient user experience while maintaining anonymity of personal data",
            "Communicated with the employer to determine product specifications and give updates on development progress, resulting in an efficient workflow"
        ],
        website: "https://moneypod.ca"
    },
    {
        title: "Camp Director",
        employer: "Richmond Hill Pentecostal Church",
        dateRange: "2017 – 2018",
        bullets: [
            "Organized a summer kids camp in a team of 7 directors; prepared curriculum and decorations, resulting in a successful and enjoyable camp",
            "Supervised volunteers and children during camp activities, ensuring safety of participants and that volunteers understood and performed their job effectively"
        ]
    }
]