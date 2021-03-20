export interface Work {
    title: string
    employer: string
    dateRange: string
    bullets: string[]
    website?: string
}

export const WORK_LIST: Work[] = [
    {
        title: "Full-Stack Developer",
        employer: "MoneyPod.ca",
        dateRange: "2019 – 2020",
        bullets: [
            "Designed and developed a personal finance planning application for Android and iOS devices (written in HTML and TypeScript using AngularJS and NativeScript)",
            "Designed and developed a server backend with a database and an API to expose the database to the client (MySQL database, API written in JavaScript using Node.js and Express, authenticates using JSON Web Tokens)",
            "Communicated with the employer to determine product specifications and give updates on development progress"
        ],
        website: "https://moneypod.ca"
    },
    {
        title: "Director, Vacation Bible School",
        employer: "Richmond Hill Pentecostal Church",
        dateRange: "2017 – 2018",
        bullets: [
            "Involved in directing summer kids camp; prepared curriculum and decorations, resulting in a successful and enjoyable camp",
            "Prepared and executed activities, ensuring that lessons were understood and enjoyed by participants",
            "Supervised volunteers and children during camp activities, ensuring safety of participants and that volunteers understood and performed their job effectively"
        ]
    }
]