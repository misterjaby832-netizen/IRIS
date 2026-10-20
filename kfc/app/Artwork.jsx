"use client";
import {useEffect,useRef,useState} from "react";
import {Button} from "@/components/ui/button";
const imgRectangle = "/kfc/assets/imgRectangle.png";
const imgFrame = "/kfc/assets/imgFrame.png";
const imgFrame1 = "/kfc/assets/imgFrame1.png";
const imgFrame2 = "/kfc/assets/imgFrame2.png";
const imgRectangle1 = "/kfc/assets/imgRectangle1.png";
const imgFrame3 = "/kfc/assets/imgFrame3.png";
const imgFrame4 = "/kfc/assets/imgFrame4.png";
const imgFrame5 = "/kfc/assets/imgFrame5.png";
const imgFrame6 = "/kfc/assets/imgFrame6.png";
const imgFrame7 = "/kfc/assets/imgFrame7.png";
const imgFrame8 = "/kfc/assets/imgFrame8.png";
const imgBackground = "/kfc/assets/imgBackground.png";
const imgSlide432 = "/kfc/assets/imgSlide432.png";
const imgSlide433 = "/kfc/assets/imgSlide433.png";
const imgSlide434 = "/kfc/assets/imgSlide434.png";
const img34 = "/kfc/assets/img34.png";
const img35 = "/kfc/assets/img35.png";
const img36 = "/kfc/assets/img36.png";
const img37 = "/kfc/assets/img37.png";
const img38 = "/kfc/assets/img38.png";
const imgRectangle2 = "/kfc/assets/imgRectangle2.png";
const imgRectangle3 = "/kfc/assets/imgRectangle3.png";
const imgRectangle4 = "/kfc/assets/imgRectangle4.png";
const imgRectangle5 = "/kfc/assets/imgRectangle5.png";
const img39 = "/kfc/assets/img39.png";
const img40 = "/kfc/assets/img40.png";
const img41 = "/kfc/assets/img41.png";
const img42 = "/kfc/assets/img42.png";
const imgVector4 = "/kfc/assets/imgVector4.png";
const imgVector5 = "/kfc/assets/imgVector5.png";
const imgVector6 = "/kfc/assets/imgVector6.png";
const imgVector7 = "/kfc/assets/imgVector7.png";
const img022 = "/kfc/assets/img022.png";
const img5 = "/kfc/assets/img5.png";
const img23 = "/kfc/assets/img23.png";
const img6 = "/kfc/assets/img6.png";
const imgVector10 = "/kfc/assets/imgVector10.png";
const imgVector11 = "/kfc/assets/imgVector11.png";
const img7 = "/kfc/assets/img7.png";
const img8 = "/kfc/assets/img8.png";
const img = "/kfc/assets/img.svg";
const imgGlass = "/kfc/assets/imgGlass.svg";
const imgGlass1 = "/kfc/assets/imgGlass1.svg";
const imgGroup2 = "/kfc/assets/imgGroup2.svg";
const imgRc01 = "/kfc/assets/imgRc01.svg";
const img1 = "/kfc/assets/img1.svg";
const imgVector = "/kfc/assets/imgVector.svg";
const imgVector1 = "/kfc/assets/imgVector1.svg";
const imgWc01 = "/kfc/assets/imgWc01.svg";
const imgBg = "/kfc/assets/imgBg.svg";
const img2 = "/kfc/assets/img2.svg";
const img3 = "/kfc/assets/img3.svg";
const img4 = "/kfc/assets/img4.svg";
const imgPolygon2 = "/kfc/assets/imgPolygon2.svg";
const imgPolygon1 = "/kfc/assets/imgPolygon1.svg";
const imgVector2 = "/kfc/assets/imgVector2.svg";
const imgVector3 = "/kfc/assets/imgVector3.svg";
const imgVector8 = "/kfc/assets/imgVector8.svg";
const imgVector9 = "/kfc/assets/imgVector9.svg";
const imgVector12 = "/kfc/assets/imgVector12.svg";
const imgVector13 = "/kfc/assets/imgVector13.svg";
const imgVector14 = "/kfc/assets/imgVector14.svg";
const imgVector15 = "/kfc/assets/imgVector15.svg";
const imgVector16 = "/kfc/assets/imgVector16.svg";
const imgVector17 = "/kfc/assets/imgVector17.svg";
const imgVector18 = "/kfc/assets/imgVector18.svg";
const imgWc02 = "/kfc/assets/imgWc02.svg";
const imgRectangle6 = "/kfc/assets/imgRectangle6.svg";
const imgLine1 = "/kfc/assets/imgLine1.svg";

