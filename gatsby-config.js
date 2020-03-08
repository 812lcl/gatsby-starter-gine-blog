module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/812lcl/4f6de92d88cd469fbb6e64bc82aca0a8?v=4c19ae92f1914115989f9acdf254d398"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/812lcl/28fee6d15047449bb3a9d4a5379bc65e?v=291d2d8e68f544309a64edf9ee30c60d"
            }
        }
    ],
}
