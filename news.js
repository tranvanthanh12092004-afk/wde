// News data - Esports Tournament News
const newsData = [
  {
    id: 1,
    date: "December 27, 2025",
    title: "PGL Major Copenhagen 2026: Lịch trình chính thức",
    excerpt:
      "PGL Major Copenhagen 2026 chính thức công bố lịch thi đấu từ 15-25/3/2026 tại Royal Arena, Denmark. 24 đội tuyển hàng đầu thế giới sẽ tranh tài với tổng giải thưởng 1.25 triệu USD. Vòng Challengers bắt đầu 15/3, Legends Stage 19/3, và Champions Stage diễn ra 23-25/3.",
    image: "assets/images/Screenshot_1-72.png",
    category: "tournament",
  },
  {
    id: 2,
    date: "December 23, 2025",
    title: "Team Vitality vô địch IEM Katowice 2025",
    excerpt:
      "Team Vitality đã xuất sắc đánh bại FaZe Clan với tỷ số 3-1 trong trận chung kết IEM Katowice 2025. ZywOo tỏa sáng với rating 1.42, được bầu chọn là MVP của giải đấu. Đây là chức vô địch IEM thứ 3 trong sự nghiệp của Vitality.",
    image: "assets/images/1696-thumb.jpg",
    category: "tournament",
  },
  {
    id: 3,
    date: "December 20, 2025",
    title: "BLAST Premier World Final: FaZe và G2 vào tứ kết",
    excerpt:
      "BLAST Premier World Final 2025 bước vào giai đoạn knockout với FaZe Clan và G2 Esports giành vé vào tứ kết. NiKo ghi 112 kills trong 3 map, phá kỷ lục giải đấu. Bán kết sẽ diễn ra vào 28/12 tại Singapore.",
    image:
      "assets/images/475790557_1170702204420913_3386564230829079001_n.jpg",
    category: "tournament",
  },
  {
    id: 4,
    date: "December 18, 2025",
    title: "ESL Pro League Season 21: NAVI thống trị bảng A",
    excerpt:
      "Natus Vincere (NAVI) hoàn thành vòng bảng ESL Pro League Season 21 với thành tích toàn thắng 5-0. s1mple trở lại phong độ đỉnh cao với KD ratio 1.58. NAVI sẽ đối đầu với Cloud9 ở vòng playoff.",
    image:
      "assets/images/68fcb09430147d5d84abae0502028aa50b6d931faf9fc00b31abb82781.jpg",
    category: "tournament",
  },
  {
    id: 5,
    date: "December 15, 2025",
    title: "Liquid giành vé đến Copenhagen Major qua RMR Americas",
    excerpt:
      "Team Liquid chính thức giành vé đến PGL Major Copenhagen sau chiến thắng tại RMR Americas. Đội hình với TwistzZ và NAF đã thắng 3-0 trước FURIA trong trận chung kết. Complexity và paiN Gaming cũng giành được slot Challengers.",
    image: "assets/images/20250421_Enos-Ku_IEM-Melbourne_02270-scaled.jpg",
    category: "tournament",
  },
  {
    id: 6,
    date: "December 12, 2025",
    title: "Heroic công bố đội hình mới cho Major 2026",
    excerpt:
      "Heroic chính thức công bố đội hình mới với sự gia nhập của frozen từ MOUZ và NertZ từ OG. Đội tuyển Denmark này đặt mục tiêu top 4 tại PGL Major Copenhagen 2026 trên sân nhà. TeSeS sẽ tiếp tục là IGL của đội.",
    image: "assets/images/image_processing20250110-1-r6meeq.jpg",
    category: "tournament",
  },
  {
    id: 7,
    date: "December 10, 2025",
    title: "HLTV công bố Top 20 cầu thủ xuất sắc nhất 2025",
    excerpt:
      "HLTV bắt đầu công bố danh sách Top 20 cầu thủ xuất sắc nhất năm 2025. ZywOo (Vitality), NiKo (G2) và s1mple (NAVI) được dự đoán sẽ cạnh tranh vị trí số 1. Top 3 sẽ được công bố vào 31/12/2025.",
    image:
      "assets/images/605738281_1415846483239816_2249124724215381300_n.jpg",
    category: "tournament",
  },
  {
    id: 8,
    date: "December 8, 2025",
    title: "FaZe Clan ký hợp đồng với tân binh jcobbb",
    excerpt:
      "FaZe Clan chính thức công bố ký hợp đồng với jcobbb, tài năng trẻ 18 tuổi từ Polish. Jcobbb sẽ thay thế Twistzz trong đội hình. Đây là lần đầu tiên FaZe chiêu mộ cầu thủ trẻ từ Tier 2 với mức phí chuyển nhượng cao kỷ lục.",
    image: "assets/images/hq720.jpg",
    category: "tournament",
  },
  {
    id: 9,
    date: "December 5, 2025",
    title: "ENCE giành vé đến Major qua RMR Europe",
    excerpt:
      "ENCE Esports xuất sắc vượt qua RMR Europe và giành vé trực tiếp đến Legends Stage của PGL Major Copenhagen. Đội tuyển Finland đánh bại Monte 2-1 trong trận quyết định với màn trình diễn ấn tượng của dycha.",
    image: "assets/images/ence.jpg",
    category: "tournament",
  },
  {
    id: 10,
    date: "November 25, 2025",
    title: "MOUZ vs Astralis: Trận derby Đức-Đan Mạch",
    excerpt:
      "Trận đấu kinh điển giữa MOUZ và Astralis thu hút hơn 500,000 người xem trực tiếp. MOUZ giành chiến thắng 2-1 với overtime kịch tính trên Inferno. Frozen ghi 34 kills trên map cuối cùng để mang về chiến thắng.",
    image: "assets/images/hq720 (1).jpg",
    category: "tournament",
  },
];