function Artwork() {
  return (
    <div className="artwork relative size-full" data-node-id="29:2" data-name="KFC">
      <div className="absolute contents inset-[-0.62%_-0.56%_90.17%_-5.35%]" data-node-id="29:67" data-name="CASE01">
        <div className="absolute contents inset-[-0.62%_-0.56%_90.17%_-5.35%]" data-node-id="29:3" data-name="case01">
          <div className="absolute inset-[-0.62%_-0.56%_90.17%_-3.19%]" data-node-id="64:21" data-name="背景">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={img} />
          </div>
          <div className="absolute inset-[0_0_91.07%_59.03%]" data-node-id="29:4" data-name="glass底">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlass} />
          </div>
          <div className="absolute inset-[0_0_91.07%_59.03%]" data-node-id="29:68" data-name="glass">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlass1} />
          </div>
          <div className="absolute inset-[-0.08%_40.63%_91.07%_-5.35%] overflow-clip" data-node-id="29:5" data-name="地面">
            <div className="absolute blur-[5.6px] inset-[-0.41%_-0.92%_-0.04%_0]" data-node-id="29:6" data-name="Rectangle">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
              </div>
            </div>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0)] blur-[4.95px] border border-solid border-white h-[365px] left-[380px] overflow-clip top-[429px] w-[475px]" data-node-id="42:54" data-name="KFC">
            <div className="absolute inset-[calc(-5.21%-1.1px)_calc(-27.17%-1.54px)_calc(-3.09%-1.06px)_calc(2.11%-0.96px)]" data-node-id="42:62">
              <div className="absolute inset-[-5.54%_-3.69%]">
                <img alt="" className="block max-w-none size-full" src={imgGroup2} />
              </div>
            </div>
          </div>
          <div className="absolute inset-[7.56%_85.47%_91.07%_-0.07%]" data-node-id="58:2" data-name="RC01">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRc01} />
          </div>
          <div className="absolute inset-[0.63%_45.69%_91.47%_4.72%]" data-node-id="151:322" data-name="几何组">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={img1} />
          </div>
          <div className="[word-break:break-word] absolute contents inset-[3.47%_68.54%_94.52%_4.58%] leading-[normal] text-white" data-node-id="42:60" data-name="01">
            <p className="absolute font-sans font-bold font-bold inset-[3.47%_83.68%_94.52%_4.58%] text-[140px] whitespace-nowrap" data-node-id="29:49">
              01
            </p>
            <p className="absolute font-sans font-bold font-black inset-[4.47%_75.97%_95.33%_18.47%] not-italic text-[15px] whitespace-nowrap" data-node-id="29:50">
              SELECTED
            </p>
            <p className="absolute font-sans font-normal inset-[4.76%_68.54%_95.04%_18.47%] not-italic text-[15px] whitespace-pre" data-node-id="29:51">{`AIGC Visual / Social Media  `}</p>
          </div>
          <div className="absolute contents inset-[1%_4.38%_91.76%_62.36%]" data-node-id="64:20" data-name="字">
            <p className="[word-break:break-word] absolute font-kfc font-black inset-[1.02%_10.35%_98.63%_62.64%] leading-[normal] not-italic text-[23px] text-white whitespace-pre" data-node-id="29:55">{`时                                                          间`}</p>
            <p className="[word-break:break-word] absolute font-sans font-normal inset-[1%_20%_98.69%_68.82%] leading-[normal] not-italic text-[23px] text-white whitespace-nowrap" data-node-id="29:56">
              2026. Jun / Jul
            </p>
            <div className="[word-break:break-word] absolute font-kfc font-black inset-[2.7%_8.19%_96.61%_62.36%] leading-[0] not-italic text-[23px] text-white whitespace-nowrap" data-node-id="29:57">
              <p className="leading-[normal] mb-0 whitespace-pre">{`项 目                                                               `}</p>
              <p className="leading-[normal] whitespace-pre">类 型</p>
            </div>
            <p className="[word-break:break-word] absolute font-kfc inset-[3.63%_26.04%_96.02%_62.64%] leading-[normal] not-italic text-[23px] text-white tracking-[5.29px] whitespace-nowrap" data-node-id="29:58">
              社交媒体视觉
            </p>
            <p className="[word-break:break-word] absolute font-kfc font-black inset-[4.07%_4.51%_95.57%_92.15%] leading-[normal] not-italic text-[24px] text-white whitespace-nowrap" data-node-id="29:59">
              品牌
            </p>
            <p className="[word-break:break-word] absolute font-kfc inset-[4.52%_34.51%_95.13%_62.64%] leading-[normal] not-italic text-[23px] text-white whitespace-nowrap" data-node-id="29:60">
              KFC
            </p>
            <p className="[word-break:break-word] absolute font-kfc font-black inset-[5.03%_4.51%_94.63%_92.29%] leading-[normal] not-italic text-[23px] text-white whitespace-nowrap" data-node-id="29:61">
              职责
            </p>
            <p className="[word-break:break-word] absolute font-kfc inset-[5.51%_4.38%_94.14%_87.71%] leading-[normal] not-italic text-[23px] text-white whitespace-nowrap" data-node-id="29:62">
              创意 / 执行
            </p>
            <p className="[word-break:break-word] absolute font-kfc inset-[6.3%_32.92%_93.51%_63.47%] leading-[normal] not-italic text-[13px] text-white whitespace-nowrap" data-node-id="29:63">
              使用工具
            </p>
            <p className="[word-break:break-word] absolute font-sans font-normal inset-[6.66%_20.35%_93.12%_63.47%] leading-[normal] not-italic text-[17px] text-white whitespace-nowrap" data-node-id="29:64">
              ChatGPT img02 / Midjourney
            </p>
            <p className="[word-break:break-word] absolute font-sans font-normal inset-[7%_24.44%_92.77%_63.47%] leading-[normal] not-italic text-[17px] text-white whitespace-nowrap" data-node-id="29:65">
              Photoshop / Premiere
            </p>
            <p className="[word-break:break-word] absolute font-sans font-normal inset-[8.1%_22.71%_91.76%_63.47%] leading-[normal] not-italic text-[11px] text-white whitespace-nowrap" data-node-id="29:66">
              AIGC EXPLORATION + HUMAN CRAFT
            </p>
            <div className="absolute inset-[5.99%_5%_94%_63.47%]" data-node-id="29:54" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bottom-[74.57%] left-1/2 top-[8.93%] w-[1440px]" data-node-id="64:17" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
      </div>
      <div className="-translate-x-1/2 absolute h-[1507px] left-1/2 top-[828px] w-[1440px]" data-node-id="81:59" style={{ backgroundImage: "linear-gradient(180.07432063051067deg, rgba(0, 0, 0, 0) 1.9525%, rgba(52, 52, 52, 0.311) 27.751%, rgba(115, 115, 115, 0.01) 99.938%)" }} data-name="渐变底" />
      <div className="absolute contents left-[-4px] top-[883px]" data-node-id="151:321" data-name="项目背景">
        <SocialFeed />
        <div className="[word-break:break-word] absolute bottom-[85.46%] font-kfc leading-[0] left-[calc(50%-594px)] not-italic text-[18px] text-white top-[12.4%] w-[1183.326px] whitespace-pre-wrap" data-node-id="8:11">
          <p className="leading-[normal] mb-0">社交媒体逐渐成为年轻消费者接触品牌、分享体验与参与话题的重要场景，传统以产品展示为核心的内容形式，已难以持续吸引用户的注意。</p>
          <p className="leading-[normal] mb-0">​</p>
          <p className="mb-0">
            <span className="[word-break:break-word] font-sans font-bold leading-[normal] not-italic">KFC</span>
            <span className="leading-[normal]">需要在保持品牌识别度的同时，以更具想象力和社交传播力的视觉语言，与年轻群体建立新的沟通方式。本项目以</span>
            <span className="[word-break:break-word] font-sans font-bold leading-[normal] not-italic">KFC</span>
            <span className="leading-[normal]">小红书官方账号为主要传播</span>
          </p>
          <p className="leading-[normal] mb-0">场景，围绕KFC的经典产品与品牌内容展开AIGC视觉探索。创作将鸡块、薯条、蛋挞等熟悉的产品元素置入日常生活、自然景观和超现实空间，通过夸</p>
          <p className="leading-[normal] mb-0">张的尺度、意外的组合与轻松幽默的叙事，重新塑造用户对产品的视觉感受。</p>
          <p className="leading-[normal] mb-0">​</p>
          <p className="leading-[normal] mb-0">项目尝试把AI生成技术融入社交媒体内容生产流程，在提升视觉创意效率的同时，建立一套年轻、鲜明且具有延展性的品牌表达方式，使每一张画面既</p>
          <p className="leading-[normal]">能独立形成传播记忆点，也能共同构成统一而丰富的内容视觉体系。</p>
        </div>
        <div className="[word-break:break-word] absolute bottom-[82.7%] font-sans font-normal leading-[0] left-[calc(50%-594px)] not-italic text-[18px] text-[rgba(255,255,255,0.6)] top-[14.91%] w-[1174px] whitespace-pre-wrap" data-node-id="79:41">
          <p className="leading-[normal] mb-0">As social media becomes a primary space where younger audiences discover brands, share experiences and engage with cultural</p>
          <p className="leading-[normal] mb-0">{`conversations, conventional product-focused imagery is finding it increasingly difficult to sustain attention. KFC needed a more imaginative `}</p>
          <p className="leading-[normal] mb-0">and socially relevant visual language that could connect with a younger generation while retaining its distinctive brand identity.</p>
          <p className="leading-[normal] mb-0">Designed primarily for social platforms such as Xiaohongshu, this project explores the use of AIGC in visual content creation around KFC’s</p>
          <p className="leading-[normal] mb-0">iconic products and brand stories. Familiar items—including chicken nuggets, fries and egg tarts—are placed within everyday scenes, natural landscapes and surreal environments. Exaggerated scale, unexpected combinations and playful storytelling transform these recognizable</p>
          <p className="leading-[normal] mb-0">products into fresh visual experiences.</p>
          <p className="leading-[normal]">​</p>
        </div>
        <p className="[word-break:break-word] absolute font-kfc font-black inset-[10.94%_80.77%_88.55%_8.91%] leading-[normal] not-italic text-[34px] text-white tracking-[4.08px]" data-node-id="8:8">
          项目背景
        </p>
        <div className="absolute aspect-[2172/724] left-[42.99%] right-[5.29%] shadow-[0px_5px_4.4px_0px_rgba(0,0,0,0.25)] top-[883px]" data-node-id="86:273" data-name="background">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackground} />
        </div>
        <p className="[word-break:break-word] absolute font-sans font-normal inset-[9.66%_78.13%_90.16%_8.68%] leading-[normal] not-italic text-[14px] text-white tracking-[1.68px]" data-node-id="29:70">
          01 / BACKGROUND
        </p>
      </div>
      <div className="-translate-x-1/2 absolute bottom-[54.73%] contents left-1/2 top-[25.39%]" data-node-id="29:114" data-name="创意推导">
        <div className="absolute inset-[25.39%_0_54.73%_0]" data-node-id="29:115" data-name="创意BG">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBg} />
        </div>
        <p className="[word-break:break-word] absolute font-sans font-normal inset-[26.03%_81.94%_73.8%_9.72%] leading-[normal] not-italic text-[#252525] text-[14px] tracking-[1.68px]" data-node-id="29:117">
          02 / CONCEPT
        </p>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute drop-shadow-[5px_7px_7.15px_rgba(0,0,0,0.25)] h-[243.468px] left-[calc(50%+3.5px)] top-[calc(50%-1686.27px)] w-[1309px]" data-node-id="91:294" data-name="地理奇观 · 自由卡牌">
          <div className="absolute flex h-[424.712px] items-center justify-center left-[-12.36px] top-[-78.27px] w-[334.717px]" data-node-id="91:285">
            <div className="-rotate-95 flex-none">
              <div className="h-[301px] relative rounded-[24px] w-[400px]" data-name="Slide 4:3 - 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
                  <img alt="" className="absolute h-[-3050310944.92%] left-0 max-w-none top-[3048048104.05%] w-[-1717073884.48%]" src={imgRectangle1} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[415.205px] items-center justify-center left-[329.24px] top-[-13.52px] w-[321.522px]" data-node-id="91:288">
            <div className="-rotate-87 flex-none">
              <div className="h-[301px] relative rounded-[24px] w-[400px]" data-name="Slide 4:3 - 2">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
                  <img alt="" className="absolute h-[-3050310944.92%] left-0 max-w-none top-[3048048104.05%] w-[-1717073884.48%]" src={imgSlide432} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[420.022px] items-center justify-center left-[660.92px] top-[-90.93px] w-[328.169px]" data-node-id="91:290">
            <div className="-rotate-94 flex-none">
              <div className="h-[301px] relative rounded-[24px] w-[400px]" data-name="Slide 4:3 - 3">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
                  <img alt="" className="absolute h-[-3050310944.92%] left-0 max-w-none top-[3048048104.05%] w-[-1717073884.48%]" src={imgSlide433} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[420.022px] items-center justify-center left-[995.92px] top-[-30.93px] w-[328.169px]" data-node-id="91:292">
            <div className="-rotate-86 flex-none">
              <div className="h-[301px] relative rounded-[24px] w-[400px]" data-name="Slide 4:3 - 4">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
                  <img alt="" className="absolute h-[-3050310944.92%] left-0 max-w-none top-[3048048104.05%] w-[-1717073884.48%]" src={imgSlide434} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-x-full [word-break:break-word] absolute font-kfc h-[38px] leading-[0] left-[1334px] not-italic text-[#8c8c8c] text-[14px] text-right top-[3768px] w-[352px]" data-node-id="105:2">
          <p className="leading-[normal] mb-0">.数据截止</p>
          <p className="leading-[normal]">KFC小红书账号 · 2026.09.10 · 点赞按平台显示值</p>
        </div>
        <div className="-translate-x-1/2 [word-break:break-word] absolute contents left-[calc(50%+1.5px)] not-italic top-[2479.61px]" data-node-id="160:328" data-name="创意标题Step 01">
          <p className="absolute font-sans h-[151.516px] leading-[normal] left-[485px] text-[300px] text-[rgba(140,140,140,0.28)] top-[2479.61px] w-[186px]" data-node-id="116:299">
            “
          </p>
          <p className="absolute font-sans h-[151.516px] leading-[normal] left-[871px] text-[300px] text-[rgba(140,140,140,0.28)] top-[2516.48px] w-[87px]" data-node-id="116:302">
            ”
          </p>
          <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] absolute bottom-[71.67%] font-kfc font-black leading-[0] left-[calc(50%-182px)] text-[#242424] text-[34px] top-[28.07%] tracking-[3.4px] whitespace-nowrap" data-node-id="29:140">
            <span className="leading-[normal]">以防你没见</span>
            <span className="leading-[normal] tracking-[1.92px]">过</span>
            <span className="leading-[normal]">这些奇观</span>
          </p>
          <p className="absolute bottom-[72.09%] font-kfc leading-[normal] left-[calc(50%-54px)] text-[#777] text-[14px] top-[27.71%] w-[126px]" data-node-id="119:305">{`7 月日常 Campaign `}</p>
        </div>
        <div className="-translate-x-1/2 absolute bg-[var(--kfc-red,#df0025)] h-[32px] left-[calc(50%+1.5px)] rounded-[16px] top-[2475px] w-[185px]" data-node-id="119:307" />
        <p className="-translate-x-1/2 [word-break:break-word] absolute bottom-[72.79%] font-kfc font-black leading-[normal] left-[calc(50%+3px)] not-italic text-[18px] text-center text-white top-[26.95%] w-[146px]" data-node-id="29:120">
          STEP 01 创意推导
        </p>
        <div className="absolute content-stretch flex gap-[44px] items-start left-[768px] overflow-clip top-[3626px]" data-node-id="102:2" data-name="推文表现 · 小红书">
          <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="102:3" data-name="点赞">
            <div className="relative shrink-0 size-[24px]" data-node-id="104:2" data-name="点赞图标">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={img2} />
            </div>
            <p className="[word-break:break-word] font-kfc leading-[normal] not-italic relative shrink-0 text-[#252525] text-[34px] whitespace-nowrap" data-node-id="104:4">
              4万
            </p>
            <p className="[word-break:break-word] font-kfc leading-[normal] not-italic relative shrink-0 text-[#757575] text-[18px] whitespace-nowrap" data-node-id="104:5">
              点赞
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="102:4" data-name="收藏">
            <div className="relative shrink-0 size-[24px]" data-node-id="104:6" data-name="收藏图标">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={img3} />
            </div>
            <p className="[word-break:break-word] font-kfc leading-[normal] not-italic relative shrink-0 text-[#252525] text-[34px] whitespace-nowrap" data-node-id="104:8">
              3,438
            </p>
            <p className="[word-break:break-word] font-kfc leading-[normal] not-italic relative shrink-0 text-[#757575] text-[18px] whitespace-nowrap" data-node-id="104:9">
              收藏
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="102:5" data-name="评论">
            <div className="relative shrink-0 size-[24px]" data-node-id="104:10" data-name="评论图标">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={img4} />
            </div>
            <p className="[word-break:break-word] font-kfc leading-[normal] not-italic relative shrink-0 text-[#252525] text-[34px] whitespace-nowrap" data-node-id="104:12">
              2,086
            </p>
            <p className="[word-break:break-word] font-kfc leading-[normal] not-italic relative shrink-0 text-[#757575] text-[18px] whitespace-nowrap" data-node-id="104:13">
              评论
            </p>
          </div>
        </div>
        <div className="absolute flex items-center justify-center left-[318px] size-[82px] top-[3443px]" data-node-id="228:478">
          <div className="flex-none rotate-180">
            <div className="relative size-[82px]">
              <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
                <img alt="" className="block max-w-none size-full" src={imgPolygon2} />
              </div>
            </div>
          </div>
        </div>
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute font-kfc font-black leading-[normal] left-[174px] not-italic text-[34px] text-black top-[3375px] tracking-[3.4px] whitespace-nowrap" data-node-id="171:372">
          易 读
        </p>
        <div className="-translate-x-1/2 [text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute font-kfc font-black leading-[0] left-[calc(50%-504.5px)] not-italic text-[0px] text-black text-center top-[3432px] tracking-[3.4px] whitespace-nowrap" data-node-id="222:470">
          <p className="leading-[normal] mb-0 text-[34px]">Fluency</p>
          <p className="font-kfc leading-[normal] text-[14px]">降低解码成本</p>
        </div>
        <div className="-translate-x-1/2 [text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute font-kfc font-black leading-[0] left-[calc(50%-218px)] not-italic text-[0px] text-black text-center top-[3434px] tracking-[3.4px] whitespace-nowrap" data-node-id="223:472">
          <p className="leading-[normal] mb-0 text-[34px]">Surprise</p>
          <p className="font-kfc leading-[normal] text-[14px]">提供停留理由</p>
        </div>
        <div className="-translate-x-1/2 [text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute font-kfc font-black leading-[0] left-[calc(50%-363.5px)] not-italic text-[0px] text-black text-center top-[3615px] tracking-[3.4px] whitespace-nowrap" data-node-id="223:474">
          <p className="leading-[normal] mb-0 text-[34px]">Talkability</p>
          <p className="font-kfc leading-[normal] text-[14px]">留下参与空间</p>
        </div>
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute font-kfc font-black leading-[normal] left-[460px] not-italic text-[34px] text-black top-[3375px] tracking-[3.4px] whitespace-nowrap" data-node-id="171:373">
          反 差
        </p>
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute font-kfc font-black leading-[normal] left-[315px] not-italic text-[34px] text-black top-[3558px] tracking-[3.4px] whitespace-nowrap" data-node-id="171:375">
          可 谈
        </p>
        <div className="absolute flex items-center justify-center left-[347px] size-[24px] top-[3472px]" data-node-id="226:477">
          <div className="flex-none rotate-180">
            <div className="relative size-[24px]">
              <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
                <img alt="" className="block max-w-none size-full" src={imgPolygon1} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bottom-[26.59%] contents left-[calc(50%-68.5px)] top-[42.73%]" data-node-id="29:150" data-name="生成筛选">
        <div className="absolute inset-[45.27%_0_27.37%_0]" data-node-id="29:151" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
        </div>
        <div className="absolute blur-[4.35px] h-[1311px] left-[-146px] opacity-58 overflow-clip top-[4066px] w-[1595px]" data-node-id="265:2" data-name="淘汰稿背景 / 规则斜向满铺 · 红黑渐变">
          <div className="absolute flex h-[2716.065px] items-center justify-center left-[-335px] top-[-858.66px] w-[2320.085px]" data-node-id="272:2">
            <div className="-rotate-15 flex-none">
              <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative" data-name="15° 连续图片阵列">
                <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0" data-node-id="273:2" data-name="图片阵列 1">
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:3" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img34} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:4" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img35} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:5" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img36} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:6" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img37} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:7" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img34} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:8" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img36} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:9" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img37} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0" data-node-id="273:10" data-name="图片阵列 2">
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:11" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img34} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:12" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img35} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:13" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img34} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:14" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img35} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:15" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img38} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:16" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img37} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:17" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img36} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0" data-node-id="277:10" data-name="边缘延展 6">
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="277:11" data-name="Rectangle">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img34} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="277:12" data-name="Rectangle">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle2} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="277:13" data-name="Rectangle">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle3} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="277:14" data-name="Rectangle">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle4} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="277:15" data-name="Rectangle">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle5} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="277:16" data-name="Rectangle">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle2} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="277:17" data-name="Rectangle">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img35} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0" data-node-id="273:18" data-name="图片阵列 3">
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:19" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img35} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:20" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img37} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:21" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img36} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:22" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img35} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:23" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img36} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:24" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img37} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:25" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img39} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0" data-node-id="273:26" data-name="图片阵列 4">
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:27" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img36} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:28" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img37} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:29" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img35} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:30" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img34} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:31" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img38} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:32" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img37} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:33" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img35} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0" data-node-id="273:34" data-name="图片阵列 5">
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:35" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img37} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:36" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img38} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:37" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img35} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:38" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img34} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:39" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img37} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:40" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img34} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:41" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img38} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0" data-node-id="277:2" data-name="边缘延展 5">
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="277:3" data-name="Rectangle">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img35} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="277:4" data-name="Rectangle">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img34} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="277:5" data-name="Rectangle">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img36} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="277:6" data-name="Rectangle">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img37} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="277:7" data-name="Rectangle">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img36} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="277:8" data-name="Rectangle">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img37} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="277:9" data-name="Rectangle">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img36} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.85)] h-[1120px] left-[267px] mix-blend-multiply top-[58px] w-[1440px]" data-node-id="275:2" data-name="红 → 炭黑 / 单色渐变染色" />
        </div>
        <div className="absolute blur-[4.35px] h-[1311px] left-[-146px] opacity-58 overflow-clip top-[5438px] w-[1595px]" data-node-id="317:586" data-name="淘汰稿背景 / 规则斜向满铺 · 红黑渐变">
          <div className="absolute flex h-[2716.065px] items-center justify-center left-[-335px] top-[-858.66px] w-[2320.085px]" data-node-id="317:587">
            <div className="-rotate-15 flex-none">
              <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative" data-name="15° 连续图片阵列">
                <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0" data-node-id="317:588" data-name="图片阵列 1">
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:589" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img40} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:590" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img41} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:591" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img42} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:592" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img40} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:593" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img41} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:594" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img42} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:595" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img40} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0" data-node-id="317:596" data-name="图片阵列 2">
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:597" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img41} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:598" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img42} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:599" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img40} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:600" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img41} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:601" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img42} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:602" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img40} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:603" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img41} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0" data-node-id="317:604" data-name="边缘延展 6">
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:605" data-name="Rectangle">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img40} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:606" data-name="Rectangle">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img41} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:607" data-name="Rectangle">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img42} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:608" data-name="Rectangle">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img40} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:609" data-name="Rectangle">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img41} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:610" data-name="Rectangle">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img42} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:611" data-name="Rectangle">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img40} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0" data-node-id="317:612" data-name="图片阵列 3">
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:613" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img42} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:614" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img40} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:615" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img41} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:616" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img42} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:617" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img40} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:618" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img41} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:619" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img42} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0" data-node-id="317:620" data-name="图片阵列 4">
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:621" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img40} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:622" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img41} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:623" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img42} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:624" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img40} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:625" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img41} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:626" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img42} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:627" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img40} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0" data-node-id="317:628" data-name="图片阵列 5">
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:629" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img41} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:630" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img42} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:631" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img40} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:632" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img41} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:633" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img42} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:634" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img40} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:635" data-name="淘汰过程图 / 3:4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img41} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0" data-node-id="317:636" data-name="边缘延展 5">
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:637" data-name="Rectangle">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img42} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:638" data-name="Rectangle">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img40} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:639" data-name="Rectangle">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img41} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:640" data-name="Rectangle">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img42} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:641" data-name="Rectangle">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img40} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:642" data-name="Rectangle">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img41} />
                  </div>
                  <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="317:643" data-name="Rectangle">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img42} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.85)] h-[1120px] left-[267px] mix-blend-multiply top-[58px] w-[1440px]" data-node-id="317:644" data-name="红 → 炭黑 / 单色渐变染色" />
        </div>
        <div className="-translate-x-1/2 absolute bg-[#e4002c] h-[851px] left-[calc(50%-14px)] rounded-[58px] shadow-[0px_18px_13.7px_0px_rgba(0,0,0,0.25)] top-[4432px] w-[1268px]" data-node-id="280:508" />
        <div className="absolute inset-[42.73%_0.21%_27.37%_-0.28%]" data-node-id="290:523" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
        </div>
        <p className="[word-break:break-word] absolute font-kfc inset-[49.58%_84.37%_50.22%_10.97%] leading-[normal] not-italic text-[14px] text-white whitespace-nowrap" data-node-id="29:165">
          V01 / 质感
        </p>
        <div className="absolute inset-[50.09%_71.74%_46.11%_10.07%]" data-node-id="29:167" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" height="350" src={imgVector4} width="262" />
        </div>
        <p className="[word-break:break-word] absolute font-kfc inset-[54.13%_84.17%_45.63%_10.83%] leading-[normal] not-italic text-[16px] text-white whitespace-nowrap" data-node-id="29:174">
          蛋挞+梯田
        </p>
        <div className="[word-break:break-word] absolute font-kfc inset-[55.09%_71.39%_44.52%_10.83%] leading-[0] not-italic text-[13px] text-white whitespace-nowrap" data-node-id="29:175">
          <p className="leading-[normal] mb-0">淘汰原因：</p>
          <p className="leading-[normal]">生成结果观感不佳，后期调整质感相对复杂。</p>
        </div>
        <p className="[word-break:break-word] absolute font-kfc inset-[49.59%_62.99%_50.22%_32.71%] leading-[normal] not-italic text-[13px] text-white whitespace-nowrap" data-node-id="29:176">
          V02 / 构图
        </p>
        <div className="absolute inset-[50.09%_51.25%_46.11%_30.56%]" data-node-id="29:178" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" height="350" src={imgVector5} width="262" />
        </div>
        <p className="[word-break:break-word] absolute font-kfc inset-[54.13%_64.44%_45.63%_30.56%] leading-[normal] not-italic text-[16px] text-white whitespace-nowrap" data-node-id="29:185">
          蛋挞+火山
        </p>
        <div className="[word-break:break-word] absolute font-kfc inset-[55.09%_50.97%_44.52%_30.35%] leading-[0] not-italic text-[13px] text-white whitespace-nowrap" data-node-id="29:186">
          <p className="leading-[normal] mb-0">淘汰原因：</p>
          <p className="leading-[normal]">画面元素过多，产品在整体视觉表现上不突出。</p>
        </div>
        <p className="[word-break:break-word] absolute font-kfc inset-[49.59%_40.35%_50.22%_55.35%] leading-[normal] not-italic text-[13px] text-white whitespace-nowrap" data-node-id="29:187">
          V03 / 结构
        </p>
        <div className="absolute inset-[50.09%_30.83%_46.11%_50.97%]" data-node-id="29:189" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" height="350" src={imgVector6} width="262" />
        </div>
        <p className="[word-break:break-word] absolute font-kfc inset-[54.08%_41.53%_45.68%_51.25%] leading-[normal] not-italic text-[16px] text-white whitespace-nowrap" data-node-id="29:196">
          原味鸡+陨石坑
        </p>
        <div className="[word-break:break-word] absolute font-kfc inset-[55.09%_34.51%_44.52%_51.25%] leading-[0] not-italic text-[13px] text-white whitespace-nowrap" data-node-id="29:197">
          <p className="leading-[normal] mb-0">淘汰原因：</p>
          <p className="leading-[normal]">缺少原有奇观的锚点，解读成本高。</p>
        </div>
        <p className="[word-break:break-word] absolute font-kfc inset-[49.59%_16.32%_50.22%_77.99%] leading-[normal] not-italic text-[13px] text-white whitespace-nowrap" data-node-id="29:198">
          SELECT / 入选
        </p>
        <div className="absolute inset-[50.09%_10.35%_46.11%_71.46%]" data-node-id="29:200" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" height="350" src={imgVector7} width="262" />
        </div>
        <p className="[word-break:break-word] absolute font-kfc inset-[54.06%_23.54%_45.7%_71.46%] leading-[normal] not-italic text-[16px] text-white whitespace-nowrap" data-node-id="29:212">
          甜筒+雪峰
        </p>
        <div className="[word-break:break-word] absolute font-kfc inset-[55.09%_8.89%_44.52%_71.53%] leading-[0] not-italic text-[13px] text-white whitespace-nowrap" data-node-id="29:213">
          <p className="leading-[normal] mb-0">后期调整方向：</p>
          <p className="leading-[normal]">色调和谐自然，细节设计景深，进一步突出产品。</p>
        </div>
        <p className="[word-break:break-word] absolute font-sans font-normal inset-[56.31%_79.17%_43.55%_11.94%] leading-[normal] not-italic text-[11px] text-white whitespace-nowrap" data-node-id="29:215">
          READING THE PROCESS
        </p>
        <div className="-translate-x-1/2 absolute contents left-[calc(50%+1.5px)] top-[4323px]" data-node-id="204:445" data-name="step02">
          <div className="-translate-x-1/2 absolute bg-[var(--kfc-red,#df0025)] h-[32px] left-[calc(50%+1.5px)] rounded-[16px] top-[4323px] w-[185px]" data-node-id="204:441" />
          <p className="-translate-x-1/2 [word-break:break-word] absolute bottom-[52.68%] font-kfc font-black leading-[normal] left-[calc(50%+2px)] not-italic text-[18px] text-center text-white top-[47.06%] w-[146px]" data-node-id="204:442">
            STEP 02 生成筛选
          </p>
        </div>
      </div>
      <div className="absolute contents inset-[57.45%_0_27.37%_0]" data-node-id="29:217" data-name="精修">
        <div className="absolute bg-white h-[874px] left-0 rounded-[58px] top-[5282px] w-[1440px]" data-node-id="290:531" />
        <div className="absolute bg-white h-[522px] left-0 rounded-tl-[58px] rounded-tr-[58px] top-[6156px] w-[1440px]" data-node-id="317:584" />
        <p className="[word-break:break-word] absolute bottom-[27.96%] font-sans font-medium leading-[normal] left-[calc(50%-656px)] not-italic text-[#e4002c] text-[12px] top-[71.87%] w-[192px]" data-node-id="29:270">
          DETAILS MAKE THE DIFFERENCE.
        </p>
        <div className="absolute inset-[68.27%_80.9%_31.72%_19.03%]" data-node-id="29:272" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector8} />
        </div>
        <div className="absolute contents left-[64px] top-[6263px]" data-node-id="310:549" data-name="食物质感">
          <div className="absolute h-[199px] left-[64px] overflow-clip rounded-[11px] top-[6264px] w-[404px]" data-node-id="308:533">
            <div className="absolute h-[1058px] left-[-217px] top-[-504px] w-[793.5px]" data-node-id="308:532" data-name="块02 2">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img022} />
            </div>
          </div>
          <div className="absolute bg-white h-[199px] left-[265px] overflow-clip rounded-[11px] top-[6264px] w-[203px]" data-node-id="308:538">
            <div className="absolute h-[1058px] left-[-218px] top-[-504px] w-[793.5px]" data-node-id="308:537" data-name="块终极 3">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img5} />
            </div>
          </div>
          <div className="absolute inset-[68.12%_81.53%_29.69%_18.4%]" data-node-id="29:273" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector9} />
          </div>
          <div className="absolute contents left-[85px] top-[6283px]" data-node-id="310:550">
            <div className="absolute bg-white h-[17px] left-[85px] rounded-[40px] top-[6283px] w-[59px]" data-node-id="309:541" />
            <div className="absolute bg-white h-[17px] left-[388px] rounded-[40px] top-[6283px] w-[59px]" data-node-id="309:542" />
            <p className="[word-break:break-word] absolute font-sans font-bold font-semibold inset-[68.36%_69.86%_31.51%_27.85%] leading-[normal] not-italic text-[#df0025] text-[10px]" data-node-id="29:275">
              AFTER
            </p>
            <p className="[word-break:break-word] absolute font-sans font-bold font-semibold inset-[68.36%_90.69%_31.51%_6.6%] leading-[normal] not-italic text-[#df0025] text-[10px]" data-node-id="29:274">
              BEFORE
            </p>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute contents left-1/2 top-[6263px]" data-node-id="310:551" data-name="背景质感">
          <div className="absolute h-[199px] left-[518px] overflow-clip rounded-[11px] top-[6264px] w-[404px]" data-node-id="310:552">
            <div className="absolute h-[645px] left-[-38px] top-[-445px] w-[483.75px]" data-node-id="310:553" data-name="块02 2">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img022} />
            </div>
          </div>
          <div className="absolute bg-white h-[199px] left-[719px] overflow-clip rounded-[11px] top-[6264px] w-[203px]" data-node-id="310:554">
            <div className="absolute h-[673px] left-[-238px] top-[-472px] w-[504.75px]" data-node-id="310:555" data-name="块终极 3">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img5} />
            </div>
          </div>
          <div className="absolute bottom-[29.69%] left-[49.93%] right-1/2 top-[68.12%]" data-node-id="310:556" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector9} />
          </div>
          <div className="absolute contents left-[539px] top-[6283px]" data-node-id="310:557">
            <div className="absolute bg-white h-[17px] left-[539px] rounded-[40px] top-[6283px] w-[59px]" data-node-id="310:558" />
            <div className="absolute bg-white h-[17px] left-[842px] rounded-[40px] top-[6283px] w-[59px]" data-node-id="310:559" />
            <p className="[word-break:break-word] absolute font-sans font-bold font-semibold inset-[68.36%_38.33%_31.51%_59.38%] leading-[normal] not-italic text-[#df0025] text-[10px]" data-node-id="310:560">
              AFTER
            </p>
            <p className="[word-break:break-word] absolute font-sans font-bold font-semibold inset-[68.36%_59.17%_31.51%_38.13%] leading-[normal] not-italic text-[#df0025] text-[10px]" data-node-id="310:561">
              BEFORE
            </p>
          </div>
        </div>
        <div className="absolute contents left-[972px] top-[6264px]" data-node-id="311:567" data-name="品牌细节">
          <div className="absolute h-[199px] left-[972px] overflow-clip rounded-[11px] top-[6265px] w-[404px]" data-node-id="311:568">
            <div className="absolute h-[645px] left-[-216px] top-[-343px] w-[483.75px]" data-node-id="311:569" data-name="块02 2">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img23} />
            </div>
          </div>
          <div className="absolute bg-white h-[199px] left-[1173px] overflow-clip rounded-[11px] top-[6265px] w-[203px]" data-node-id="311:570">
            <div className="absolute h-[645px] left-[-215px] top-[-343px] w-[483.75px]" data-node-id="311:571" data-name="块终极 3">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img6} />
            </div>
          </div>
          <div className="absolute inset-[68.13%_18.47%_29.68%_81.46%]" data-node-id="311:572" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector9} />
          </div>
          <div className="absolute contents left-[993px] top-[6284px]" data-node-id="311:573">
            <div className="absolute bg-white h-[17px] left-[993px] rounded-[40px] top-[6284px] w-[59px]" data-node-id="311:574" />
            <div className="absolute bg-white h-[17px] left-[1296px] rounded-[40px] top-[6284px] w-[59px]" data-node-id="311:575" />
            <p className="[word-break:break-word] absolute font-sans font-bold font-semibold inset-[68.37%_6.81%_31.5%_90.9%] leading-[normal] not-italic text-[#df0025] text-[10px]" data-node-id="311:576">
              AFTER
            </p>
            <p className="[word-break:break-word] absolute font-sans font-bold font-semibold inset-[68.37%_27.64%_31.5%_69.65%] leading-[normal] not-italic text-[#df0025] text-[10px]" data-node-id="311:577">
              BEFORE
            </p>
          </div>
        </div>
        <p className="[word-break:break-word] absolute font-kfc inset-[67.61%_88.06%_32.12%_4.86%] leading-[normal] not-italic text-[18px] text-[color:var(--kfc-ink,#242424)]" data-node-id="29:278">
          A / 食物质感
        </p>
        <p className="[word-break:break-word] absolute font-kfc inset-[70.75%_74.17%_29.04%_11.39%] leading-[normal] not-italic text-[14px] text-[color:var(--kfc-ink,#242424)]" data-node-id="29:279">
          还原产品原本的纹理、色泽与边缘
        </p>
        <p className="[word-break:break-word] absolute font-kfc inset-[67.61%_57.01%_32.12%_35.97%] leading-[normal] not-italic text-[18px] text-[color:var(--kfc-ink,#242424)]" data-node-id="29:287">
          B / 背景质感
        </p>
        <p className="[word-break:break-word] absolute font-kfc inset-[70.75%_45.9%_29.04%_44.51%] leading-[normal] not-italic text-[14px] text-[color:var(--kfc-ink,#242424)]" data-node-id="29:288">
          规避AI生成细碎化纹理
        </p>
        <div className="absolute inset-[68.27%_20.9%_31.72%_79.03%]" data-node-id="29:290" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector8} />
        </div>
        <p className="[word-break:break-word] absolute font-kfc inset-[67.61%_26.04%_32.12%_67.01%] leading-[normal] not-italic text-[18px] text-[color:var(--kfc-ink,#242424)]" data-node-id="29:296">
          C / 品牌细节
        </p>
        <p className="[word-break:break-word] absolute font-kfc inset-[70.71%_4.44%_29.08%_69.31%] leading-[normal] not-italic text-[14px] text-[color:var(--kfc-ink,#242424)]" data-node-id="29:297">
          出现具体品牌标识及文字的内容，需确保与真实包装一致
        </p>
        <div className="-translate-x-1/2 absolute contents left-[calc(50%+1.5px)] top-[5361px]" data-node-id="290:515" data-name="step03">
          <div className="-translate-x-1/2 absolute bg-[var(--kfc-red,#df0025)] h-[31.928px] left-[calc(50%+1.5px)] rounded-[16px] top-[5361px] w-[185px]" data-node-id="290:516" />
          <p className="-translate-x-1/2 [word-break:break-word] absolute bottom-[41.39%] font-kfc font-black leading-[normal] left-[calc(50%+2px)] not-italic text-[18px] text-[color:var(--kfc-paper,#faf9f6)] text-center top-[58.35%] w-[146px]" data-node-id="290:517">
            STEP 03 后期精修
          </p>
        </div>
      </div>
      <div className="absolute inset-[59.59%_56.32%_34.3%_14.37%]" data-node-id="29:238" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="561.397" src={imgVector10} width="422" />
      </div>
      <div className="absolute inset-[59.59%_14.17%_34.3%_56.53%]" data-node-id="29:248" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="561.397" src={imgVector11} width="422" />
      </div>
      <div className="absolute contents inset-[72.63%_0_-14.48%_-0.07%]" data-node-id="29:315" data-name="最终展示">
        <div className="absolute inset-[72.63%_0_3.26%_0]" data-node-id="29:316" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector12} />
        </div>
        <div className="-translate-x-1/2 absolute h-[3813px] left-[calc(50%-1px)] top-[6712px] w-[1440px]" data-node-id="330:668" style={{ backgroundImage: "linear-gradient(180.18804492739065deg, rgba(0, 0, 0, 0) 1.9525%, rgba(52, 52, 52, 0.311) 27.751%, rgba(115, 115, 115, 0.01) 99.938%)" }} data-name="渐变底" />
        <p className="[word-break:break-word] absolute font-sans font-normal inset-[73.24%_79.03%_26.57%_9.72%] leading-[normal] not-italic text-[14px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="29:318">
          05 / FINAL VISUALS
        </p>
        <p className="[word-break:break-word] absolute font-sans font-normal inset-[74.18%_82.22%_25.43%_9.44%] leading-[normal] not-italic text-[30px] text-white whitespace-nowrap" data-node-id="29:319">
          最终内容
        </p>
        <div className="absolute inset-[83.43%_6.94%_16.55%_5%]" data-node-id="29:334" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector13} />
        </div>
        <p className="[word-break:break-word] absolute font-sans font-normal inset-[83.82%_91.04%_16.02%_5%] leading-[normal] not-italic text-[#e4002c] text-[12px] whitespace-nowrap" data-node-id="29:335">
          DELIVERY
        </p>
        <p className="[word-break:break-word] absolute font-sans font-normal inset-[83.74%_45.49%_16.01%_29.72%] leading-[normal] not-italic text-[#252525] text-[19px] whitespace-nowrap" data-node-id="29:336">
          主视觉 / 平台裁切 / 标题与配文 / 上线截图
        </p>
        <div className="absolute h-[409px] left-[972px] top-[7802px] w-[307px]" data-node-id="237:484" data-name="闪亮 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img7} />
        </div>
        <div className="absolute bg-white h-[491px] left-[127px] rounded-[28px] top-[6964px] w-[307px]" data-node-id="330:671" />
        <div className="absolute h-[409px] left-[127px] top-[7009px] w-[307px]" data-node-id="232:483" data-name="后室 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame3} />
        </div>
      </div>
      <div className="absolute contents inset-[96.74%_0.14%_0_-1.04%]" data-node-id="29:394" data-name="section-7">
        <div className="absolute inset-[96.74%_1.04%_0_-1.04%]" data-node-id="29:395" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector14} />
        </div>
        <div className="absolute inset-[96.74%_0.14%_0_-0.14%] overflow-clip" data-node-id="29:396" data-name="Frame">
          <div className="absolute blur-[4.35px] inset-[-192.32%_0]" data-node-id="29:397" data-name="Rectangle">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
            </div>
          </div>
        </div>
        <div className="absolute inset-[97.38%_30.33%_2.23%_67.15%]" data-node-id="29:401" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector15} />
        </div>
        <div className="absolute inset-[97.38%_27.83%_2.23%_69.65%]" data-node-id="29:402" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector15} />
        </div>
        <div className="absolute inset-[97.77%_27.83%_1.84%_69.65%]" data-node-id="29:403" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector15} />
        </div>
        <div className="absolute inset-[97.77%_25.33%_1.84%_72.15%]" data-node-id="29:404" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector15} />
        </div>
        <div className="absolute inset-[98.16%_25.33%_1.44%_72.15%]" data-node-id="29:405" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector15} />
        </div>
        <div className="absolute inset-[98.16%_30.33%_1.44%_67.15%]" data-node-id="29:406" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector15} />
        </div>
        <div className="absolute inset-[98.55%_30.33%_1.05%_67.15%]" data-node-id="29:407" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector15} />
        </div>
        <div className="absolute inset-[98.55%_27.83%_1.05%_69.65%]" data-node-id="29:408" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector15} />
        </div>
        <div className="absolute inset-[98.94%_27.83%_0.66%_69.65%]" data-node-id="29:409" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector15} />
        </div>
        <div className="absolute inset-[98.94%_25.33%_0.66%_72.15%]" data-node-id="29:410" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector15} />
        </div>
        <div className="absolute inset-[97.47%_11.39%_2.31%_87.15%]" data-node-id="29:411" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector16} />
        </div>
        <div className="absolute inset-[98.54%_15.35%_1.15%_82.71%]" data-node-id="29:412" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector17} />
        </div>
        <div className="absolute inset-[99.17%_6.61%_0.53%_91.19%]" data-node-id="29:413" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector18} />
        </div>
        <p className="[word-break:break-word] absolute font-sans font-normal inset-[99.6%_83.75%_0.26%_4.38%] leading-[normal] not-italic text-[11px] text-white whitespace-nowrap" data-node-id="29:414">
          IRIS WANG / DIGITAL MEDIA ART
        </p>
      </div>
      <div className="absolute inset-[7.55%_-0.02%_90.16%_88.33%]" data-node-id="64:19" data-name="wc02">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWc02} />
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute font-kfc font-black h-[205px] leading-[0] left-[763px] not-italic text-[#242424] text-[0px] top-[3285px] tracking-[1.4px] w-[536px] whitespace-pre-wrap" data-node-id="208:457">
        <p className="font-kfc leading-[normal] mb-0 text-[14px]">
          简直了！
          <br aria-hidden />
          怎么每一处都长在我的食欲点上啊 😋
          <br aria-hidden />
          {`	`}
          <br aria-hidden />
          🌚“陨石”坑里，之前掉落下来的大概是一块美味的原味鸡…
          <br aria-hidden />
          🗿巨石阵里，每一块“石头”看起来又嫩又脆…
          <br aria-hidden />
          🌋boom！火山喷发！怎么感觉喷出来的“岩浆”也是奶fufu，香香甜甜的？
          <br aria-hidden />
          {`	`}
          <br aria-hidden />
          我一定是太饿了！
          <br aria-hidden />
          🔍先去肯德基补充能量再继续探索世界吧！
          <br aria-hidden />
          {`	`}
          <br aria-hidden />
          （ps. 本画面为广告创意，场景由AI生成，不指向任何第三方既有知识产权，产品以实
        </p>
        <p className="text-[14px]">
          <span className="[word-break:break-word] font-kfc leading-[normal] not-italic text-[#242424]">物为准</span>
          <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] cursor-pointer decoration-from-font decoration-solid font-kfc leading-[normal] not-italic text-[#242424] underline"  target="_blank">
            <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid underline"  target="_blank">
              哦）
              <br aria-hidden />
              {`	`}
            </span>
          </a>
          <span className="[word-break:break-word] font-kfc leading-[normal] not-italic text-[#242424]">
            <br aria-hidden />
          </span>
          <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] cursor-pointer decoration-from-font decoration-solid font-kfc leading-[normal] not-italic text-[#242424] underline"  target="_blank">
            <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid underline"  target="_blank">
              #KFC
            </span>
          </a>
          <span className="[word-break:break-word] font-kfc leading-[normal] not-italic text-[#242424]">{` `}</span>
          <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] cursor-pointer decoration-from-font decoration-solid font-kfc leading-[normal] not-italic text-[#242424] underline"  target="_blank">
            <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid underline"  target="_blank">
              #肯德基 #无法
            </span>
          </a>
          <span className="[word-break:break-word] font-kfc leading-[normal] not-italic text-[#242424]">解</span>
          <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] cursor-pointer decoration-from-font decoration-solid font-kfc leading-[normal] not-italic text-[#242424] underline"  target="_blank">
            <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid underline"  target="_blank">
              释的现象 #
            </span>
          </a>
          <span className="[word-break:break-word] font-kfc leading-[normal] not-italic text-[#242424]">世</span>
          <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] cursor-pointer decoration-from-font decoration-solid font-kfc leading-[normal] not-italic text-[#242424] underline"  target="_blank">
            <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid underline"  target="_blank">
              界的真相 #偶然
            </span>
          </a>
          <span className="[word-break:break-word] font-kfc leading-[normal] not-italic text-[#242424]">闯</span>
          <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] cursor-pointer decoration-from-font decoration-solid font-kfc leading-[normal] not-italic text-[#242424] underline"  target="_blank">
            <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid underline"  target="_blank">
              入的世界 #不
            </span>
          </a>
          <span className="[word-break:break-word] font-kfc leading-[normal] not-italic text-[#242424]">一</span>
          <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] cursor-pointer decoration-from-font decoration-solid font-kfc leading-[normal] not-italic text-[#242424] underline"  target="_blank">
            <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid underline"  target="_blank">
              样的风景 #
            </span>
          </a>
          <span className="[word-break:break-word] font-kfc leading-[normal] not-italic text-[#242424]">神</span>
          <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] cursor-pointer decoration-from-font decoration-solid font-kfc leading-[normal] not-italic text-[#242424] underline"  target="_blank">
            <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid underline"  target="_blank">
              秘的地
            </span>
          </a>
          <span className="[word-break:break-word] font-kfc leading-[normal] not-italic text-[#242424]">方</span>
          <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] cursor-pointer decoration-from-font decoration-solid font-kfc leading-[normal] not-italic text-[#242424] underline"  target="_blank">
            <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid underline"  target="_blank">{` #地理 #howt`}</span>
          </a>
          <span className="leading-[normal]">o美味旅行</span>
        </p>
      </div>
      <div className="absolute bg-gradient-to-b from-[13.631%] from-white h-[389px] left-[-4px] rounded-bl-[58px] rounded-br-[58px] rounded-tl-[47px] rounded-tr-[49px] to-[#d7d7d7] top-[3854px] w-[1444px]" data-node-id="289:514" />
      <p className="[word-break:break-word] absolute font-kfc font-black inset-[42.8%_73.96%_56.99%_6.67%] leading-[normal] not-italic text-[#e4002c] text-[14px] whitespace-nowrap" data-node-id="29:159">
        PROMPT | GPT-Image-2 | 上校鸡块+巨石阵
      </p>
      <p className="[word-break:break-word] absolute font-kfc h-[110px] leading-[normal] left-[calc(50%-624px)] not-italic text-[#77756f] text-[18px] top-[4033px] w-[1248px]" data-node-id="188:433">
        巨型炸鸡块「上校鸡块.png」组成的英国巨石阵 Stonehenge「stonehenge.png」，多个巨大的长方形金黄炸鸡块垂直竖立作为石柱炸鸡块横向架在顶部作为横梁，完整还原巨石阵的建筑排列结构。巨石阵矗立在辽阔翠绿的英国乡野草原上，远处绿色丘陵，明亮蓝天，零散柔软白云。略微低机位正面拍摄，巨大的纪念碑尺度，上方保留大量蓝天留 白。金黄酥脆炸鸡外皮细节清晰，真实高级的食物摄影质感，自然的阳光，柔和的阴影。超现实商业广告摄影，荒诞幽默，色彩明快，高级摄影合成，写实，高细节， 无人物，无文字，无包装，3:4竖版。
      </p>
      <div className="-translate-x-1/2 absolute h-[24px] left-[calc(50%-597px)] top-[3806px] w-[54px]" data-node-id="213:467">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle6} />
      </div>
      <div className="-translate-x-1/2 absolute h-[24px] left-[calc(50%+587px)] top-[3892px] w-[54px]" data-node-id="213:465">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle6} />
      </div>
      <div className="-translate-x-1/2 absolute flex h-[416px] items-center justify-center left-1/2 top-[5566.09px] w-0" data-node-id="312:580">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[416px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine1} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[62.13%_93.27%_36.83%_4.44%] items-center justify-center" data-node-id="81:256" style={{ containerType: "size" }}>
        <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
          <p className="[word-break:break-word] font-kfc font-black leading-[normal] not-italic relative size-full text-[#e4002c] text-[24px]">BEFORE</p>
        </div>
      </div>
      <div className="absolute flex inset-[62.2%_5.97%_36.9%_91.74%] items-center justify-center" data-node-id="317:582" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
          <p className="[word-break:break-word] font-kfc font-black leading-[normal] not-italic relative size-full text-[#e4002c] text-[24px]">AFTER</p>
        </div>
      </div>
      <div className="absolute h-[430px] left-[923px] top-[6999px] w-[323px]" data-node-id="250:493" data-name="寂静岭 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img8} />
      </div>
    </div>
  );
}
const columns=[[imgFrame1,imgFrame],[imgFrame3,imgFrame2],[imgRectangle1,imgFrame4],[imgFrame5,imgFrame6],[imgFrame7,imgFrame8]];
function SocialFeed(){const [paused,setPaused]=useState(false);return <section className={"social-feed "+(paused?"is-paused":"")} aria-label="社交媒体视觉信息流"><div className="feed-track">{[0,1].map(copy=><div className="feed-set" key={copy} aria-hidden={copy===1?true:undefined}>{columns.map((pair,i)=><div className={"feed-column column-"+i} key={i}>{pair.map((src,j)=><img src={src} key={src} alt={copy?"":"KFC 创意视觉 "+(i*2+j+1)} width="274" height="366" draggable="false"/>)}</div>)}</div>)}</div><Button variant="ghost" className="feed-pause" onClick={()=>setPaused(!paused)} aria-label={paused?"继续信息流":"暂停信息流"}>{paused?"继续 ↗":"暂停 ∥"}</Button></section>}
export default function KfcPage(){const host=useRef(null),[scale,setScale]=useState(1);useEffect(()=>{const el=host.current;const size=new ResizeObserver(([e])=>setScale(e.contentRect.width/1440));size.observe(el);let observer;if(!matchMedia("(prefers-reduced-motion: reduce)").matches){observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("is-visible");observer.unobserve(e.target);}}),{threshold:.08});el.querySelectorAll(".artwork p").forEach(p=>{if(p.getBoundingClientRect().top>innerHeight){p.classList.add("reveal");observer.observe(p);}});}return()=>{size.disconnect();observer?.disconnect();};},[]);return <main ref={host} className="portfolio"><h1 className="sr-only">KFC 社媒 AIGC 视觉创作项目</h1><div className="artboard-shell" style={{height:9194*scale}}><div className="artboard" style={{transform:"scale("+scale+")"}}><Artwork/></div></div></main>;}
