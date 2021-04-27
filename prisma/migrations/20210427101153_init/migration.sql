-- CreateTable
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "date" TEXT NOT NULL
);

-- InsertValues
INSERT INTO Post ("title", "excerpt", "body", "image", "date")
VALUES (
    "How Companies use Machine Learning",
    "Machine learning is headed for a major growth spurt. After ticking past the $1billion mark in...",
    "Machine learning is headed for a major growth spurt. After ticking past the $1 billion mark in 2016, the machine learning market is expected to hit $40 billion by 2025, according to a new report by Research and Markets. Learn how to integrate Amazon Machine Learning with applications - Learn how to train a model using Amazon Machine Learning - Learn how to process semi-structured log data in real-time with Amazon Machine Learning Machine learning has been used to provide more accurate predictions than hardcoded business logic using available data. Machines can't learn everything about a business or its customers. But companies like Apple, Spotify and Alibaba are pushing that boundary back further and further. Now, with machine learning making disruptive innovation easier than ever before expect to see new startups disrupting the existing market leaders.",
    "/images/machine-learning.jpg",
    "March 31st 2021"
  ),
  (
    "GitHub introduces dark mode and auto-merge pull request",
    "GitHub today announced a bunch of new features at its virtual GitHub Universe conference...",
    "GitHub today announced a bunch of new features at its virtual GitHub Universe conference including dark mode, auto-merge pull requests, and Enterprise Server 3.0. In the past couple of years, almost all major apps have rolled out a dark theme for its users, so why not GitHub?",
    "/images/code-desk.jpg",
    "March 25th 2021"
  ),
  (
    "What’s multi-cloud? And why should developers care?",
    "Most developers don’t care about multi-cloud. But they should. Whether developers know...",
    "Most developers don’t care about multi-cloud. But they should. Whether developers know it or not, their companies likely already have a multi-cloud environment.    Multi-cloud is a strategy where a business selects different services from different cloud providers.",
    "/images/office.jpg",
    "March 22nd 2021"
  ),
  (
    "Here is how to make your website more accessible",
    "An accessible website is one that’s optimized for all people, including those with disabilities...",
    "There are many things to consider when setting up a website, and accessibility is one factor that can sometimes be overlooked. An accessible website is one that’s optimized for all people, including those with impaired vision or hearing, motor difficulties, or learning disabilities.",
    "/images/computer-desk.jpg",
    "March 17th 2021"
  ),
  (
    "Why open ecosystems are the future of app development",
    "When app stores entered the mainstream tech culture, they exposed developers to an audience of millions...",
    "We can’t get enough of our mobile apps. There were 204 billion apps downloads last year, and that number is rising in 2020.  When app stores entered the mainstream tech culture, they exposed developers to an audience of millions who were keen to adopt the innovative capabilities",
    "/images/node-network.jpg",
    "March 12th 2021"
  ),
  (
    "Dependabot's private dependencies",
    "Dependabot’s mission is to keep all of your dependencies free of vulnerabilities and up-to-date...",
    "Dependabot’s mission is to keep all of your dependencies free of vulnerabilities and up-to-date, but until now, it hasn’t been able to update all of your private dependencies. That meant that internal libraries, shared design systems, and other non-public packages were out of Dependabot’s reach and more likely to become outdated and insecure over time. With this release, you can give Dependabot version updates access to private package registries (including GitHub Packages, Artifactory, Azure Artifacts, and others) and private GitHub repositories. Dependabot can now keep your private and innersource dependencies as up-to-date as your public dependencies.",
    "/images/white-robot.jpg",
    "March 8th 2021"
  );

-- Down
-- DROP TABLE Posts;