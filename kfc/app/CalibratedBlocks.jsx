import InteractiveCards from './InteractiveCards';
const at=(left,top,width,extra={})=>({position:'absolute',left,top,width,...extra});
const asset=(name,ext='png')=>'/kfc/assets/oct-'+name+'.'+ext;

export function Overview(){return <section className="cal-overview" aria-label="项目概述">
 <h2 style={at(125,1021,250)}>项目概述</h2><div className="cal-overview-zh" style={at(499,1021,816)}>
 <p>社交媒体逐渐成为年轻消费者接触品牌、分享体验与参与话题的重要场景，传统以产品展示为核心的内容形式，已难以持续吸引用户的注意。<b>KFC</b>需要在保持品牌识别度的同时，以更具想象力和社交传播力的视觉语言，与年轻群体建立新的沟通方式。本项目以<b>KFC</b>小红书官方账号为主要传播场景，围绕<b>KFC</b>的经典产品与品牌内容展开<b>AIGC</b>视觉探索。</p>
 <p>项目尝试把<b>AI</b>生成技术融入社交媒体内容生产流程，在提升视觉创意效率的同时，建立一套年轻、鲜明且具有延展性的品牌表达方式，使每一张画面既能独立形成传播记忆点，也能共同构成统一而丰富的内容视觉体系。</p>
 </div><p className="cal-overview-label" style={at(123,1301,250)}>OVERVIEW</p>
 <div className="cal-overview-en" style={at(499,1305,816)}><p>Social media has become an important space for young consumers to discover brands, share experiences, and join conversations. Traditional content centered on product displays can no longer hold their attention for long. KFC needs a more imaginative, shareable visual language that connects with younger audiences while preserving its recognizable brand identity. This project explores AI-generated visuals for KFC’s official Xiaohongshu account, drawing on its iconic products and brand content.</p><p>The project integrates AI generation into the social media content workflow to make visual ideation more efficient and develop a youthful, distinctive brand expression that can grow across formats. Each image is designed to create its own memorable moment while contributing to a cohesive and varied visual system.</p></div>
 </section>}

export function CampaignCopy(){return <div className="cal-copy" style={at(91,3710,596)}>
 <p>简直了！<br/>怎么每一处都长在我的食欲点上啊 😋</p>
 <p>🌚“陨石”坑里，之前掉落下来的大概是一块美味的原味鸡…<br/>🗿巨石阵里，每一块“石头”看起来又嫩又脆…<br/>🌋boom！火山喷发！怎么感觉喷出来的“岩浆”也是奶fufu，香香甜甜的？</p>
 <p>我一定是太饿了！<br/>🔍先去肯德基补充能量再继续探索世界吧！</p>
 <p>（ps. 本画面为广告创意，场景由AI生成，不指向任何第三方既有知识产权，产品以实物为准哦）</p>
 <p className="cal-hashtags">#KFC #肯德基 #无法解释的现象 #世界的真相 #偶然闯入的世界 #神秘的地方 #地理 #howto美味旅行</p>
 </div>}
export function HorrorCopy(){return <div className="cal-copy cal-horror-copy" style={at(780,4795,536.7)}>
 <p>Welcome to 𝑲𝑭𝑪</p><p>😰❄ Oops，被肯的纳凉特辑吓饿了吗？那就炫饭炫饭！先来上一串鲜嫩弹牙香喷喷的超酥大鱿鱼串，如果还没见效就叫上朋友一起 再美美享用点儿秘汁全鸡、黄金鸡块吧！😋</p>
 <p className="cal-hashtags">#KFC #肯德基 #纳凉 #omg你吓到我了 #没有亿点点防备 #惊恐电影 #彻底疯狂 #你的胆子肥嘟嘟的 #总要来一次 #偶然闯入的世界</p></div>}

export function CardSet(){return <InteractiveCards/>}

export function MainComparison(){return <div className="cal-main-comparison" style={at(0,6959,1440,{height:920})}><img src={asset('imgBefore')} alt="精修前的鸡块巨石阵"/><img src={asset('imgAfter')} alt="精修后的鸡块巨石阵"/></div>}

// 每个红色精修卡片独立移动；图片、标题、说明一起保持设计稿位置。
export function DetailPanel({kind}){const details={food:[8113,'food','产品质感','还原产品原本的纹理、色泽与边缘'],background:[9184,'background','背景质感','规避AI生成细碎化纹理，实拍素材调整光照条件等质感'],brand:[10249,'brand','品牌细节','出现具体品牌标识及文字的内容，需确保与真实包装一致']};const [y,name,title,copy]=details[kind];return <section className="cal-detail" aria-label={title} style={at(256,y,927,{height:923})}>
 <h3>{'{ '+title+' }'}</h3><div className="cal-detail-image"><img src={'/kfc/assets/oct-proof-'+name+'.webp'} alt={title+'的前后精修对比'} width="670" height="670"/></div>
 <p>{copy}</p>
 </section>}

export function Principle({kind}){const data={fluency:[252.5,'易 读','Fluency','降低解码成本'],talk:[720.5,'可 谈','Talkability','留下参与空间'],surprise:[1183,'反 差','Surprise','提供停留理由']};const [center,cn,en,sub]=data[kind];return <div className="cal-principle" style={at(center-200,4400,400)}><h3>{cn}<br/><span>{en}</span></h3><p>{sub}</p></div>}

export function PromptMeta(){return <p className="cal-prompt-meta" style={at(1120,5615,206)}>上校鸡块 × 巨石阵&nbsp; |&nbsp; 图片<br/>GPT-Image-2&nbsp; |&nbsp; 模型</p>}
