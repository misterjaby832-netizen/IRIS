import ResponsiveImage from "./ResponsiveImage";
import KfcCover from "./KfcCover";
import ScrollPanel from "./ScrollPanel";
import ScreeningGallery from "./ScreeningGallery";
import AccountScene from "./AccountScene";
import {Overview,CampaignCopy,HorrorCopy,CardSet,MainComparison,DetailPanel,Principle,PromptMeta} from "./CalibratedBlocks";
import {Feed,Glass,Keywords} from "./Experience";
const imgRectangle = "/kfc/assets/oct-imgRectangle.png";
const imgBefore = "/kfc/assets/oct-imgBefore.png";
const imgBefore1 = "/kfc/assets/oct-imgBefore1.png";
const imgAfter = "/kfc/assets/oct-imgAfter.png";
const imgAfter1 = "/kfc/assets/oct-imgAfter1.png";
const imgAfter2 = "/kfc/assets/oct-imgAfter2.png";
const img4001317 = "/kfc/assets/oct-img4001317.png";
const img4001318 = "/kfc/assets/oct-img4001318.png";
const img4001319 = "/kfc/assets/oct-img4001319.png";
const imgRectangle1 = "/kfc/assets/oct-imgRectangle1.png";
const img4001322 = "/kfc/assets/oct-img4001322.png";
const img4001323 = "/kfc/assets/oct-img4001323.png";
const img4001324 = "/kfc/assets/oct-img4001324.png";
const img4001325 = "/kfc/assets/oct-img4001325.png";
const img4001326 = "/kfc/assets/oct-img4001326.png";
const img4001327 = "/kfc/assets/oct-img4001327.png";
const img4001320 = "/kfc/assets/oct-img4001320.png";
const img4001321 = "/kfc/assets/oct-img4001321.png";
const img4001328 = "/kfc/assets/oct-img4001328.png";
const img685115 = "/kfc/assets/oct-img685115.png";
const imgRectangle2 = "/kfc/assets/oct-imgRectangle2.png";
const img4001329 = "/kfc/assets/oct-img4001329.png";
const img4001330 = "/kfc/assets/oct-img4001330.png";
const img4001331 = "/kfc/assets/oct-img4001331.png";
const img4001332 = "/kfc/assets/oct-img4001332.png";
const img685117 = "/kfc/assets/oct-img685117.png";
const img4001333 = "/kfc/assets/oct-img4001333.png";
const img4001334 = "/kfc/assets/oct-img4001334.png";
const img685116 = "/kfc/assets/oct-img685116.png";
const img685118 = "/kfc/assets/oct-img685118.png";
const img685119 = "/kfc/assets/oct-img685119.png";
const img022 = "/kfc/assets/oct-img022.png";
const img23 = "/kfc/assets/oct-img23.png";
const img3 = "/kfc/assets/oct-img3.png";
const img24 = "/kfc/assets/oct-img24.png";
const img25 = "/kfc/assets/oct-img25.png";
const img4 = "/kfc/assets/oct-img4.png";
const img26 = "/kfc/assets/oct-img26.png";
const img5 = "/kfc/assets/oct-img5.png";
const img34 = "/kfc/assets/oct-img34.png";
const img35 = "/kfc/assets/oct-img35.png";
const img36 = "/kfc/assets/oct-img36.png";
const img37 = "/kfc/assets/oct-img37.png";
const img38 = "/kfc/assets/oct-img38.png";
const imgRectangle3 = "/kfc/assets/oct-imgRectangle3.png";
const imgRectangle4 = "/kfc/assets/oct-imgRectangle4.png";
const imgRectangle5 = "/kfc/assets/oct-imgRectangle5.png";
const imgRectangle6 = "/kfc/assets/oct-imgRectangle6.png";
const img39 = "/kfc/assets/oct-img39.png";
const img01 = "/kfc/assets/oct-img01.png";
const img03 = "/kfc/assets/oct-img03.png";
const img04 = "/kfc/assets/oct-img04.png";
const img02 = "/kfc/assets/oct-img02.png";
const img202610072134481 = "/kfc/assets/oct-img202610072134481.png";
const img202610072140351 = "/kfc/assets/oct-img202610072140351.png";
const img202610072140191 = "/kfc/assets/oct-img202610072140191.png";
const img202610072140101 = "/kfc/assets/oct-img202610072140101.png";
const img202610072159591 = "/kfc/assets/oct-img202610072159591.png";
const img202610091349541 = "/kfc/assets/oct-img202610091349541.png";
const img1789541259007561 = "/kfc/assets/oct-img1789541259007561.png";
const img8 = "/kfc/assets/oct-img8.png";
const imgSingle21DieCut = "/kfc/assets/oct-imgSingle21DieCut.png";
const imgId03121DieCut = "/kfc/assets/oct-imgId03121DieCut.png";
const img11241DieCut = "/kfc/assets/oct-img11241DieCut.png";
const img21128Fn1DieCut = "/kfc/assets/oct-img21128Fn1DieCut.png";
const img1DieCut = "/kfc/assets/oct-img1DieCut.png";
const img2023111DieCut = "/kfc/assets/oct-img2023111DieCut.png";
const img1789541259007562 = "/kfc/assets/oct-img1789541259007562.png";
const imgGroup16 = "/kfc/assets/oct-imgGroup16.svg";
const img0929316 = "/kfc/assets/oct-img0929316.svg";
const img07Prompt29151 = "/kfc/assets/oct-img07Prompt29151.svg";
const img29273 = "/kfc/assets/oct-img29273.svg";
const img29274 = "/kfc/assets/oct-img29274.svg";
const imgVector = "/kfc/assets/oct-imgVector.svg";
const imgLine19 = "/kfc/assets/oct-imgLine19.svg";
const img = "/kfc/assets/oct-img.svg";
const img1 = "/kfc/assets/oct-img1.svg";
const img2 = "/kfc/assets/oct-img2.svg";
const img6 = "/kfc/assets/oct-img6.svg";
const img034001339 = "/kfc/assets/oct-img034001339.svg";
const img7 = "/kfc/assets/oct-img7.svg";
const img4143020 = "/kfc/assets/oct-img4143020.svg";
const img9 = "/kfc/assets/oct-img9.svg";
const img10 = "/kfc/assets/oct-img10.svg";
const img2944 = "/kfc/assets/oct-img2944.svg";
const imgKfc4262 = "/kfc/assets/figma-kfc-cover-logo.svg";
const img11 = "/kfc/assets/oct-img11.svg";
const img12 = "/kfc/assets/oct-img12.svg";
const img13 = "/kfc/assets/oct-img13.svg";