// Current filter
let displayedNews = 3;

// Welcome alert on page load
window.addEventListener("load", () => {
  if (!sessionStorage.getItem("cs2NewsVisited")) {
    setTimeout(() => {
      alert(
        "🎮 Chào mừng đến với CS2 Tin Tức! Cập nhật thông tin mới nhất về Counter-Strike 2."
      );
      sessionStorage.setItem("cs2NewsVisited", "true");
    }, 500);
  }

  // Load initial news
  loadNews();
});

// Mobile navigation
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close menu when clicking links
  const navLinks = navMenu.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
}

// Tab switching
const tabButtons = document.querySelectorAll(".tab-btn");
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active from all tabs
    tabButtons.forEach((btn) => btn.classList.remove("active"));

    // Add active to clicked tab
    button.classList.add("active");

    // Reset displayed news count
    displayedNews = 3;

    // Reload news with animation
    const newsList = document.getElementById("newsList");
    newsList.style.opacity = "0";
    setTimeout(() => {
      loadNews();
      newsList.style.opacity = "1";
    }, 300);
  });
});

// Load news function
function loadNews() {
  const newsList = document.getElementById("newsList");
  if (!newsList) return;

  newsList.innerHTML = "";

  // Get news to show (show all news)
  const newsToShow = newsData.slice(0, displayedNews);

  if (newsToShow.length === 0) {
    newsList.innerHTML =
      '<p style="text-align: center; padding: 40px; color: #666;">Không có tin tức nào.</p>';
    return;
  }

  newsToShow.forEach((news, index) => {
    const newsItem = createNewsItem(news);
    newsItem.style.animationDelay = `${index * 0.1}s`;
    newsList.appendChild(newsItem);
  });

  // Update load more button
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if (loadMoreBtn) {
    if (displayedNews >= newsData.length) {
      loadMoreBtn.style.display = "none";
    } else {
      loadMoreBtn.style.display = "inline-block";
    }
  }
}

// Create news item element
function createNewsItem(news) {
  const article = document.createElement("article");
  article.className = "news-item";
  article.setAttribute("data-id", news.id);
  article.setAttribute("data-category", news.category);

  // Add category badge
  const categoryBadge =
    '<span style="display: inline-block; padding: 4px 12px; background: #ff6f3c; color: white; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">ESPORTS</span>';

  article.innerHTML = `
        <div class="news-image">
            <img src="${news.image}" alt="${news.title}">
        </div>
        <div class="news-info">
            ${categoryBadge}
            <div class="news-date">${news.date}</div>
            <h2 class="news-title">${news.title}</h2>
            <p class="news-excerpt">${news.excerpt}</p>
            <a href="#" class="news-link">Tìm hiểu thêm</a>
        </div>
    `;

  // Add click handler
  article.addEventListener("click", (e) => {
    e.preventDefault();
    handleNewsClick(news);
  });

  return article;
}

// Handle news click
function handleNewsClick(news) {
  alert(
    `🏆 TIN TỨC ESPORTS: "${news.title}"\n\n${news.excerpt}\n\nTrong phiên bản demo này, các bài viết được mô phỏng. Bài viết chi tiết sẽ được hiển thị ở đây.`
  );
  console.log("Opening news:", news);
}

// Load more button
const loadMoreBtn = document.getElementById("loadMoreBtn");
if (loadMoreBtn) {
  loadMoreBtn.addEventListener("click", () => {
    displayedNews += 3;

    // Update button text
    loadMoreBtn.textContent = "ĐANG TẢI...";

    // Simulate loading
    setTimeout(() => {
      loadNews();
      loadMoreBtn.textContent = "XEM THÊM";

      // Scroll to new content
      const newsList = document.getElementById("newsList");
      const newsItems = newsList.querySelectorAll(".news-item");
      if (newsItems.length > 0) {
        const lastItem = newsItems[newsItems.length - 1];
        lastItem.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 500);
  });
}

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    navbar.style.background = "rgba(13, 13, 13, 0.98)";
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.5)";
  } else {
    navbar.style.background = "rgba(13, 13, 13, 0.95)";
    navbar.style.boxShadow = "none";
  }

  lastScroll = currentScroll;
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  // Press 'Escape' to close mobile menu
  if (e.key === "Escape" && navMenu.classList.contains("active")) {
    navToggle.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

// Console message
console.log(
  "%c🎮 Counter-Strike 2",
  "font-size: 20px; font-weight: bold; color: #ff6f3c;"
);
console.log("%cWelcome to CS2 News Portal", "font-size: 14px; color: #b8b8b8;");

// Performance monitoring
window.addEventListener("load", () => {
  const loadTime = performance.now();
  console.log(`⚡ Page loaded in ${loadTime.toFixed(2)}ms`);
});

