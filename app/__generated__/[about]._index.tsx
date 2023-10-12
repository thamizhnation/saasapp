/* eslint-disable */
/* This is a auto generated file for building the project */ 

import { type ReactNode, useState } from "react";
import type { PageData } from "~/routes/_index";
import type { Asset } from "@webstudio-is/sdk";
import { Fragment as Fragment, Box as Box, Text as Text, Body as Body, Slot as Slot, Heading as Heading, Paragraph as Paragraph, Image as Image, Button as Button, HtmlEmbed as HtmlEmbed } from "@webstudio-is/sdk-components-react";
import { Link as Link } from "@webstudio-is/sdk-components-react-remix";
import { Dialog as Dialog, DialogTrigger as DialogTrigger, DialogOverlay as DialogOverlay, DialogContent as DialogContent, DialogClose as DialogClose } from "@webstudio-is/sdk-components-react-radix";

export const fontAssets: Asset[] = [{"id":"1e1bfb48-4b7b-4a0b-bd39-87f504ac9e95","name":"SpaceGrotesk_wght__2FXqrSM6Qb5IUNmO8wuzl.woff2","description":null,"projectId":"30e5305e-3f59-4d32-b4c2-bbfb47f19f96","size":49256,"type":"font","createdAt":"2023-06-29T05:05:10.384Z","format":"woff2","meta":{"family":"Space Grotesk","variationAxes":{"wght":{"name":"Weight","min":300,"default":300,"max":700}}}}]
export const pageData: PageData = {"page":{"id":"7xIBU59ZcBYTdlcKpsBLq","name":"About","title":"About","meta":{"description":""},"rootInstanceId":"Aij73qPi0LPlTuTPUho6r","path":"/about"}};
export const user: { email: string | null } | undefined = {"email":"tarframework@gmail.com"};
export const projectId = "30e5305e-3f59-4d32-b4c2-bbfb47f19f96";

