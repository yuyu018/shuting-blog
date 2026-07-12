/* 模擬文章資料 — 供首頁、所有文章、分類頁共用 */

export interface MockArticle {
  title: string;
  excerpt: string;
  category: string;
  categorySlug: 'investment' | 'fitness' | 'literature';
  readTime: string;
  date: string;
}

export const articles: MockArticle[] = [
  /* ── 投資策略 ── */
  {
    title: '長期主義的複利哲學：從巴菲特看人生投資觀',
    excerpt: '真正的投資不僅是資金流動，更是時間、專注與耐心的深度交換。',
    category: '投資策略', categorySlug: 'investment', readTime: '8 分鐘', date: '2026・5月',
  },
  {
    title: '護城河思維：如何辨識一家值得持有十年的公司',
    excerpt: '品牌、網絡效應、轉換成本——拆解巴菲特最看重的競爭優勢框架。',
    category: '投資策略', categorySlug: 'investment', readTime: '12 分鐘', date: '2026・4月',
  },
  {
    title: '市場恐慌時，我如何靠「投資檢查清單」保持冷靜',
    excerpt: '恐懼是投資最大的敵人。一份寫在暴跌之前的清單，勝過暴跌當下的所有判斷。',
    category: '投資策略', categorySlug: 'investment', readTime: '7 分鐘', date: '2026・3月',
  },
  {
    title: '指數化投資與主動選股：一場不必二選一的辯論',
    excerpt: '核心加衛星的配置思路，讓被動的穩健與主動的樂趣得以共存。',
    category: '投資策略', categorySlug: 'investment', readTime: '10 分鐘', date: '2026・2月',
  },
  {
    title: '從財報三表讀出一家公司的性格',
    excerpt: '數字不會說謊，但需要人來翻譯。損益表是面子，現金流量表才是裡子。',
    category: '投資策略', categorySlug: 'investment', readTime: '15 分鐘', date: '2026・1月',
  },

  /* ── 科學健身 ── */
  {
    title: '漸進超負荷原理：讓每一滴汗水都成為蛻變的養分',
    excerpt: '身體是一座精密的建築，科學訓練是最忠實的設計師。',
    category: '科學健身', categorySlug: 'fitness', readTime: '6 分鐘', date: '2026・4月',
  },
  {
    title: '肌肥大的三個機制：機械張力、代謝壓力與肌肉損傷',
    excerpt: '搞懂肌肉生長的底層邏輯，你就不會再被任何流行課表迷惑。',
    category: '科學健身', categorySlug: 'fitness', readTime: '11 分鐘', date: '2026・3月',
  },
  {
    title: '睡眠是最被低估的補劑：訓練者的恢復科學',
    excerpt: '你在健身房撕裂肌肉，卻在深度睡眠中重建它。恢復不是偷懶，是訓練的一部分。',
    category: '科學健身', categorySlug: 'fitness', readTime: '9 分鐘', date: '2026・2月',
  },
  {
    title: '為什麼你該學會硬舉：從姿勢到人生的力量傳遞',
    excerpt: '髖鉸鏈是人體最強的動作模式，也是最誠實的一面鏡子。',
    category: '科學健身', categorySlug: 'fitness', readTime: '8 分鐘', date: '2026・1月',
  },
  {
    title: '蛋白質攝取的迷思與真相：你可能不需要那麼多',
    excerpt: '把研究文獻攤開來看，每公斤體重 1.6 克之後，多的只是昂貴的尿。',
    category: '科學健身', categorySlug: 'fitness', readTime: '7 分鐘', date: '2025・12月',
  },

  /* ── 知識文學 ── */
  {
    title: '在卡爾維諾的迷宮裡，尋找自己的閱讀地圖',
    excerpt: '文學不是逃避現實的出口，而是理解現實的稜鏡。',
    category: '知識文學', categorySlug: 'literature', readTime: '10 分鐘', date: '2026・3月',
  },
  {
    title: '重讀《紅樓夢》：三十歲之後才懂的繁華與蒼涼',
    excerpt: '年少時讀的是寶黛愛情，中年後讀的是「好一似食盡鳥投林」的人世結構。',
    category: '知識文學', categorySlug: 'literature', readTime: '14 分鐘', date: '2026・2月',
  },
  {
    title: '筆記的藝術：從讀過到記得，從記得到成為',
    excerpt: '卡片盒筆記法不是整理術，是一場與過去自己的長期對話。',
    category: '知識文學', categorySlug: 'literature', readTime: '9 分鐘', date: '2026・1月',
  },
  {
    title: '波赫士與無限的圖書館：閱讀作為一種存在方式',
    excerpt: '「我心裡一直都在暗暗設想，天堂應該是圖書館的模樣。」',
    category: '知識文學', categorySlug: 'literature', readTime: '12 分鐘', date: '2025・12月',
  },
  {
    title: '慢讀的勇氣：在資訊洪流中奪回自己的注意力',
    excerpt: '一年讀三百本書不值得炫耀，真正稀缺的是把一本書讀成血肉的能力。',
    category: '知識文學', categorySlug: 'literature', readTime: '8 分鐘', date: '2025・11月',
  },
];

export const byCategory = (slug: MockArticle['categorySlug']) =>
  articles.filter(a => a.categorySlug === slug);

export const categoryMeta = {
  investment: {
    labelEn: 'INVESTMENT STRATEGY',
    title: '投資策略分析',
    desc: '以價值投資為底色，用十年為單位思考財富。這裡沒有明牌與熱點，只有可以反覆驗證的思考框架。',
  },
  fitness: {
    labelEn: 'SCIENTIFIC FITNESS',
    title: '科學健身指導',
    desc: '讓身體成為最誠實的作品。從訓練原理到恢復科學，一次訓練，一次累積。',
  },
  literature: {
    labelEn: 'LITERATURE & READING',
    title: '知識文學分享',
    desc: '在書頁間與偉大靈魂相遇，借他人之眼重看世界。閱讀是最低成本的自我投資。',
  },
} as const;
