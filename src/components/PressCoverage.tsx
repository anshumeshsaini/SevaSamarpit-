import React, { useState } from 'react';
import { Newspaper, ZoomIn, X, ChevronLeft, ChevronRight, Sparkles, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

// Import news images
import news1 from '@/assets/news/1.jpeg';
import news2 from '@/assets/news/2.jpeg';
import news3 from '@/assets/news/3.jpeg';
import news4 from '@/assets/news/4.jpeg';
import news5 from '@/assets/news/5.jpeg';
import news6 from '@/assets/news/6.jpeg';
import news7 from '@/assets/news/7.jpeg';
import news8 from '@/assets/news/8.jpeg';
import news9 from '@/assets/news/9.jpeg';
import news10 from '@/assets/news/10.jpeg';
import news11 from '@/assets/news/11.jpeg';
import news12 from '@/assets/news/12.jpeg';
import news13 from '@/assets/news/13.jpeg';
import news14 from '@/assets/news/14.jpeg';
import news15 from '@/assets/news/15.jpeg';
import news16 from '@/assets/news/16.jpeg';
import news17 from '@/assets/news/17.jpeg';
import news18 from '@/assets/news/18.jpeg';
import news20 from '@/assets/news/20.jpeg';
import news21 from '@/assets/news/21.jpeg';
import news22 from '@/assets/news/22.jpeg';
import news23 from '@/assets/news/23.jpeg';
import news24 from '@/assets/news/24.jpeg';
import news25 from '@/assets/news/25.jpeg';
import news26 from '@/assets/news/26.jpeg';
import news27 from '@/assets/news/27.jpeg';
import news28 from '@/assets/news/28.jpeg';
import news29 from '@/assets/news/29.jpeg';
import news30 from '@/assets/news/30.jpeg';
import news31 from '@/assets/news/31.jpeg';
import news32 from '@/assets/news/32.jpeg';
import news33 from '@/assets/news/33.jpeg';
import news34 from '@/assets/news/34.jpeg';
import news35 from '@/assets/news/35.jpeg';
import news36 from '@/assets/news/36.jpeg';

export interface NewsItem {
  id: number;
  image: string;
  headline: string;
  paper: string;
  category: 'Flood Relief' | 'Health Camp' | 'Women Empowerment' | 'Education' | 'General';
}

const newsList: NewsItem[] = [
  { id: 1, image: news1, headline: 'सेवा समर्पित फाउंडेशन द्वारा बाढ़ पीड़ितों को राहत सामग्री वितरण', paper: 'दैनिक जागरण / प्रभात खबर', category: 'Flood Relief' },
  { id: 2, image: news2, headline: 'निशुल्क स्वास्थ्य जांच व दवा वितरण शिविर का भव्य आयोजन', paper: 'हिन्दुस्तान', category: 'Health Camp' },
  { id: 3, image: news3, headline: 'ग्रामीण महिलाओं के लिए सिलाई प्रशिक्षण केंद्र का शुभारंभ', paper: 'प्रभात खबर', category: 'Women Empowerment' },
  { id: 4, image: news4, headline: 'गरीब व मेधावी बच्चों को पाठ्य सामग्री व स्कूल बैग का वितरण', paper: 'दैनिक भास्कर', category: 'Education' },
  { id: 5, image: news5, headline: 'बाढ़ प्रभावित क्षेत्रों में नावों के जरिए भोजन व शुद्ध पेयजल पहुंचाया गया', paper: 'राष्ट्रीय सहारा', category: 'Flood Relief' },
  { id: 6, image: news6, headline: 'पर्यावरण संरक्षण हेतु वृहद स्तर पर पौधरोपण अभियान', paper: 'दैनिक जागरण', category: 'General' },
  { id: 7, image: news7, headline: 'कोरोना काल में जरूरतमंदों को सूखा राशन व सैनिटाइजर वितरण', paper: 'हिन्दुस्तान', category: 'General' },
  { id: 8, image: news8, headline: 'रक्तदान शिविर में युवाओं ने उत्साहपूर्वक किया रक्तदान', paper: 'प्रभात खबर', category: 'Health Camp' },
  { id: 9, image: news9, headline: 'कौशल विकास से आत्मनिर्भर बन रहीं ग्रामीण महिलाएं', paper: 'दैनिक जागरण', category: 'Women Empowerment' },
  { id: 10, image: news10, headline: 'फाउंडेशन के सामाजिक कार्यों की सराहना', paper: 'हिन्दुस्तान', category: 'General' },
  { id: 11, image: news11, headline: 'सैकड़ों ग्रामीणों की हुई निशुल्क नेत्र जांच, बांटे गए चश्मे', paper: 'दैनिक भास्कर', category: 'Health Camp' },
  { id: 12, image: news12, headline: 'बाढ़ विस्थापितों के बीच त्रिपाल व आवश्यक दवाइयों का वितरण', paper: 'प्रभात खबर', category: 'Flood Relief' },
  { id: 13, image: news13, headline: 'शिक्षा के प्रति जागरूकता अभियान, बच्चों ने लिया संकल्प', paper: 'राष्ट्रीय सहारा', category: 'Education' },
  { id: 14, image: news14, headline: 'फाउंडेशन द्वारा स्वच्छता अभियान व ग्राम विकास चौपाल', paper: 'दैनिक जागरण', category: 'General' },
  { id: 15, image: news15, headline: 'जरूरतमंद परिवारों को सर्दी में कंबल वितरण', paper: 'हिन्दुस्तान', category: 'General' },
  { id: 16, image: news16, headline: 'स्वावलंबन केंद्र से 50 महिलाओं को प्रमाण पत्र वितरित', paper: 'प्रभात खबर', category: 'Women Empowerment' },
  { id: 17, image: news17, headline: 'दवा व पोषण किट वितरण से हजारों को मिला लाभ', paper: 'दैनिक भास्कर', category: 'Health Camp' },
  { id: 18, image: news18, headline: 'आपदा प्रबंधन में सेवा समर्पित फाउंडेशन की त्वरित पहल', paper: 'दैनिक जागरण', category: 'Flood Relief' },
  { id: 20, image: news20, headline: 'ग्रामीण स्वास्थ्य परिचर्चा व टीकाकरण प्रोत्साहन', paper: 'हिन्दुस्तान', category: 'Health Camp' },
  { id: 21, image: news21, headline: 'युवाओं के लिए कैरियर मार्गदर्शन व स्वरोजगार मेला', paper: 'प्रभात खबर', category: 'Education' },
  { id: 22, image: news22, headline: 'नदी तटों पर सफाई अभियान, जल संरक्षण का संदेश', paper: 'दैनिक जागरण', category: 'General' },
  { id: 23, image: news23, headline: 'बाढ़ पीड़ितों के लिए अनवरत भोजन सेवा', paper: 'हिन्दुस्तान', category: 'Flood Relief' },
  { id: 24, image: news24, headline: 'चिकित्सकों की टीम ने दूरदराज गांवों में दी सेवाएं', paper: 'दैनिक भास्कर', category: 'Health Camp' },
  { id: 25, image: news25, headline: 'हस्तशिल्प व सिलाई उत्पाद प्रदर्शनी का आयोजन', paper: 'प्रभात खबर', category: 'Women Empowerment' },
  { id: 26, image: news26, headline: 'बच्चों को कम्प्यूटर व डिजिटल साक्षरता का पाठ', paper: 'राष्ट्रीय सहारा', category: 'Education' },
  { id: 27, image: news27, headline: 'मानव सेवा ही ईश्वर सेवा: फाउंडेशन का वार्षिक उत्सव', paper: 'दैनिक जागरण', category: 'General' },
  { id: 28, image: news28, headline: 'जलजमाव व महामारी रोकथाम हेतु ब्लीचिंग छिड़काव', paper: 'हिन्दुस्तान', category: 'Flood Relief' },
  { id: 29, image: news29, headline: 'विशेषज्ञ डॉक्टरों द्वारा स्वास्थ्य जांच', paper: 'प्रभात खबर', category: 'Health Camp' },
  { id: 30, image: news30, headline: 'स्वयंसहायता समूहों को बैंक लिंकेज में सहयोग', paper: 'दैनिक भास्कर', category: 'Women Empowerment' },
  { id: 31, image: news31, headline: 'मेधावी छात्रों को छात्रवृत्ति सम्मान पत्र', paper: 'दैनिक जागरण', category: 'Education' },
  { id: 32, image: news32, headline: 'बाढ़ के पानी के बीच राहत सामग्री पहुंचाने वाले जांबाज', paper: 'प्रभात खबर', category: 'Flood Relief' },
  { id: 33, image: news33, headline: 'मातृ एवं शिशु स्वास्थ्य जागरूकता शिविर', paper: 'हिन्दुस्तान', category: 'Health Camp' },
  { id: 34, image: news34, headline: 'सिलाई मशीन पाकर खिले महिलाओं के चेहरे', paper: 'दैनिक जागरण', category: 'Women Empowerment' },
  { id: 35, image: news35, headline: 'वृक्षारोपण से हरा-भरा बनेगा गांव, ग्रामीणों ने ली शपथ', paper: 'दैनिक भास्कर', category: 'General' },
  { id: 36, image: news36, headline: 'सेवा समर्पित फाउंडेशन के 10 वर्षों के कार्य सराहे गए', paper: 'हिन्दुस्तान', category: 'General' }
];

interface PressCoverageProps {
  limit?: number;
  showTitle?: boolean;
}

export const PressCoverage: React.FC<PressCoverageProps> = ({ 
  limit, 
  showTitle = true 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeNewsIndex, setActiveNewsIndex] = useState<number | null>(null);

  const categories = ['All', 'Flood Relief', 'Health Camp', 'Women Empowerment', 'Education'];

  const filteredNews = selectedCategory === 'All'
    ? newsList
    : newsList.filter(n => n.category === selectedCategory);

  const displayedNews = limit ? filteredNews.slice(0, limit) : filteredNews;

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-body text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4">

              Media Spotlight • समाचार पत्रों में सेवा
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
              Recognized Across Regional & National Press
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg font-body leading-relaxed">
              Explore authentic media coverage from leading publications documenting our on-ground flood rescue, medical camps, and community empowerment over the last decade.
            </p>
          </div>
        )}

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-accent text-accent-foreground shadow-gold font-bold scale-105'
                  : 'bg-muted/80 text-foreground hover:bg-muted hover:border-accent/30'
              }`}
            >
              {cat === 'All' ? `All Reports (${newsList.length})` : cat}
            </button>
          ))}
        </div>

        {/* Newspaper Clippings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedNews.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveNewsIndex(index)}
              className="group cursor-pointer bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/60 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Newspaper texture */}
              <div className="relative h-60 w-full overflow-hidden bg-muted/40 p-2">
                <img
                  src={item.image}
                  alt={item.headline}
                  className="w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                
                {/* Overlay with zoom hint */}
                <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 text-xs font-semibold shadow-lg">
                    <ZoomIn className="w-4 h-4 text-accent" />
                    <span>View Clipping</span>
                  </div>
                </div>

                {/* Newspaper Tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-secondary/90 text-primary-foreground text-[10px] font-bold shadow-sm">
                    {item.paper}
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 border-t border-border/60 bg-card">
                <span className="text-[10px] font-bold text-accent uppercase tracking-wider block mb-1">
                  {item.category}
                </span>
                <h4 className="text-xs font-semibold text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                  {item.headline}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Zoom Modal */}
        {activeNewsIndex !== null && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveNewsIndex(null)}
          >
            <div 
              className="relative max-w-4xl max-h-[90vh] bg-card rounded-2xl p-4 sm:p-6 shadow-2xl border border-gold/30 flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveNewsIndex(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              {/* Prev / Next buttons */}
              <button
                onClick={() => setActiveNewsIndex((prev) => (prev! > 0 ? prev! - 1 : displayedNews.length - 1))}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                aria-label="Previous"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                onClick={() => setActiveNewsIndex((prev) => (prev! < displayedNews.length - 1 ? prev! + 1 : 0))}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                aria-label="Next"
              >
                <ChevronRight size={22} />
              </button>

              {/* Full Image */}
              <div className="max-h-[70vh] overflow-auto flex items-center justify-center p-2">
                <img
                  src={displayedNews[activeNewsIndex].image}
                  alt={displayedNews[activeNewsIndex].headline}
                  className="max-h-[68vh] max-w-full object-contain rounded-lg shadow-lg"
                />
              </div>

              {/* Headline & Publication bar */}
              <div className="mt-4 text-center max-w-2xl px-4">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">
                  {displayedNews[activeNewsIndex].paper} • {displayedNews[activeNewsIndex].category}
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mt-1">
                  {displayedNews[activeNewsIndex].headline}
                </h3>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default PressCoverage;