export default function CalibratedDesign() {
  return (
    <div className="relative size-full" data-node-id="29:2" data-name="KFC"><ScrollPanel start={0} end={882} index={0} color="#a49b87"><KfcCover/></ScrollPanel>
<ScrollPanel start={882} end={1733} index={1} color="#e4002c"><div className="absolute contents left-0 top-[882px]" data-node-id="400:1311" data-name="02 · 项目背景 / 概述与信息流">
        <div className="-translate-x-1/2 absolute h-[851px] left-1/2 top-[882px] w-[1440px]" data-node-id="400:1312" data-name="背景 / 红色底与过渡">
          <ResponsiveImage alt="" className="absolute block inset-0 max-w-none size-full" src="/kfc/assets/figma-background-current.svg" />
        </div>
        <Overview/>
      </div></ScrollPanel>
<ScrollPanel start={1733} end={5200} index={2} color="#c80e32"><div className="-translate-x-1/2 absolute bottom-[66.87%] contents left-[calc(50%-0.5px)] top-[19.63%]" data-node-id="29:114" data-name="04 · 创意推导 / 地理奇观与提示词">
        <div className="absolute bg-white border-24 border-[#c80e32] border-solid h-[1776px] left-[22px] rounded-bl-[58px] rounded-br-[58px] top-[2583px] w-[1395px]" data-node-id="451:28" data-name="背景图形 / 04 · 创意推导 / 地理奇观与提示词 · 451-28" />
        <CardSet/>
        <div className="absolute contents left-[474px] top-[2851px]" data-node-id="1050:148" data-name="step组合标题">
          <div className="-translate-x-1/2 [word-break:break-word] absolute contents left-[calc(50%-5px)] not-italic top-[2883px]" data-node-id="160:328" data-name="章节标题 / STEP 01 创意推导">
            <p className="absolute font-['Bebas_Neue:Regular'] h-[151.516px] leading-[normal] left-[474px] text-[300px] text-[rgba(140,140,140,0.28)] top-[2883px] w-[186px]" data-node-id="116:299">
              “
            </p>
            <p className="absolute font-['Bebas_Neue:Regular'] h-[151.516px] leading-[normal] left-[869px] text-[300px] text-[rgba(140,140,140,0.28)] top-[2920px] w-[87px]" data-node-id="116:302">
              ”
            </p>
            <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] absolute bottom-[77.15%] font-kfc font-black leading-[0] left-[calc(50%-187px)] text-[#242424] text-[34px] top-[22.67%] tracking-[3.4px] w-[368px]" data-node-id="29:140">
              <span className="leading-[normal]">以防你没见</span>
              <span className="leading-[normal] tracking-[1.92px]">过</span>
              <span className="leading-[normal]">这些奇观</span>
            </p>
            <p className="absolute bottom-[77.43%] font-kfc font-normal leading-[0] left-[calc(50%-59px)] text-[#777] text-[14px] top-[22.42%] w-[126px]" data-node-id="119:305">
              <span className="leading-[normal]">{`7 月日常 `}</span>
              <span className="font-sans font-normal leading-[normal]">{`Campaign `}</span>
            </p>
          </div>
          <div className="-translate-x-1/2 absolute bg-[var(--kfc-red,#df0025)] h-[32px] left-[calc(50%+2px)] rounded-[16px] top-[2851px] w-[192px]" data-node-id="119:307" data-name="装饰图形 / 04 · 创意推导 / 地理奇观与提示词 · 119-307" />
          <p className="-translate-x-1/2 [word-break:break-word] absolute bottom-[78.13%] font-kfc font-black leading-[0] left-[calc(50%+1.5px)] not-italic text-[18px] text-center text-white top-[21.69%] w-[167px]" data-node-id="29:120">
            <span className="font-sans font-black leading-[normal]">STEP 01</span>
            <span className="leading-[normal]">{` 创意推导`}</span>
          </p>
        </div>
        <div className="absolute h-[129px] left-[91px] overflow-clip top-[4168px] w-[601px]" data-node-id="102:2" data-name="推文表现 · 小红书">
          <div className="absolute h-[116px] left-0 overflow-clip top-[13px] w-[187px]" data-node-id="102:3" data-name="点赞">
            <div className="absolute left-0 size-[24px] top-0" data-node-id="104:2" data-name="点赞图标">
              <ResponsiveImage alt="" className="absolute block inset-0 max-w-none size-full" src={img1} />
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-kfc font-normal leading-[normal] left-[45px] not-italic text-[#252525] text-[34px] top-[2px] whitespace-nowrap" data-node-id="104:4">
            4万
          </p>
          <div className="absolute h-[158px] left-[-71px] overflow-clip top-[-29px] w-[443px]" data-node-id="102:4" data-name="收藏" />
          <div className="absolute left-[151px] size-[24px] top-[13px]" data-node-id="104:6" data-name="收藏图标">
            <ResponsiveImage alt="" className="absolute block inset-0 max-w-none size-full" src={img2} />
          </div>
          <p className="[word-break:break-word] absolute font-kfc font-normal leading-[normal] left-[193px] not-italic text-[#252525] text-[34px] top-0 whitespace-nowrap" data-node-id="104:8">
            3,438
          </p>
          <p className="[word-break:break-word] absolute font-kfc font-normal leading-[normal] left-[369px] not-italic text-[#252525] text-[34px] top-0 whitespace-nowrap" data-node-id="104:12">
            2,086
          </p>
          <div className="absolute h-[116px] left-[326px] overflow-clip top-[13px] w-[89px]" data-node-id="102:5" data-name="评论">
            <div className="absolute left-0 size-[24px] top-0" data-node-id="104:10" data-name="评论图标">
              <ResponsiveImage alt="" className="absolute block inset-0 max-w-none size-full" src={img6} />
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-kfc font-light h-[38px] leading-[normal] left-0 not-italic text-[#8c8c8c] text-[14px] top-[56px] w-[384px]" data-node-id="105:2">
            数据截止：KFC小红书账号 · 2026.09.10 · 点赞按平台显示值
          </p>
        </div>
        <CampaignCopy/>
        <div className="absolute h-[634px] left-[765px] overflow-clip top-[3646px] w-[617px]" data-node-id="837:11" data-name="message-square">
          <div className="absolute h-[74px] left-[91px] rounded-[5px] shadow-[2px_4px_16.4px_0px_rgba(0,0,0,0.25)] top-[357px] w-[333px]" data-node-id="901:3" data-name="截屏2026-10-07 21.34.48 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
              <ResponsiveImage alt="" className="absolute h-[145.71%] left-[-1.32%] max-w-none top-[-5.71%] w-[112.17%]" src={img202610072134481} />
            </div>
          </div>
          <div className="absolute h-[74px] left-[43px] rounded-[5px] shadow-[2px_4px_16.4px_0px_rgba(0,0,0,0.25)] top-[176px] w-[154px]" data-node-id="901:4" data-name="截屏2026-10-07 21.40.35 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
              <ResponsiveImage alt="" className="absolute h-[271.3%] left-[-5.55%] max-w-none top-[-10.03%] w-[237.04%]" src={img202610072140351} />
            </div>
          </div>
          <div className="absolute h-[74px] left-[355px] rounded-[5px] shadow-[2px_4px_16.4px_0px_rgba(0,0,0,0.25)] top-[299px] w-[219px]" data-node-id="901:6" data-name="截屏2026-10-07 21.40.19 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
              <ResponsiveImage alt="" className="absolute h-[126.2%] left-[-3.13%] max-w-none top-[-0.02%] w-[158.33%]" src={img202610072140191} />
            </div>
          </div>
          <div className="absolute h-[74px] left-[155px] opacity-74 rounded-[5px] shadow-[2px_4px_16.4px_0px_rgba(0,0,0,0.25)] top-[119px] w-[194px]" data-node-id="901:17" data-name="截屏2026-10-07 21.40.10 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
              <ResponsiveImage alt="" className="absolute h-[132.61%] left-[-5.39%] max-w-none top-0 w-[201.72%]" src={img202610072140101} />
            </div>
          </div>
          <div className="absolute h-[74px] left-[155px] rounded-[5px] shadow-[2px_4px_16.4px_0px_rgba(0,0,0,0.25)] top-[238px] w-[225px]" data-node-id="901:18" data-name="截屏2026-10-07 21.59.59 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
              <ResponsiveImage alt="" className="absolute h-[132.18%] left-[-5.59%] max-w-none top-[-0.05%] w-[163.35%]" src={img202610072159591} />
            </div>
          </div>
          <div className="absolute h-[74px] left-[370px] rounded-[5px] shadow-[2px_4px_16.4px_0px_rgba(0,0,0,0.25)] top-[176px] w-[184px]" data-node-id="1040:119" data-name="截屏2026-10-09 13.49.54 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
              <ResponsiveImage alt="" className="absolute h-[125.37%] left-[-4.89%] max-w-none top-0 w-[190.02%]" src={img202610091349541} />
            </div>
          </div>
        </div>
        <div className="absolute contents left-[1299px] top-[4169px]" data-node-id="418:1385" data-name="二维码01">
          <a href="http://xhslink.com/m/6NVkVfr03p0" target="_blank" rel="noopener noreferrer" title="点击查看小红书原帖" aria-label="打开地理奇观系列小红书原帖" className="absolute left-[1299px] overflow-clip rounded-[5px] size-[75px] top-[4169px]" data-node-id="416:1381">
            <div className="absolute h-[1486px] left-[-349px] top-[-1339px] w-[476px]" data-node-id="416:1380" data-name="178954125900-756 1">
              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1789541259007561} />
            </div>
          </a>
        </div>
        <p className="[word-break:break-word] absolute font-sans font-normal inset-[20.52%_81.67%_79.36%_8.68%] leading-[normal] not-italic text-[#767676] text-[14px] tracking-[1.68px]" data-node-id="29:117">
          02 / WORKFLOW
        </p>
      </div><div className="-translate-x-1/2 absolute contents left-1/2 top-[4300px]" data-node-id="465:44" data-name="05 · 传播机制 / 易读·反差·可谈">
        <div className="absolute bg-[#c80e32] h-[300px] left-0 top-[4300px] w-[1440px]" data-node-id="289:514" data-name="背景图形 / 05 · 传播机制 / 易读·反差·可谈 · 289-514" />
        <Principle kind="fluency"/>
        <Principle kind="surprise"/>
        
        <Principle kind="talk"/>
        <div className="absolute h-[63px] left-[-32px] top-[4451px] w-[1504px]" data-node-id="1016:32" data-name="装饰">
          <ResponsiveImage alt="" className="absolute block inset-0 max-w-none size-full" src={img} />
        </div>
      </div><AccountScene/><div className="absolute contents left-[-1px] top-[4600px]" data-node-id="941:71" data-name="06 · 爆款复刻 / 纳凉特辑">
        <div className="-translate-x-1/2 absolute bg-[#242424] h-[671px] left-1/2 top-[4600px] w-[1442px]" data-node-id="451:29" data-name="背景图形 / 06 · 爆款复刻 / 纳凉特辑 · 451-29" />
        <div className="absolute contents left-[133.19px] top-[4688px]" data-node-id="949:33" data-name="案例配图 / 纳凉特辑">
          <div className="absolute h-[466.236px] left-[133.19px] top-[4688px] w-[349.823px]" data-node-id="451:26" data-name="后室 1">
            <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img4001322} />
          </div>
          <div className="absolute h-[233px] left-[483.67px] top-[4688px] w-[174.242px]" data-node-id="451:37" data-name="闪亮 2">
            <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
          </div>
          <div className="absolute h-[233px] left-[483.67px] top-[4921px] w-[174.242px]" data-node-id="451:39" data-name="寂静岭 2">
            <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img4001318} />
          </div>
        </div>
        <div className="-translate-y-1/2 absolute contents left-[778.08px] top-[calc(50%-1637.5px)]" data-node-id="949:32" data-name="案例解读 / 标题·文案·数据">
          <HorrorCopy/>
          <p className="[word-break:break-word] absolute font-kfc font-light h-[23px] leading-[normal] left-[780.08px] not-italic text-[14px] text-white top-[5125px] w-[382.531px]" data-node-id="901:25">
            数据截止：KFC小红书账号 · 2026.09.10 · 点赞按平台显示值
          </p>
          <div className="[word-break:break-word] absolute font-kfc font-black h-[41px] leading-[0] left-[calc(50%+409.57px)] not-italic text-[0px] text-white top-[calc(50%-1891.5px)] tracking-[2.88px] w-[177.246px] whitespace-pre-wrap" data-node-id="829:40446">
            <p className="leading-[1.389] mb-0 text-[23px]">同思路复现爆款</p>
            <p className="leading-[101.20999908447266%] mb-0 text-[24px]">​</p>
            <p className="leading-[101.20999908447266%] text-[24px]">​</p>
          </div>
          <div className="[word-break:break-word] absolute font-kfc font-black h-[41px] leading-[0] left-[calc(50%+422.59px)] not-italic text-[0px] text-white top-[calc(50%-1857.5px)] tracking-[2.88px] w-[168.233px] whitespace-pre-wrap" data-node-id="949:42">
            <p className="font-sans font-light leading-[1.389] mb-0 text-[14px]">Replicating Viral Success</p>
            <p className="leading-[101.20999908447266%] mb-0 text-[24px]">​</p>
            <p className="leading-[101.20999908447266%] text-[24px]">​</p>
          </div>
          <div className="absolute contents left-[1240.74px] top-[5074.98px]" data-node-id="941:52" data-name="组合 / 案例解读 / 标题·文案·数据 · 941-52">
            <a href="http://xhslink.com/m/AmaXSLtQrE" target="_blank" rel="noopener noreferrer" title="点击查看小红书原帖" aria-label="打开纳凉特辑小红书原帖" className="absolute left-[1240.74px] overflow-clip rounded-[5px] size-[65.045px] top-[5074.98px]" data-node-id="941:53">
              <div className="absolute h-[1289px] left-[-302px] top-[-1162px] w-[412.672px]" data-node-id="941:64" data-name="178954125900-756 1">
                <ResponsiveImage alt="" className="absolute block inset-0 max-w-none size-full" height="1289" src={img1789541259007562} width="412.672" />
              </div>
            </a>
          </div>
          <div className="absolute h-[129px] left-[778.08px] overflow-clip top-[5067px] w-[601.835px]" data-node-id="949:11" data-name="推文表现 · 小红书">
            <div className="absolute h-[116px] left-0 overflow-clip top-[13px] w-[187px]" data-node-id="949:12" data-name="点赞">
              <div className="absolute left-0 size-[24px] top-0" data-node-id="949:13" data-name="点赞图标">
                <ResponsiveImage alt="" className="absolute block inset-0 max-w-none size-full" src={img1} />
              </div>
              <p className="[word-break:break-word] absolute font-kfc font-normal leading-[normal] left-[45px] not-italic text-[34px] text-white top-[-11px] whitespace-nowrap" data-node-id="949:18">
                1.5万
              </p>
            </div>
            <div className="absolute h-[158px] left-[-71px] overflow-clip top-[-29px] w-[443px]" data-node-id="949:19" data-name="收藏" />
            <div className="absolute left-[151px] size-[24px] top-[13px]" data-node-id="949:21" data-name="收藏图标">
              <ResponsiveImage alt="" className="absolute block inset-0 max-w-none size-full" src={img2} />
            </div>
            <p className="[word-break:break-word] absolute font-kfc font-normal leading-[normal] left-[193px] not-italic text-[34px] text-white top-0 whitespace-nowrap" data-node-id="949:23">
              954
            </p>
            <p className="[word-break:break-word] absolute font-kfc font-normal leading-[normal] left-[328px] not-italic text-[34px] text-white top-0 whitespace-nowrap" data-node-id="949:24">
              1,307
            </p>
            <div className="absolute h-[116px] left-[285px] overflow-clip top-[13px] w-[89px]" data-node-id="949:25" data-name="评论">
              <div className="absolute left-0 size-[24px] top-0" data-node-id="949:26" data-name="评论图标">
                <ResponsiveImage alt="" className="absolute block inset-0 max-w-none size-full" src={img6} />
              </div>
            </div>
          </div>
        </div>
      </div></ScrollPanel>
<ScrollPanel start={5200} end={6959} index={3} color="#fff"><ScreeningGallery/><div className="-translate-x-1/2 absolute bottom-[47.12%] contents left-[calc(50%+0.5px)] top-[38.64%]" data-node-id="29:150" data-name="07 · 生成筛选 / Prompt 与方案取舍">
          <div className="absolute bg-white h-[1874px] left-0 rounded-[58px] top-[5085px] w-[1440px]" data-node-id="993:2" />
          <div className="absolute contents left-px top-[5189.97px]" data-node-id="945:8" data-name="背景效果 / 淘汰稿斜排与渐隐">
            <div className="absolute contents left-px top-[5189.97px]" data-node-id="945:10" data-name="背景容器 / 淘汰稿阵列">
              <div className="absolute flex h-[460px] items-center justify-center left-px top-[5189.97px] w-[1440px]" data-node-id="265:2">
                <div className="flex-none rotate-180">
                  <div className="blur-[4.35px] h-[460px] opacity-33 overflow-clip relative rounded-[58px] w-[1440px]" data-name="背景 / 黑白淘汰稿与顶部渐隐">
                    <div className="absolute flex h-[2716.065px] items-center justify-center left-[-481px] top-[-741.43px] w-[2320.085px]" data-node-id="272:2">
                      <div className="-rotate-15 flex-none">
                        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative" data-name="图片阵列 / 15°规则斜排">
                          <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0" data-node-id="273:2" data-name="图片阵列 1">
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:3" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img34} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:4" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img35} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:5" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img36} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:6" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img37} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:7" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img34} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:8" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img36} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:9" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img37} />
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0" data-node-id="273:10" data-name="图片阵列 2">
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:11" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img34} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:12" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img35} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:13" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img34} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:14" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img35} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:15" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img38} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:16" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img37} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:17" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img36} />
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0" data-node-id="277:10" data-name="边缘延展 6">
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="277:11" data-name="Rectangle">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img34} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="277:12" data-name="Rectangle">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle3} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="277:13" data-name="Rectangle">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle4} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="277:14" data-name="Rectangle">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle5} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="277:15" data-name="Rectangle">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle6} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="277:16" data-name="Rectangle">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle3} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="277:17" data-name="Rectangle">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img35} />
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0" data-node-id="273:18" data-name="图片阵列 3">
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:19" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img35} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:20" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img37} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:21" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img36} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:22" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img35} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:23" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img36} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:24" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img37} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:25" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img39} />
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0" data-node-id="273:26" data-name="图片阵列 4">
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:27" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img36} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:28" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img37} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:29" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img35} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:30" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img34} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:31" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img38} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:32" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img37} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:33" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img35} />
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0" data-node-id="273:34" data-name="图片阵列 5">
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:35" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img37} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:36" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img38} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:37" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img35} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:38" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img34} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:39" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img37} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:40" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img34} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="273:41" data-name="淘汰过程图 / 3:4">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img38} />
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0" data-node-id="277:2" data-name="边缘延展 5">
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="277:3" data-name="Rectangle">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img35} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="277:4" data-name="Rectangle">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img34} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="277:5" data-name="Rectangle">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img36} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="277:6" data-name="Rectangle">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img37} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="277:7" data-name="Rectangle">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img36} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="277:8" data-name="Rectangle">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img37} />
                            </div>
                            <div className="h-[320px] relative shrink-0 w-[240px]" data-node-id="277:9" data-name="Rectangle">
                              <ResponsiveImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img36} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute h-[1574px] left-0 top-[-36.43px] w-[1440px]" data-node-id="959:2" style={{ backgroundImage: "linear-gradient(180deg, rgb(255, 255, 255) 13.657%, rgba(255, 255, 255, 0.97) 5.0957%, rgba(255, 255, 255, 0.65) 19.318%, rgba(255, 255, 255, 0) 29.559%, rgba(255, 255, 255, 0) 56.582%)" }} data-name="Prompt 衔接 / 白底至透明渐变" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[7.64%] right-[7.99%] top-[6098.97px]" data-node-id="400:1307" data-name="方案对比 / 四张图与筛选理由">
            <div className="absolute contents inset-[48.24%_73.19%_48.85%_7.64%]" data-node-id="992:2" data-name="方案01 / 蛋挞梯田 · 图片与描边">
              <div className="absolute inset-[48.24%_73.19%_48.85%_7.64%]" data-node-id="29:167" data-name="方案01 / 蛋挞梯田·图片">
                <div className="absolute inset-[-2.79%_-3.51%_-2.27%_-3.51%]">
                  <ResponsiveImage alt="" className="block max-w-none size-full" height="402.784" src={img01} width="295.4" />
                </div>
              </div>
            </div>
            <div className="absolute contents inset-[48.24%_29.58%_48.85%_51.25%]" data-node-id="992:4" data-name="方案03 / 陨石坑 · 图片与描边">
              <div className="absolute inset-[48.24%_29.58%_48.85%_51.25%]" data-node-id="29:189" data-name="方案03 / 原味鸡陨石坑·图片">
                <div className="absolute inset-[-1.57%_-3.62%_-3.65%_-3.62%]">
                  <ResponsiveImage alt="" className="block max-w-none size-full" height="403.384" src={img03} width="296" />
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] absolute font-kfc font-normal inset-[47.08%_28.47%_52.27%_52.36%] leading-[0] not-italic text-[#767676] text-[18px]" data-node-id="29:197">
              <p className="leading-[27px] mb-0">淘汰原因：</p>
              <p className="leading-[27px]">缺少原有奇观的锚点，解读成本高，食物不能出现在地上。</p>
            </div>
            <div className="absolute contents left-[72.85%] right-[7.99%] top-[6102.1px]" data-node-id="992:5" data-name="方案04 / 甜筒雪峰 · 图片与描边">
              <div className="absolute inset-[46.37%_7.99%_50.71%_72.85%]" data-node-id="29:200" data-name="方案04 / 甜筒雪峰·入选图片">
                <div className="absolute inset-[-1.57%_-3.62%_-3.65%_-3.62%]">
                  <ResponsiveImage alt="" className="block max-w-none size-full" height="403.384" src={img04} width="296" />
                </div>
              </div>
              <div className="absolute contents left-[73.13%] right-[8.26%] top-[6529.24px]" data-node-id="1050:125" data-name="方案04">
                <p className="[word-break:break-word] absolute font-kfc font-black inset-[49.62%_18.4%_50.19%_73.13%] leading-[0] not-italic text-[#767676] text-[0px] whitespace-pre-wrap" data-node-id="29:198">
                  <span className="font-sans font-black leading-[24px] text-[23px]">{`OP04  `}</span>
                  <span className="leading-[24px] text-[23px]">入选</span>
                </p>
                <div className="[word-break:break-word] absolute font-kfc font-normal inset-[50.02%_8.26%_49.34%_73.13%] leading-[0] not-italic text-[#767676] text-[18px]" data-node-id="29:213">
                  <p className="leading-[27px] mb-0">后期调整方向：</p>
                  <p className="leading-[27px]">色调和谐自然，细节设计景深，进一步突出产品。</p>
                </div>
                <div className="-translate-y-1/2 absolute aspect-[19.999975204467773/20] left-[82.43%] right-[16.25%] top-[calc(50%-38.03px)]" data-node-id="1050:124" data-name="Vector">
                  <div className="absolute inset-[-7.89%]">
                    <ResponsiveImage alt="" className="block max-w-none size-full" src={imgVector} />
                  </div>
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] absolute contents inset-[46.71%_72.22%_52.27%_8.61%] leading-[0] text-[#767676]" data-node-id="949:92" data-name="方案01 / 质感标签与图标">
              <p className="absolute font-['Noto_Sans_SC:Bold'] font-bold inset-[46.71%_76.81%_53.1%_8.61%] text-[0px] whitespace-pre-wrap" data-node-id="29:165">
                <span className="font-sans font-black leading-[24px] not-italic text-[23px]">OP01</span>
                <span className="leading-[24px] text-[23px]">{`  `}</span>
                <span className="font-kfc font-black leading-[24px] not-italic text-[23px]">质感？</span>
              </p>
              <div className="absolute font-kfc font-normal inset-[47.09%_72.22%_52.27%_8.61%] not-italic text-[18px]" data-node-id="29:175">
                <p className="leading-[27px] mb-0">淘汰原因：</p>
                <p className="leading-[27px]">生成结果观感不佳，后期调整质感会相对复杂。</p>
              </div>
            </div>
            <div className="absolute contents inset-[46.35%_50.42%_49.34%_29.79%]" data-node-id="949:93" data-name="方案02 / 构图标签与图标">
              <p className="[word-break:break-word] absolute font-kfc font-black inset-[49.58%_59.44%_50.23%_30.42%] leading-[0] not-italic text-[#767676] text-[0px] whitespace-pre-wrap" data-node-id="949:94">
                <span className="font-sans font-black leading-[24px] text-[23px]">OP02</span>
                <span className="leading-[24px] text-[23px]">{`  构图？`}</span>
              </p>
              <div className="absolute contents inset-[46.35%_50.42%_49.34%_29.79%]" data-node-id="992:3" data-name="方案02 / 蛋挞火山 · 图片与描边">
                <div className="absolute inset-[46.35%_51.04%_50.74%_29.79%]" data-node-id="29:178" data-name="方案02 / 蛋挞火山·图片">
                  <ResponsiveImage alt="" className="absolute block inset-0 max-w-none size-full" height="383.384" src={img02} width="276" />
                </div>
                <div className="[word-break:break-word] absolute font-kfc font-normal inset-[50.02%_50.42%_49.34%_30.42%] leading-[0] not-italic text-[#767676] text-[18px]" data-node-id="29:186">
                  <p className="leading-[27px] mb-0">淘汰原因：</p>
                  <p className="leading-[27px]">画面元素过多，产品在整体视觉表现上不突出。</p>
                </div>
              </div>
            </div>
            <div className="absolute contents inset-[46.68%_37.5%_53.13%_52.36%]" data-node-id="949:97" data-name="方案03 / 结构标签与图标">
              <p className="[word-break:break-word] absolute font-kfc font-black inset-[46.68%_37.5%_53.13%_52.36%] leading-[0] not-italic text-[#767676] text-[0px] whitespace-pre-wrap" data-node-id="949:98">
                <span className="font-sans font-black leading-[24px] text-[23px]">OP03</span>
                <span className="leading-[24px] text-[23px]">{`  结构？`}</span>
              </p>
            </div>
          </div>
          <div className="[word-break:break-word] absolute contents font-kfc font-normal inset-[51.87%_14.79%_47.89%_14.44%] leading-[30px] not-italic text-[#767676] text-[14px]" data-node-id="1050:157">
            <p className="absolute inset-[51.87%_80.56%_47.89%_14.44%]" data-node-id="29:174">
              蛋挞 × 梯田
            </p>
            <p className="absolute inset-[51.87%_36.04%_47.89%_57.08%]" data-node-id="29:196">
              原味鸡 × 陨石坑
            </p>
            <p className="absolute inset-[51.87%_14.79%_47.89%_79.65%]" data-node-id="29:212">
              甜筒 × 雪峰
            </p>
            <p className="absolute inset-[51.87%_57.78%_47.89%_36.6%]" data-node-id="29:185">
              蛋挞 × 火山
            </p>
          </div>
          <div className="-translate-x-1/2 absolute contents left-[calc(50%+0.5px)] top-[5458.98px]" data-node-id="204:445" data-name="章节标题 / STEP 02 生成筛选">
            <div className="-translate-x-1/2 absolute bg-[var(--kfc-red,#df0025)] h-[33.338px] left-[calc(50%+0.5px)] rounded-[16px] top-[5458.98px] w-[185px]" data-node-id="204:441" data-name="装饰图形 / 章节标题 / STEP 02 生成筛选 · 204-441" />
            <p className="-translate-x-1/2 [word-break:break-word] absolute bottom-[58.29%] font-kfc font-black leading-[normal] left-[calc(50%+1px)] not-italic text-[18px] text-center text-white top-[41.52%] w-[146px]" data-node-id="204:442">
              STEP 02 生成筛选
            </p>
          </div>
          <div className="absolute contents left-[107px] top-[5614.97px]" data-node-id="993:17" data-name="生成pro">
            <p className="[word-break:break-word] absolute font-kfc font-black inset-[43.17%_82.57%_56.67%_7.43%] leading-[normal] not-italic text-[#e4002c] text-[18px] whitespace-pre-wrap" data-node-id="29:159">{` 提示词  PROMPT `}</p>
            <PromptMeta/>
            <p className="[word-break:break-word] absolute font-kfc font-black inset-[44.55%_74.93%_55.29%_7.64%] leading-[normal] not-italic text-[#e4002c] text-[18px] whitespace-pre-wrap" data-node-id="915:35">{`负面提示词 Negative  Prompt`}</p>
            <p className="[word-break:break-word] absolute font-kfc font-normal h-[92.46px] leading-[normal] left-[calc(50%-610px)] not-italic text-[#767676] text-[18px] top-[5733.48px] w-[1220px]" data-node-id="188:433">
              巨型炸鸡块「上校鸡块.png」组成的英国巨石阵 Stonehenge「stonehenge.png」，多个巨大的长方形金黄炸鸡块垂直竖立作为石柱炸鸡块横向架在顶部作为横梁，完整还原巨石阵的建筑排列结构。巨石阵矗立在辽阔翠绿的英国乡野草原上，远处绿色丘陵，明亮蓝天，零散柔软白云。略微低机位正面拍摄， 巨大的纪念碑尺度，上方保留大量蓝天留 白。金黄酥脆炸鸡外皮细节清晰，真实高级的食物摄影质感，自然的阳光，柔和的阴影。超现实商业广告摄影，荒诞幽默，色彩明快，高级摄影合成，写实，高细节， 3:4竖版。
            </p>
            <p className="[word-break:break-word] absolute font-kfc font-normal h-[92.46px] leading-[normal] left-[calc(50%-610px)] not-italic text-[#767676] text-[18px] top-[5912.51px] w-[1248px]" data-node-id="915:37">
              岩石纹理，塑料质感，鸡块粘连，悬浮错位，杂乱堆叠，微缩感，餐盘餐具，卡通风，光影失真，无人物，无文字，无包装。
            </p>
          </div>
        </div></ScrollPanel>
<ScrollPanel start={6959} end={7879} index={4} color="#78b9df"><MainComparison/><div className="-translate-x-1/2 absolute contents left-[calc(50%+0.5px)] top-[7034px]" data-node-id="290:515" data-name="章节标题 / STEP 03 后期精修">
          <div className="-translate-x-1/2 absolute bg-[#e4002c] h-[31.928px] left-[calc(50%+0.5px)] rounded-[16px] top-[7034px] w-[185px]" data-node-id="290:516" data-name="装饰图形 / 章节标题 / STEP 03 后期精修 · 290-516" />
          <p className="-translate-x-1/2 [word-break:break-word] absolute bottom-[46.33%] font-kfc font-black leading-[normal] left-[calc(50%+1px)] not-italic text-[18px] text-center text-white top-[53.48%] w-[146px]" data-node-id="290:517">
            STEP 03 后期精修
          </p>
        </div></ScrollPanel>
<ScrollPanel start={7879} end={11441} index={7} color="#242424">
  <DetailPanel kind="food"/><DetailPanel kind="background"/><DetailPanel kind="brand"/>
  <div className="refinement-labels" aria-hidden="true"><span style={{top:8015,left:82}}>BEFORE</span><span style={{top:8015,right:83}}>AFTER</span><span style={{top:11229,left:82}}>BEFORE</span><span style={{top:11229,right:83}}>AFTER</span></div>
  <p className="refinement-caption" style={{top:11314}}>DETAILS MAKE THE DIFFERENCE.</p>
</ScrollPanel>
<ScrollPanel start={11383} end={12398} index={6} color="#121212"><div className="feed-gradient" data-node-id="29:316" aria-hidden="true"><ResponsiveImage src="/kfc/assets/figma-feed-gradient-latest.svg" alt=""/></div><Feed/></ScrollPanel></div>
  );
}
