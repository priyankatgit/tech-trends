const CONST_CATEGORY = {
  PROGRAMMING: 31,
  BANKING:37,
  WEBDESIGN_AND_DEVELOPMENT:422,
  COMPUTER_AND_ELECTRONICS:5,
  SOFTWARE:32,
}

let pastDate = new Date();
pastDate.setFullYear(pastDate.getFullYear() - 10);
pastDate = `${pastDate.getFullYear()}-${1}-${1}`;

let today = new Date();
today = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

let range = `${pastDate} ${today}`;

function renderTrend(keywords, options ) {
  let { collectBy, geo, category, property } = options || {};
  collectBy = collectBy || "TIMESERIES";
  geo = geo || "";
  property = property || "";
  category = category || 0;

  const comparisonItem = keywords.map((keyword) => {
    return {
      keyword,
      geo,
      time: range,
    };
  });

  trends.embed.renderExploreWidget(
    collectBy,
    {
      comparisonItem,
      category,
      property,
    },
    {
      exploreQuery: `cat=${category}&gprop=${property}&date=${range}&geo=${geo}&q=${keywords.join(
        ","
      )}`,
      guestPath: "https://trends.google.com:443/trends/embed/",
    }
  );
}