const Page = (props: { scripts?: ReactNode }) => {
let [sheetOpen, set$sheetOpen] = useState<any>(false)
let onOpenChange = (open: any) => {
sheetOpen = open
set$sheetOpen(sheetOpen)
}
return <Body
data-ws-id="Aij73qPi0LPlTuTPUho6r"
data-ws-component="Body">
<Slot
data-ws-id="QEphehzbsp6Mu9uZokWha"
data-ws-component="Slot">
<Fragment
data-ws-id="hCrOEWk9TWQYyVMtCWD98"
data-ws-component="Fragment">
<Box
data-ws-id="TWSfZDEQ22jm6ORuD81bO"
data-ws-component="Box">
<Box
data-ws-id="91efxtQVNXMPQCM8RISLw"
data-ws-component="Box">
<Link
data-ws-id="FhAJxmce_FA6XmDDVIW3i"
data-ws-component="Link"
href={"/"}
target={"_self"}
prefetch={"intent"}>
{"SaaS Product"}
</Link>
<Box
data-ws-id="EQtO7ftc5pPiA3i2FtH_4"
data-ws-component="Box">
<Slot
data-ws-id="VQ59heNoGMqJNIKFRycu6"
data-ws-component="Slot">
<Fragment
data-ws-id="xxYyDXmQMWja8n9ltcV9f"
data-ws-component="Fragment">
<Link
data-ws-id="cCSuWXG7aRl8V6QoIt-Dv"
data-ws-component="Link"
href={"/about"}
target={"_self"}
prefetch={"intent"}>
{"About"}
</Link>
</Fragment>
</Slot>
<Slot
data-ws-id="pLaX2lKW_Z_7dRvGwY27_"
data-ws-component="Slot">
<Fragment
data-ws-id="GfDOpAbAX0MmMST7HuvFo"
data-ws-component="Fragment">
<Link
data-ws-id="YZvKvq7TdJPOHQ4gZ0zcp"
data-ws-component="Link"
href={"/pricing"}
target={"_self"}
prefetch={"intent"}>
{"Pricing"}
</Link>
</Fragment>
</Slot>
</Box>
<Box
data-ws-id="dF4T1lt-2AQ3RpBEYt08B"
data-ws-component="Box">
<Slot
data-ws-id="SltUxhQ8TuUqJe2-zxrQR"
data-ws-component="Slot">
<Fragment
data-ws-id="lylqznB2R6E8nBL2OFXyB"
data-ws-component="Fragment">
<Link
data-ws-id="CxxJHG_1OUZ4zqzeW0vKt"
data-ws-component="Link">
{"Try the App"}
</Link>
</Fragment>
</Slot>
</Box>
<Dialog
data-ws-id="cgHhI9Kh3-nHGI_D69LV3"
data-ws-component="@webstudio-is/sdk-components-react-radix:Dialog"
open={sheetOpen}
onOpenChange={onOpenChange}>
<DialogTrigger
data-ws-id="13XUUVUTbo8ogBwnc2-zT"
data-ws-component="@webstudio-is/sdk-components-react-radix:DialogTrigger">
<Button
data-ws-id="CpZHAp7GJUwle5AEC_STZ"
data-ws-component="Button">
<HtmlEmbed
data-ws-id="0emPLKUBAOQTyVrPfa1V5"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path fill-rule=\"evenodd\" d=\"M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z\" clip-rule=\"evenodd\"/></svg>"} />
</Button>
</DialogTrigger>
<DialogOverlay
data-ws-id="Ee5LLqXY5bIaoNU-XdBgo"
data-ws-component="@webstudio-is/sdk-components-react-radix:DialogOverlay">
<DialogContent
data-ws-id="7mJmpqVW07KKydweeQWDB"
data-ws-component="@webstudio-is/sdk-components-react-radix:DialogContent">
<Slot
data-ws-id="3OnqrVo6BLReX06-ng0-X"
data-ws-component="Slot">
<Fragment
data-ws-id="xxYyDXmQMWja8n9ltcV9f"
data-ws-component="Fragment">
<Link
data-ws-id="cCSuWXG7aRl8V6QoIt-Dv"
data-ws-component="Link"
href={"/about"}
target={"_self"}
prefetch={"intent"}>
{"About"}
</Link>
</Fragment>
</Slot>
<Slot
data-ws-id="K6tNqZ99FEVpwhTK6fUTU"
data-ws-component="Slot">
<Fragment
data-ws-id="GfDOpAbAX0MmMST7HuvFo"
data-ws-component="Fragment">
<Link
data-ws-id="YZvKvq7TdJPOHQ4gZ0zcp"
data-ws-component="Link"
href={"/pricing"}
target={"_self"}
prefetch={"intent"}>
{"Pricing"}
</Link>
</Fragment>
</Slot>
<Slot
data-ws-id="TBLweN7E8ZvqwS757x2aA"
data-ws-component="Slot">
<Fragment
data-ws-id="lylqznB2R6E8nBL2OFXyB"
data-ws-component="Fragment">
<Link
data-ws-id="CxxJHG_1OUZ4zqzeW0vKt"
data-ws-component="Link">
{"Try the App"}
</Link>
</Fragment>
</Slot>
<Box
data-ws-id="4VgBDNAygLhwa4uli1-zy"
data-ws-component="Box"
tabIndex={0} />
<DialogClose
data-ws-id="Hrwk_WYZVCMvdwMHYUJqO"
data-ws-component="@webstudio-is/sdk-components-react-radix:DialogClose">
<HtmlEmbed
data-ws-id="Gxg26Cbkilf_rlZq5ULhz"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path fill-rule=\"evenodd\" d=\"M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z\" clip-rule=\"evenodd\"/></svg>"} />
</DialogClose>
</DialogContent>
</DialogOverlay>
</Dialog>
</Box>
</Box>
</Fragment>
</Slot>
<Box
data-ws-id="y0ovkn8orARIOOFqBCavY"
data-ws-component="Box">
<Box
data-ws-id="l6gT2u2sBW1AyrnidCKGr"
data-ws-component="Box">
<Box
data-ws-id="krOa8otC_lr-PReApOjUm"
data-ws-component="Box">
<Image
data-ws-id="KqsPjlsJGROcfkdutawGv"
data-ws-component="Image"
src={"/assets/annie-spratt-dWYU3i-mqEo-unsplash_Bxq7tG0vc6Bhsb97AZfEk.jpeg"}
loading={"eager"} />
</Box>
<Box
data-ws-id="oQGErZO0PHEQBYuO3VNsq"
data-ws-component="Box">
<Heading
data-ws-id="4yQhPsPx7CKfbsbFv7GSC"
data-ws-component="Heading">
{"About"}
</Heading>
<Text
data-ws-id="7hjBxVpPbjZZY1DEZ0sfg"
data-ws-component="Text">
{"Together, we stand dedicated to transforming the way teams work, embracing the power of connection to nurture innovation, and creating an environment where every team member can thrive."}
</Text>
</Box>
</Box>
<Box
data-ws-id="FJISk8X7xoXFT9tli9YGI"
data-ws-component="Box">
<Box
data-ws-id="DJRG8P9fNMzXwaAWduVc2"
data-ws-component="Box">
<Heading
data-ws-id="Ob9A1gLACeZM9WM8NErhM"
data-ws-component="Heading">
{"Meet the Visionaries"}
</Heading>
<Text
data-ws-id="fRbeWRTS0jEyRNgaJkXaf"
data-ws-component="Text">
{"With diverse backgrounds and expertise spanning technology, design, and business strategy, we bring a wealth of knowledge to the table. "}
</Text>
</Box>
<Box
data-ws-id="-BHgfImeEbZMuuejfqHG_"
data-ws-component="Box">
<Box
data-ws-id="JbP0Y5kZoq3Agmn_vxWxC"
data-ws-component="Box">
<Box
data-ws-id="hNvWj0qtQJIKmOf-P_UTB"
data-ws-component="Box">
<Box
data-ws-id="kUmxAfeDen3wlS1gGI0Bf"
data-ws-component="Box">
<Box
data-ws-id="dpoh5YI5b5UgU5gFP5mzb"
data-ws-component="Box">
<Image
data-ws-id="DAGHbhcf4iVuJMHfEzCwn"
data-ws-component="Image"
src={"/assets/ludovic-migneault-EZ4TYgXPNWk-unsplash_C5HgJG2-Yl2EIltDMzCpt.jpeg"} />
</Box>
<Box
data-ws-id="7oCVAiClOho_XCMBg0hv5"
data-ws-component="Box">
<Heading
data-ws-id="ffsq_b52zsMyol1bUrhpg"
data-ws-component="Heading">
{"Jerome Bell"}
</Heading>
<Paragraph
data-ws-id="3Pcu-6ZezwqGQr-xMYH-P"
data-ws-component="Paragraph">
{"Co-founder and CEO"}
</Paragraph>
</Box>
<Box
data-ws-id="aBCYAqIBUO092lnD_vbit"
data-ws-component="Box" />
</Box>
<Box
data-ws-id="ae58U7QqzrfPIpfbOdMdu"
data-ws-component="Box">
<Box
data-ws-id="aRdjGH0A-sDS2qQLcThGN"
data-ws-component="Box">
<Image
data-ws-id="LuKhORPYyhX7i0J4Gzk4U"
data-ws-component="Image"
src={"/assets/rachel-mcdermott-0fN7Fxv1eWA-unsplash_YSxowXdHZzaAV4_H9RO5I.jpeg"} />
</Box>
<Box
data-ws-id="lbywQQ4USXEJuoWZRalm9"
data-ws-component="Box">
<Heading
data-ws-id="exha--kaoHwF0yLH1glbr"
data-ws-component="Heading">
{"Elena Williams"}
</Heading>
<Paragraph
data-ws-id="YEY7FFWYSXbl_DM2cHBh5"
data-ws-component="Paragraph">
{"Co-founder and CTO"}
</Paragraph>
</Box>
<Box
data-ws-id="pVzZzd-Av4TlUbIfYY2Df"
data-ws-component="Box" />
</Box>
</Box>
<Box
data-ws-id="oY1ZFvMr3NOT-JpRHWSDS"
data-ws-component="Box">
<Box
data-ws-id="8SdHBGloKSMADdsoz2Mvl"
data-ws-component="Box">
<Box
data-ws-id="XDFcX4iEu6CdHaqxDRTRx"
data-ws-component="Box">
<Image
data-ws-id="Q7dM5C2-r4z9W3mbujdnt"
data-ws-component="Image"
src={"/assets/daria-pimkina-tYaccl19A3Q-unsplash_CxNvWGlbLj4PmQinO9rYg.jpeg"} />
</Box>
<Box
data-ws-id="EcquI3M10mIqkLgHa3gH7"
data-ws-component="Box">
<Heading
data-ws-id="19ZRkH9RncSQrmCEyZ2rg"
data-ws-component="Heading">
{"Sarah Miller "}
</Heading>
<Paragraph
data-ws-id="X0hdIaoQ39eyMyW_KtU8h"
data-ws-component="Paragraph">
{"Head of Product Design"}
</Paragraph>
</Box>
<Box
data-ws-id="hIy_5qVV9QE7EmCLoa4mf"
data-ws-component="Box" />
</Box>
<Box
data-ws-id="d_nTMgdxuIg75sX68K4IV"
data-ws-component="Box">
<Box
data-ws-id="FqezXZJVy6OIVYgHrGRSL"
data-ws-component="Box">
<Image
data-ws-id="yuWzvn21qpJ4Kfg8C0dMu"
data-ws-component="Image"
src={"/assets/bruce-mars-8YG31Xn4dSw-unsplash_KJktq3e6bvg4m93KCZgFG.jpeg"} />
</Box>
<Box
data-ws-id="TISzZI2Y57Xy2yYjH5eKV"
data-ws-component="Box">
<Heading
data-ws-id="DfW1FpPEQtnWqPArk25Ow"
data-ws-component="Heading">
{"David Ramirez"}
</Heading>
<Paragraph
data-ws-id="ozBbxQF4S-qgn_Yh1p-qV"
data-ws-component="Paragraph">
{"Lead Software Engineer"}
</Paragraph>
</Box>
<Box
data-ws-id="eUKyHBLJ6KGDi46sfrEmr"
data-ws-component="Box" />
</Box>
</Box>
</Box>
<Box
data-ws-id="nj1MYzdWV_0FZ5AnxMvOl"
data-ws-component="Box">
<Box
data-ws-id="Ym9zpcOavGMeZrdM7ZqKX"
data-ws-component="Box">
<Box
data-ws-id="F9cSJQ08nUA_85aTyppOx"
data-ws-component="Box">
<Box
data-ws-id="RgDO_CQD2ZUh2M6rgu8Vg"
data-ws-component="Box">
<Image
data-ws-id="ScbCUoA32ufgfTqunwuGn"
data-ws-component="Image"
src={"/assets/christina-wocintechchat-com-SJvDxw0azqw-unsplash_2Vhjv5ot3JkLy18j5ONvm.jpeg"} />
</Box>
<Box
data-ws-id="EqiglCwEnkxvBs-CfDxks"
data-ws-component="Box">
<Heading
data-ws-id="6KUnQ2Tbl5t90yBYP8JJS"
data-ws-component="Heading">
{"Jessica Parker"}
</Heading>
<Paragraph
data-ws-id="-JGoXrvf0x8gNNCYAALFu"
data-ws-component="Paragraph">
{"Marketing and Communications Manager"}
</Paragraph>
</Box>
<Box
data-ws-id="V3KAIh83j4Ds3sRcLFnhB"
data-ws-component="Box" />
</Box>
<Box
data-ws-id="QM43qR-L_kf7_kQR_nJRb"
data-ws-component="Box">
<Box
data-ws-id="Ew6AOGKdZu3BtRCo_X06z"
data-ws-component="Box">
<Image
data-ws-id="GqgSaJ3ojuvmyxaOu9dLT"
data-ws-component="Image"
src={"/assets/vicky-hladynets-C8Ta0gwPbQg-unsplash_JS3NJkGLTPL9D96tXRp8R.jpeg"} />
</Box>
<Box
data-ws-id="aH92ZEzeMR3rv-Z8zA1eO"
data-ws-component="Box">
<Heading
data-ws-id="90C73zyxN2tRV_XQs_471"
data-ws-component="Heading">
{"Robert Thompson"}
</Heading>
<Paragraph
data-ws-id="frSPziNd5mNoJBU9aGeao"
data-ws-component="Paragraph">
{"Business Development Specialist"}
</Paragraph>
</Box>
<Box
data-ws-id="2_7fMYITutHccBiEoULE8"
data-ws-component="Box" />
</Box>
</Box>
<Box
data-ws-id="Bi8RArKh4Vi2YGEUEHIGq"
data-ws-component="Box">
<Box
data-ws-id="CnAd_amIrnMjCFcqWqwe6"
data-ws-component="Box">
<Box
data-ws-id="miNTCWQJ03RGHuPj8zY0P"
data-ws-component="Box">
<Image
data-ws-id="fXf6nxm7WGsFvcpM0NsD3"
data-ws-component="Image"
src={"/assets/joel-mott-VWGPhJyzMQ4-unsplash_-mcHxc58jA6kom3rcyacw.jpeg"} />
</Box>
<Box
data-ws-id="XQUz0hor3Sx27gsWIbbUm"
data-ws-component="Box">
<Heading
data-ws-id="tfrfOnHQSv7_UwJ09t21P"
data-ws-component="Heading">
{"Melissa Lee"}
</Heading>
<Paragraph
data-ws-id="cxIpc54DrE3N90hf0NNyV"
data-ws-component="Paragraph">
{"UX/UI Designer"}
</Paragraph>
</Box>
<Box
data-ws-id="T5eKkyh_v0zNNLNx_dLcH"
data-ws-component="Box" />
</Box>
<Box
data-ws-id="xg6gF2toApiQ9aQJ-f2Ca"
data-ws-component="Box" />
</Box>
</Box>
</Box>
</Box>
<Box
data-ws-id="cnr-e3CwEJrTFptgAQSwv"
data-ws-component="Box">
<Box
data-ws-id="VZKri5tXDggaswadXecNl"
data-ws-component="Box">
<Heading
data-ws-id="p_fjVqVKt0_ouMrm0TraD"
data-ws-component="Heading">
{"Our Investors"}
</Heading>
<Text
data-ws-id="pgtBTdeNiaeYtfqeN87HV"
data-ws-component="Text">
{"Our investors' trust in our team and our product inspires us to push boundaries, think creatively, and never settle for the status quo."}
</Text>
</Box>
<Box
data-ws-id="FDqv4pvBlfYOjCzYPEZdf"
data-ws-component="Box">
<Box
data-ws-id="yJNgCa6i1ZTxh2jqlB2e_"
data-ws-component="Box">
<Box
data-ws-id="Y1SEmO3etbUqTdY8t_rXy"
data-ws-component="Box">
<Box
data-ws-id="E7a8ay6Kk09LMyrdNQ2MD"
data-ws-component="Box">
<Box
data-ws-id="vRA5Cim4Trc9cCPlzc-wm"
data-ws-component="Box">
<Image
data-ws-id="_Z_nbuXMarQm1wTKwZYBj"
data-ws-component="Image"
src={"/assets/ashton-bingham-EQFtEzJGERg-unsplash_n3B2v0oYFr8F3I9AcvNQP.jpeg"} />
</Box>
<Box
data-ws-id="Q08XcskX3DpBTRVZ3tqVt"
data-ws-component="Box">
<Heading
data-ws-id="D2oczgUKN7INqQ8nDd1C1"
data-ws-component="Heading">
{"Thomas Anderson"}
</Heading>
<Paragraph
data-ws-id="K_3JVeCvgouGt0GBiWJSV"
data-ws-component="Paragraph">
{"Venture Capital Partners, Managing Director"}
</Paragraph>
</Box>
</Box>
<Box
data-ws-id="DKDF6PFiwbKQUeKBnagxp"
data-ws-component="Box">
<Box
data-ws-id="5er1IbnT1wzFlADEjnz94"
data-ws-component="Box">
<Image
data-ws-id="tdTcTUxZBEWwuhUA594LO"
data-ws-component="Image"
src={"/assets/sigmund-jzz_3jWMzHA-unsplash_b_VEz4vDDo56YTgGRuVhA.jpeg"} />
</Box>
<Box
data-ws-id="EVYYxjiCjBzKeqFi6VMSw"
data-ws-component="Box">
<Heading
data-ws-id="J_a7lfwe0EJjg_F5ohzDP"
data-ws-component="Heading">
{"Jessica Martinez"}
</Heading>
<Paragraph
data-ws-id="HDXZ380j2QehQ2jRWna3X"
data-ws-component="Paragraph">
{"Tech Innovations Fund, Principal Investor"}
</Paragraph>
</Box>
</Box>
</Box>
<Box
data-ws-id="5ASv0Y9gW1syeVA__xDjv"
data-ws-component="Box">
<Box
data-ws-id="UnlAbUrA9WaWbzrCg--P6"
data-ws-component="Box">
<Box
data-ws-id="-ZdIOQOTFk2BgZ3nO72Jw"
data-ws-component="Box">
<Image
data-ws-id="WFQsxzFqj7kpnWi3wXISu"
data-ws-component="Image"
src={"/assets/foto-sushi-6anudmpILw4-unsplash_9L8RY7TY_Q1EPcvxO_oFX.jpeg"} />
</Box>
<Box
data-ws-id="XMClOXjqqj1C7S5F88sRx"
data-ws-component="Box">
<Heading
data-ws-id="WIe_KKFBtSWKJOx9vMfW4"
data-ws-component="Heading">
{"David Wilson"}
</Heading>
<Paragraph
data-ws-id="3BNgvFgBEwmay3rR3DesZ"
data-ws-component="Paragraph">
{"Growth Ventures Inc., Senior Partner"}
</Paragraph>
</Box>
</Box>
<Box
data-ws-id="FQbtc4ny7V8xjPUtA3MqI"
data-ws-component="Box">
<Box
data-ws-id="FxQrMynJ7Uq7B7PIkmXNO"
data-ws-component="Box">
<Image
data-ws-id="zhA3mc9ROh4CihqFD6bI8"
data-ws-component="Image"
src={"/assets/christina-wocintechchat-com-7JGjoSVfIDM-unsplash_2iRG6rykIJrYxZ5IjPWGj.jpeg"} />
</Box>
<Box
data-ws-id="T4NpZiLEsG7jtZ36r3HfJ"
data-ws-component="Box">
<Heading
data-ws-id="9bLRXLFEfo9XBKHvKXYwZ"
data-ws-component="Heading">
{"Rachel Chen"}
</Heading>
<Paragraph
data-ws-id="uvZOHZwyMbf1PuxOtq1XN"
data-ws-component="Paragraph">
{"Impact Investments Group, Head of Investments"}
</Paragraph>
</Box>
</Box>
</Box>
</Box>
<Box
data-ws-id="Dv9pg_7vl6k2OeM5CFLWo"
data-ws-component="Box">
<Box
data-ws-id="VrVTk_oSzrxS_Q57tLCMa"
data-ws-component="Box">
<Box
data-ws-id="KpMUv-_BcXTa6ksYvrw_h"
data-ws-component="Box">
<Box
data-ws-id="eFkpkOLjEsubh0U_m7Mmz"
data-ws-component="Box">
<Image
data-ws-id="I3tindkPwX4cLrafudm-_"
data-ws-component="Image"
src={"/assets/luis-villasmil-hh3ViD0r0Rc-unsplash_59b2CxQV6HODjB0t2loEF.jpeg"} />
</Box>
<Box
data-ws-id="dTIMUCrn8C_NdWM5SvKlM"
data-ws-component="Box">
<Heading
data-ws-id="YgLe4tL5vAg1zG3EkKUm_"
data-ws-component="Heading">
{"Jonathan Patel"}
</Heading>
<Paragraph
data-ws-id="xiPeu_or6z45Pw7HYsP-9"
data-ws-component="Paragraph">
{"Global Innovators Fund, Managing Partner"}
</Paragraph>
</Box>
</Box>
<Box
data-ws-id="8JqroTaQBdU7Yirz0C2We"
data-ws-component="Box">
<Box
data-ws-id="lqgmGRHBsu71yj4PaqXGl"
data-ws-component="Box">
<Image
data-ws-id="iOBp1M8075Q_x5QhA9yfv"
data-ws-component="Image"
src={"/assets/jake-nackos-IF9TK5Uy-KI-unsplash_PGNJ6DB8F_VD49AWLsQcW.jpeg"} />
</Box>
<Box
data-ws-id="_x3yQ7zrwZ8VZHQVJcLJ2"
data-ws-component="Box">
<Heading
data-ws-id="kR5xKldJU9G9psPpLseZ9"
data-ws-component="Heading">
{"Laura Sanchez"}
</Heading>
<Paragraph
data-ws-id="v9RMQW35MhNsOKfn0DfbE"
data-ws-component="Paragraph">
{"Sustainable Futures Capital, Investment Analyst"}
</Paragraph>
</Box>
</Box>
</Box>
<Box
data-ws-id="d3kuBtzHlozOSX8RL2yL7"
data-ws-component="Box">
<Box
data-ws-id="6i6EsYUbIZpRFiWqAYyAt"
data-ws-component="Box">
<Box
data-ws-id="KuAZUMRsyqDAOt9_ve6NT"
data-ws-component="Box">
<Image
data-ws-id="0_SL7kYubQYOSBMUPDaJC"
data-ws-component="Image"
src={"/assets/thai-an-E2Yd6K2A3fE-unsplash_Tg8ZBdBE4SGkh2_5hQ0tP.jpeg"} />
</Box>
<Box
data-ws-id="ChGADBNm30EX2aD9G0ZUc"
data-ws-component="Box">
<Heading
data-ws-id="swn5DQ7eTtIUw-xiwEluD"
data-ws-component="Heading">
{"Michael Lee"}
</Heading>
<Paragraph
data-ws-id="pKAuhgEBNz-FS5ypg35Hk"
data-ws-component="Paragraph">
{"Strategic Ventures Ltd., Managing Director"}
</Paragraph>
</Box>
</Box>
<Box
data-ws-id="s0gKMKKf0DSM-_NCfUymx"
data-ws-component="Box">
<Box
data-ws-id="ImxFTamSdnj58VUwMuQP4"
data-ws-component="Box">
<Image
data-ws-id="xV5VJN7PrQ42LT0G9ophv"
data-ws-component="Image"
src={"/assets/edward-cisneros-_H6wpor9mjs-unsplash_wSHJ4intTHufcvH563kj2.jpeg"} />
</Box>
<Box
data-ws-id="7kGFi4uOIK-lZ2KNNEAtz"
data-ws-component="Box">
<Heading
data-ws-id="PeTkrcQ4RoS7oaXFjlsfs"
data-ws-component="Heading">
{"Melissa Thompson"}
</Heading>
<Paragraph
data-ws-id="9mEkQwTFgLZJOJ5NpiCA3"
data-ws-component="Paragraph">
{"FutureTech Fund, Investment Manager"}
</Paragraph>
</Box>
</Box>
</Box>
</Box>
</Box>
</Box>
</Box>
<Slot
data-ws-id="RB-59O22rSqexBPG1nF0Y"
data-ws-component="Slot">
<Fragment
data-ws-id="LXAE0omYOBDRhwHgmjbxd"
data-ws-component="Fragment">
<Box
data-ws-id="etSoQ_YpqbbjYSdf5gDn_"
data-ws-component="Box">
<Box
data-ws-id="T3kf2U4vSUW1jD4y_NEma"
data-ws-component="Box">
<Box
data-ws-id="_5z42eLI3fQfzg74Ywbb1"
data-ws-component="Box">
<Link
data-ws-id="8_lYbS23oem75lqyneJKk"
data-ws-component="Link">
{"SaaS Product"}
</Link>
<Box
data-ws-id="ZyWzCL9VJFsmbTZBNU9-c"
data-ws-component="Box">
<Text
data-ws-id="xJocVo6XEiFAGYZU4WEBy"
data-ws-component="Text">
{"Company"}
</Text>
<Link
data-ws-id="OemFDMxMz1dQm6ZNizOMu"
data-ws-component="Link">
{"Team"}
</Link>
<Link
data-ws-id="RyCe2Bi_tJJxSIa6o--Yd"
data-ws-component="Link">
{"Privacy Policy"}
</Link>
<Link
data-ws-id="fymS9Wubd_R1Ni-24Zyx6"
data-ws-component="Link">
{"Terms of Service"}
</Link>
</Box>
</Box>
<Box
data-ws-id="jNyPk4jlM6WQIun_94FT1"
data-ws-component="Box">
<Box
data-ws-id="tAD0q_c3Lcz3S18VRY9VO"
data-ws-component="Box">
<Text
data-ws-id="dJ3D3qquPPEVbf4FQytOh"
data-ws-component="Text">
{"Community"}
</Text>
<Link
data-ws-id="KF0zY92pvFsNrmUkiD2iq"
data-ws-component="Link">
{"Github"}
</Link>
<Link
data-ws-id="k_TUj7O7myu3xDr7wGUNx"
data-ws-component="Link">
{"Discord"}
</Link>
<Link
data-ws-id="dLWBQCL9gyAllSg5RXwyU"
data-ws-component="Link">
{"Twitter"}
</Link>
<Link
data-ws-id="GFaKIM1XZQEAZ-qwxKOx_"
data-ws-component="Link">
{"Product Hunt"}
</Link>
</Box>
<Box
data-ws-id="EtrG_tdm2KROkPiB9DlEM"
data-ws-component="Box">
<Text
data-ws-id="sQd2JlvN3_sraUU2JjqrV"
data-ws-component="Text">
{"Product"}
</Text>
<Link
data-ws-id="_-DoDHqUkbX9m6W1L4jk_"
data-ws-component="Link">
{"Pricing"}
</Link>
<Link
data-ws-id="av5H5w4bddISdUjP9Fxl0"
data-ws-component="Link">
{"Download"}
</Link>
<Link
data-ws-id="CP_4Oip6tvDePQJWy5Pma"
data-ws-component="Link">
{"Source Code"}
</Link>
</Box>
</Box>
</Box>
</Box>
</Fragment>
</Slot>
{props.scripts}
</Body>
}


export { Page }


  export const pagesPaths = new Set(["","/pricing","/about"])

  export const formsProperties = new Map<string, { method?: string, action?: string }>([])
  
