/* eslint-disable */
/* This is a auto generated file for building the project */ 

import { type ReactNode, useState } from "react";
import type { PageData } from "~/routes/_index";
import type { Asset } from "@webstudio-is/sdk";
import { Body as Body, Slot as Slot, Fragment as Fragment, Box as Box, Text as Text, Heading as Heading, Image as Image, Paragraph as Paragraph, Separator as Separator, Bold as Bold, Button as Button, HtmlEmbed as HtmlEmbed } from "@webstudio-is/sdk-components-react";
import { Link as Link } from "@webstudio-is/sdk-components-react-remix";
import { Dialog as Dialog, DialogTrigger as DialogTrigger, DialogOverlay as DialogOverlay, DialogContent as DialogContent, DialogClose as DialogClose } from "@webstudio-is/sdk-components-react-radix";

export const fontAssets: Asset[] = [{"id":"1e1bfb48-4b7b-4a0b-bd39-87f504ac9e95","name":"SpaceGrotesk_wght__2FXqrSM6Qb5IUNmO8wuzl.woff2","description":null,"projectId":"30e5305e-3f59-4d32-b4c2-bbfb47f19f96","size":49256,"type":"font","createdAt":"2023-06-29T05:05:10.384Z","format":"woff2","meta":{"family":"Space Grotesk","variationAxes":{"wght":{"name":"Weight","min":300,"default":300,"max":700}}}}]
export const pageData: PageData = {"page":{"id":"9xR9hAVSFQsls07ekq14k","name":"Home","title":"Home","meta":{},"rootInstanceId":"yciogBG54zs9zd-BUDKkU","path":""}};
export const user: { email: string | null } | undefined = {"email":"tarframework@gmail.com"};
export const projectId = "30e5305e-3f59-4d32-b4c2-bbfb47f19f96";

const Page = (props: { scripts?: ReactNode }) => {
let [sheetOpen, set$sheetOpen] = useState<any>(false)
let onOpenChange = (open: any) => {
sheetOpen = open
set$sheetOpen(sheetOpen)
}
return <Body
data-ws-id="yciogBG54zs9zd-BUDKkU"
data-ws-component="Body">
<Slot
data-ws-id="SiScM4cpvzPd6wia0aISy"
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
data-ws-id="KFt3pU_7bNjPUtVAM_PLs"
data-ws-component="Box">
<Box
data-ws-id="8PAZtVQKXTYOaVKPn6qdX"
data-ws-component="Box">
<Heading
data-ws-id="IT51c7FjAaBN9pfwTVIaE"
data-ws-component="Heading">
{"Unleash the Power of Human-Centered Project Management"}
</Heading>
<Text
data-ws-id="gB69_N0642JvOMPgWZCGp"
data-ws-component="Text">
{"Revolutionize Collaboration, Cultivate Results, and Embrace the Human Touch"}
</Text>
<Box
data-ws-id="z2H3DBkV5rCM3NPaXnQyv"
data-ws-component="Box">
<Link
data-ws-id="csy41CjHsFYwXBXVp3Nyv"
data-ws-component="Link">
{"Join our Discord"}
</Link>
<Link
data-ws-id="tR3vEoi_QLIU5p8z9kz10"
data-ws-component="Link">
{"Try the App"}
</Link>
</Box>
</Box>
<Box
data-ws-id="MuR6YNg0tASN8bjEROCUu"
data-ws-component="Box">
<Image
data-ws-id="4hnw7JxeTT89_ZkGPe2Am"
data-ws-component="Image"
src={"/assets/Features_1.1_C4sg2-k5JE9lwGH1oFAxX.jpg"} />
</Box>
<Box
data-ws-id="TXgdqKTZqfuMWhIPnAEYK"
data-ws-component="Box">
<Box
data-ws-id="JJQ6fvuNAHo96VzjHfmW2"
data-ws-component="Box">
<Heading
data-ws-id="o0Za1nGa2xP-2My4seoCY"
data-ws-component="Heading">
{"Seamlessly Blend Efficiency and Personal Connection"}
</Heading>
<Text
data-ws-id="IFV1xErotBG5OOUkTYcaY"
data-ws-component="Text">
{"Our innovative SaaS solution is designed to streamline communication and optimize team collaboration, all while preserving the personal touch that fuels creativity and fosters camaraderie."}
</Text>
</Box>
<Box
data-ws-id="Npoj--qYoiz2Vq_28lOE7"
data-ws-component="Box">
<Box
data-ws-id="cHz95BbUB--EFSf8dLV6n"
data-ws-component="Box">
<Image
data-ws-id="qdi_TKOpfhGFjhVqxGm3x"
data-ws-component="Image"
src={"/assets/Features_1.2_VgPZ6iAQigOpBf-Mn33W3.jpg"} />
</Box>
<Box
data-ws-id="fBvvkiTcc4H8QdZTxNWLx"
data-ws-component="Box">
<Heading
data-ws-id="qPqm_tZrFEYDAZv9xaOFb"
data-ws-component="Heading">
<Bold
data-ws-id="djoJZhznveMly5yeZKAfO"
data-ws-component="Bold">
{"Virtual Team Building Activities"}
</Bold>
</Heading>
<Text
data-ws-id="Mhlmn6y2YFcK5svHwuQ2-"
data-ws-component="Text">
{"Incorporate virtual team-building games and activities directly into the platform to foster camaraderie and strengthen relationships among team members, even if they are geographically dispersed."}
</Text>
<Link
data-ws-id="I7dO95CAhObO7pSN9_W0r"
data-ws-component="Link">
{"Try the App"}
</Link>
</Box>
</Box>
<Box
data-ws-id="tl2jLKlnMsOvtlRs7n3r7"
data-ws-component="Box">
<Box
data-ws-id="B_PnriDK_1PsJufLllMn6"
data-ws-component="Box">
<Image
data-ws-id="2ZiROeh8wjCu9KsC-B6gp"
data-ws-component="Image"
src={"/assets/Features_1.3_sCXJ-BElFe5G5qdreXLl2.jpg"} />
</Box>
<Box
data-ws-id="x0mrMHOZ90pOfPCCc5RQA"
data-ws-component="Box">
<Heading
data-ws-id="-nuiQYW0ug0ew-ppqTzHp"
data-ws-component="Heading">
<Bold
data-ws-id="mfjkvaBwr5XFzgGoMEXRo"
data-ws-component="Bold">
{"Empathy Dashboard"}
</Bold>
</Heading>
<Text
data-ws-id="hGPoAEOb95xNcCESH7pa8"
data-ws-component="Text">
{"Integrate an empathy dashboard that allows team members to express their emotions or well-being through emojis or short status updates, helping others understand their current state and offer support when needed."}
</Text>
<Link
data-ws-id="dVeYTizLX4FAFN5VtF9k1"
data-ws-component="Link">
{"Try the App"}
</Link>
</Box>
</Box>
</Box>
<Box
data-ws-id="1PnlhV97NrtGz7T87vPT3"
data-ws-component="Box">
<Box
data-ws-id="5hwKDN6W-9gU9GyYILKFh"
data-ws-component="Box">
<Heading
data-ws-id="M_Rv2zfIjIc-1M9kXU1Oq"
data-ws-component="Heading">
{"4 Power Features Everyone Needs to See"}
</Heading>
<Text
data-ws-id="oIggbSbOJkD2s1ldXspbe"
data-ws-component="Text">
{"These unique features can create a more inclusive, engaging, and productive environment for teams "}
</Text>
</Box>
<Box
data-ws-id="F91Nldn4Ue799PVlcLjjy"
data-ws-component="Box">
<Box
data-ws-id="HhvovkoTEnWxZuKRG1izP"
data-ws-component="Box">
<Box
data-ws-id="vbSAw-knb0qAF8VPpWjVK"
data-ws-component="Box">
<Box
data-ws-id="-HCB9trrAOYBcr6xED8Xn"
data-ws-component="Box">
<Image
data-ws-id="ubK4VatcLY0o-35bZ2dLl"
data-ws-component="Image"
src={"/assets/Features_2.1_NIscvc7PVCAtEejnPT2I3.png"} />
</Box>
<Heading
data-ws-id="4dgL2HD5RMihMMnKa4ehv"
data-ws-component="Heading">
<Bold
data-ws-id="wP1Kh6hgjsBxSTMVkFFm2"
data-ws-component="Bold">
{"Recognition and Kudos System"}
</Bold>
</Heading>
<Paragraph
data-ws-id="oFNjby5kD-1GsBEx-Zbsy"
data-ws-component="Paragraph">
{"Create a dedicated space within the platform for team members to publicly recognize and appreciate each other's efforts and achievements."}
</Paragraph>
</Box>
<Box
data-ws-id="W-QSYzsqKgTJdxixukaxz"
data-ws-component="Box">
<Box
data-ws-id="I6wzGycA5PrGgkoOBRT0V"
data-ws-component="Box">
<Image
data-ws-id="9KMNX72hdSqDMXgAuTcKK"
data-ws-component="Image"
src={"/assets/Features_2.2_iIeJXZR4vR2mQD4yPOIW1.png"} />
</Box>
<Heading
data-ws-id="_qNLLBuO13NuLSZg6p57m"
data-ws-component="Heading">
<Bold
data-ws-id="i9RVWEg3lKxy45pYGrh2S"
data-ws-component="Bold">
{"Personalized Avatars and Profiles"}
</Bold>
</Heading>
<Paragraph
data-ws-id="Wsf0j_EPoiYqYvjpq3J-x"
data-ws-component="Paragraph">
{"Allow users to create customizable avatars and profiles that showcase their personalities, helping team members connect on a more personal level beyond just work-related discussions"}
</Paragraph>
</Box>
</Box>
<Box
data-ws-id="Y0UdmF2hrH3AvxOJvs2Fz"
data-ws-component="Box">
<Box
data-ws-id="fJKYi0adVDK7Bt4u1gIZb"
data-ws-component="Box">
<Box
data-ws-id="xsYGB-Vfqn8tCGLniKFyz"
data-ws-component="Box">
<Image
data-ws-id="qzvuHrBuweB0wtIjIUeFg"
data-ws-component="Image"
src={"/assets/Features_2.3_x8WxiEDSffKUEbdqQdEhA.png"} />
</Box>
<Heading
data-ws-id="O1v7BgQDtByFm-ildmlqn"
data-ws-component="Heading">
<Bold
data-ws-id="mUFmHZ2dfx7ILPIg2IAqB"
data-ws-component="Bold">
{"Collaborative Ideation Spaces"}
</Bold>
</Heading>
<Paragraph
data-ws-id="Frw0SS-3Nc5QuJsCUiLzy"
data-ws-component="Paragraph">
{"Design virtual brainstorming and ideation spaces that facilitate real-time collaboration, enabling team members to visualize ideas, share feedback, and build upon each other's creativity"}
</Paragraph>
</Box>
<Box
data-ws-id="RaG82Qpejnuh_blNXDa4M"
data-ws-component="Box">
<Box
data-ws-id="7K6msjzpWj_7nyMZDX6Xp"
data-ws-component="Box">
<Image
data-ws-id="P4SxjJkX2R_idjUkZgfud"
data-ws-component="Image"
src={"/assets/Features_2.4_2wCq34wGy7mXEZheN65Ht.jpg"} />
</Box>
<Heading
data-ws-id="XpKJxG8mwCYPsLf5gL0zc"
data-ws-component="Heading">
<Bold
data-ws-id="SLF7GgDxOH_P2qWpuWNie"
data-ws-component="Bold">
{"Adaptive Task Prioritization"}
</Bold>
</Heading>
<Paragraph
data-ws-id="ha4xx8wHlYroaKCHjMyZk"
data-ws-component="Paragraph">
{"Utilize machine learning algorithms to analyze individual work patterns and automatically adapt task prioritization, ensuring each team member's workload aligns with their peak productivity times"}
</Paragraph>
</Box>
</Box>
</Box>
</Box>
<Box
data-ws-id="55LIleIGwKA_HjsEC3Itt"
data-ws-component="Box">
<Box
data-ws-id="dAzVmqUfB3Lm7aFZC4jLE"
data-ws-component="Box">
<Heading
data-ws-id="UPDaGsHQ5LAvAm7mA5rkP"
data-ws-component="Heading">
{"Impactful Experiences: Testimonials from Teams that Transformed with Us"}
</Heading>
<Text
data-ws-id="Z1jz2yXQOXPsUhJlGnwdT"
data-ws-component="Text">
{"From small startups to multinational enterprises, our solution has empowered teams to break down barriers, forge stronger bonds, and achieve remarkable results."}
</Text>
</Box>
<Box
data-ws-id="1GPWE2q-i6T70JXllYPM3"
data-ws-component="Box">
<Box
data-ws-id="4eIUfOFvif5Jd6TKXstIq"
data-ws-component="Box">
<Box
data-ws-id="177r1lN8hSPbPeeFA7yTS"
data-ws-component="Box">
<Box
data-ws-id="g9l5uK5JK4j-tZTBTTETR"
data-ws-component="Box">
<Box
data-ws-id="bwJ0uRpb8mM9uKyT9DOUg"
data-ws-component="Box">
<Heading
data-ws-id="DEPb5lkg6fuhEm0F5wBEA"
data-ws-component="Heading">
{"\"Our team's morale skyrocketed\""}
</Heading>
<Box
data-ws-id="anNihXulvkXHCGil3SOpJ"
data-ws-component="Box">
<Box
data-ws-id="KxQHv7rPurWcK9cXlX223"
data-ws-component="Box" />
<Box
data-ws-id="LCArjQeExlYSJrvrJec_-"
data-ws-component="Box" />
<Box
data-ws-id="R4opvdj1By_u04lCbB-0H"
data-ws-component="Box" />
<Box
data-ws-id="ofZ8Cww80EuTICgekhI4T"
data-ws-component="Box" />
<Box
data-ws-id="q3SwJr2N5Wq8sJmsx8Fnn"
data-ws-component="Box" />
</Box>
</Box>
<Paragraph
data-ws-id="VJlKbwMhJ35vHkplaD_sA"
data-ws-component="Paragraph">
{"The intuitive interface and innovative collaboration features helped us seamlessly connect, even across remote locations. But what truly stood out was the emphasis on empathy and recognition within the platform. We started using the Kudos system to celebrate each other's wins, and the positive energy it generated was remarkable. Our team's morale skyrocketed, and we achieved our project milestones faster than ever. "}
</Paragraph>
</Box>
<Box
data-ws-id="UL4fhMfwVjBc-cxcbxKw4"
data-ws-component="Box">
<Box
data-ws-id="u9k4M3yCJoeLQRfMGX-OZ"
data-ws-component="Box">
<Image
data-ws-id="ZzqR7cVDPQnBSJnI7t7Bv"
data-ws-component="Image"
src={"/assets/andrew-power-y9L5-wmifaY-unsplash_dMh4R7uKXN1lnM5k2QTmt.jpeg"} />
</Box>
<Box
data-ws-id="Uy9TgB7PWCWFl6iWR9K3-"
data-ws-component="Box">
<Text
data-ws-id="eYjqUkYtiMy49qo1WFbsU"
data-ws-component="Text">
{"John, Project Manager"}
</Text>
<Text
data-ws-id="oB09N5RnujuRTPjtyj0-9"
data-ws-component="Text">
{" XYZ Tech Solutions"}
</Text>
</Box>
</Box>
</Box>
<Box
data-ws-id="XegLW7ouMAtNxDe46MwRX"
data-ws-component="Box">
<Box
data-ws-id="WnL5_cp0irtOLmwOd0NVm"
data-ws-component="Box">
<Box
data-ws-id="Q9D9IeQEKGqCoCctLeUGn"
data-ws-component="Box">
<Heading
data-ws-id="Z5T2vAb-a8ceatEabbpZ0"
data-ws-component="Heading">
{"\"SaaS Product transformed the way our marketing team operates\""}
</Heading>
<Box
data-ws-id="ZJPilMxAVYEW3mMpFt33-"
data-ws-component="Box">
<Box
data-ws-id="NzpDfMZRPvH6AQhoeIozP"
data-ws-component="Box" />
<Box
data-ws-id="vdtGqzp5ti30k1fUzuDSk"
data-ws-component="Box" />
<Box
data-ws-id="8Uo24LB1ZFbGrBNGCdJ4t"
data-ws-component="Box" />
<Box
data-ws-id="8f1VCeDr6dMavnRHtYj0c"
data-ws-component="Box" />
<Box
data-ws-id="WAl1_nmWmpQdorwvAaQbz"
data-ws-component="Box" />
</Box>
</Box>
<Paragraph
data-ws-id="46wBFrNP0f_Nvn6OT6C4N"
data-ws-component="Paragraph">
{"The interactive progress celebrations injected so much fun into our projects, and it felt like a virtual party every time we hit a milestone. The empathy dashboard allowed us to express our emotions and well-being openly, fostering a supportive environment where we felt comfortable discussing our challenges."}
</Paragraph>
</Box>
<Box
data-ws-id="-xqMarHLSv1GeM1cwJM1k"
data-ws-component="Box">
<Box
data-ws-id="SvAlqWyeZmcHcnJKsC7sr"
data-ws-component="Box">
<Image
data-ws-id="x4XjpM9cMdlqfJ9lQSGVi"
data-ws-component="Image"
src={"/assets/clay-elliot-mpDV4xaFP8c-unsplash_TxKpZ1DjGYzXIYNJ0iwW1.jpeg"} />
</Box>
<Box
data-ws-id="jubY3EP8RWdaoWqiU-OyW"
data-ws-component="Box">
<Text
data-ws-id="lpz93qP5z7l6zneLjmTmF"
data-ws-component="Text">
{"Sarah, Marketing Specialist"}
</Text>
<Text
data-ws-id="oiUz-t9eze5zWn9nWbBKP"
data-ws-component="Text">
{"ABC Creative Agency"}
</Text>
</Box>
</Box>
</Box>
</Box>
<Box
data-ws-id="393cnAjV62UkrqgU32Klf"
data-ws-component="Box">
<Box
data-ws-id="A8HfuREWtHmzqjHxsSKa5"
data-ws-component="Box">
<Box
data-ws-id="8f3Hldq0sdBRmgn1SfqH5"
data-ws-component="Box">
<Box
data-ws-id="r7yRTXT6tNolKn-fiHjGY"
data-ws-component="Box">
<Heading
data-ws-id="LrJ_3kjiXv8jQs0fNyS6y"
data-ws-component="Heading">
{"\"the secret sauce behind our recent successes\""}
</Heading>
<Box
data-ws-id="KCGNBZ5J9KQuN4tFJ3Hgl"
data-ws-component="Box">
<Box
data-ws-id="SVS3J7hZl6RxQhQjyI7KB"
data-ws-component="Box" />
<Box
data-ws-id="dSqQn_0DoiODHrSkJPJsm"
data-ws-component="Box" />
<Box
data-ws-id="d_zPJ25VsavdlJEvzqUeO"
data-ws-component="Box" />
<Box
data-ws-id="55rIo9Zic647ArJHldnu4"
data-ws-component="Box" />
<Box
data-ws-id="lPQ3eiRUPP9H_ooWE7kt4"
data-ws-component="Box" />
</Box>
</Box>
<Paragraph
data-ws-id="vOL0BeRQ-Hy_ptfL0frq8"
data-ws-component="Paragraph">
{"The virtual team-building activities and spontaneous coffee chats have brought us closer, despite being in different time zones. We've seen tremendous productivity gains since implementing this platform, but what impresses me most is the focus on maintaining a human touch. Our team feels more connected than ever, and I believe that's the secret sauce behind our recent successes."}
</Paragraph>
</Box>
<Box
data-ws-id="JFLcBNtQN86mBJ5ZfgxPz"
data-ws-component="Box">
<Box
data-ws-id="N-ZJ8d-8Nwn6y5hqZfJS-"
data-ws-component="Box">
<Image
data-ws-id="82xxrJt3aDqLnarWFWevo"
data-ws-component="Image"
src={"/assets/leilani-angel-K84vnnzxmTQ-unsplash_hTwP6Ll8K4KCXsx4D9Ef0.jpeg"} />
</Box>
<Box
data-ws-id="nTVAJUPTo5EBSlDU6BF0w"
data-ws-component="Box">
<Text
data-ws-id="eyrnl3jJ9HIPErQkcdmen"
data-ws-component="Text">
{"Michael, CEO"}
</Text>
<Text
data-ws-id="-C1TMlVdS58YAwRBixZVQ"
data-ws-component="Text">
{"XYZ Startups"}
</Text>
</Box>
</Box>
</Box>
<Box
data-ws-id="TXmpGtyWpfcLOy_-9tQ1o"
data-ws-component="Box">
<Box
data-ws-id="QxdVdHCMotF0QUkYvk65x"
data-ws-component="Box">
<Box
data-ws-id="z8qJ-XHM0ohThX8b456Nt"
data-ws-component="Box">
<Heading
data-ws-id="EHqGGI_Y8_lm1Vy0Bwgwh"
data-ws-component="Heading">
{"\"It was a great experience\""}
</Heading>
<Box
data-ws-id="Ro9kNZVE5WlXjp6rLqWl1"
data-ws-component="Box">
<Box
data-ws-id="JXSCKrv4IOY_-EDbyHnae"
data-ws-component="Box" />
<Box
data-ws-id="r-l-s0DpNh1fmVtvP8siM"
data-ws-component="Box" />
<Box
data-ws-id="ymvp_fWOw4cf7sWj8ZSek"
data-ws-component="Box" />
<Box
data-ws-id="KUNV_X-vrBkHeO7SqvLEP"
data-ws-component="Box" />
<Box
data-ws-id="phzXFNIR02M7L_ZOU6B6p"
data-ws-component="Box" />
</Box>
</Box>
<Paragraph
data-ws-id="qI_sG3qu8FJTtuIa0a-fU"
data-ws-component="Paragraph">
{"The sentiment analysis for feedback ensures our communications are constructive and considerate, and the adaptive task prioritization keeps everyone engaged and motivated. We've become more efficient, but we haven't lost sight of the human element that drives our passion."}
</Paragraph>
</Box>
<Box
data-ws-id="aQ1yXK5MgWLKZSGPLe-oT"
data-ws-component="Box">
<Box
data-ws-id="ZybejNMMZmtS5pWxKtgiG"
data-ws-component="Box">
<Image
data-ws-id="vJE8YR7WH0K_syA4ZOzdb"
data-ws-component="Image"
src={"/assets/linkedin-sales-solutions-QgYvORVDdd8-unsplash_Xm_WpENtQPgyvXKExi_tB.jpeg"} />
</Box>
<Box
data-ws-id="gKo9c7lMJ6HBJTM-rHNG4"
data-ws-component="Box">
<Text
data-ws-id="Mxy44fiOBLc7vHcR4M5IY"
data-ws-component="Text">
{"Emily, Project Lead"}
</Text>
<Text
data-ws-id="6_sr5zpGilkGwXfe-it4c"
data-ws-component="Text">
{"Global Nonprofit Initiative"}
</Text>
</Box>
</Box>
</Box>
</Box>
</Box>
</Box>
<Box
data-ws-id="j2yWzrb47b0pr-JHIBoBp"
data-ws-component="Box">
<Box
data-ws-id="1JJwCx6wkEaht02Ev5L8s"
data-ws-component="Box">
<Heading
data-ws-id="wbINRcQA5mR3A4RQfyKKd"
data-ws-component="Heading">
{"Choose the Perfect Plan for Your Team's Success"}
</Heading>
</Box>
<Slot
data-ws-id="C76iiK0bavOWVLWDt3fdP"
data-ws-component="Slot">
<Fragment
data-ws-id="cKEfbHO_Z62b419KEeDuD"
data-ws-component="Fragment">
<Box
data-ws-id="-Ns0a4fns6nARAsaY9w-j"
data-ws-component="Box">
<Box
data-ws-id="Jn-o7ilBBp7XQ5CTL0i3L"
data-ws-component="Box">
<Box
data-ws-id="rIx2T8qZCYzBESwFnYGl1"
data-ws-component="Box">
<Box
data-ws-id="3thIc18CdC4qfHc0oG3fS"
data-ws-component="Box">
<Box
data-ws-id="qJjE-g7_90Hcn5OazMAkz"
data-ws-component="Box">
<Text
data-ws-id="hAyuZ-RAWMquhZWZ5XAOJ"
data-ws-component="Text">
{"Free"}
</Text>
<Heading
data-ws-id="j7JHZA1WgR3TlX8kuO1Ww"
data-ws-component="Heading">
{"Free for everyone"}
</Heading>
</Box>
<Separator
data-ws-id="aKfUglcP9uH-rk1U6VmEw"
data-ws-component="Separator" />
<Box
data-ws-id="flXzm6ByPWPg8IsUQ3bGH"
data-ws-component="Box">
<Box
data-ws-id="Ob3zrG9uqaNgp97BRCrMh"
data-ws-component="Box">
<Image
data-ws-id="7eeo4T54Zwgt3tWura-mA"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
<Text
data-ws-id="VEDjYSbUNLfs_gw66cRtA"
data-ws-component="Text">
{"Unlimited members"}
</Text>
</Box>
<Box
data-ws-id="u1YblY88u8BpkPEcsxZvY"
data-ws-component="Box">
<Image
data-ws-id="uNMvbM7OJ-ekHeqBKVpP0"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
<Text
data-ws-id="cqAGQfqCDRyLI_fqHa5fH"
data-ws-component="Text">
{"250 issues (unlimited archived)"}
</Text>
</Box>
<Box
data-ws-id="X-m8nDACcMhbhNFaf2tZl"
data-ws-component="Box">
<Image
data-ws-id="rkPC2m68n1jyS33GgQXGu"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
<Text
data-ws-id="PHgbVAJhS2lQ-jjkQ4FPJ"
data-ws-component="Text">
{"Import and export"}
</Text>
</Box>
<Box
data-ws-id="CYllBijBgetZHdEXD00T5"
data-ws-component="Box">
<Image
data-ws-id="JiCzO1mTWL9p4BfgXOTIM"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
<Text
data-ws-id="C-yFbnR4GLrbl9J_fpgsX"
data-ws-component="Text">
{"Integrations, APIs, webhooks"}
</Text>
</Box>
</Box>
</Box>
<Link
data-ws-id="q9KyCG6eZg_SGof6mtO0P"
data-ws-component="Link"
href={"/pricing"}
prefetch={"intent"}>
{"Free"}
</Link>
</Box>
</Box>
<Box
data-ws-id="RirPNBndJmlwR1n0tNtyW"
data-ws-component="Box">
<Box
data-ws-id="qSrcVqlMgZuZQb8lZp6ci"
data-ws-component="Box">
<Box
data-ws-id="bFn8XpRKdwfy79lM24Syb"
data-ws-component="Box">
<Box
data-ws-id="01pRKVtyl1hcAQpQIJ6lj"
data-ws-component="Box">
<Text
data-ws-id="xNlkQ6IeWFEhyjPq58gTv"
data-ws-component="Text">
{"Standard"}
</Text>
<Heading
data-ws-id="2wy_t_EAHh3Lyia7jx2Tw"
data-ws-component="Heading">
{"$8 per user/month"}
</Heading>
</Box>
<Separator
data-ws-id="iSKIzKb3fv1A-wVodUBgV"
data-ws-component="Separator" />
<Box
data-ws-id="zuhl8Owhn-2uwqEZ_xEYB"
data-ws-component="Box">
<Box
data-ws-id="PhuPRBHe-rI6A1CTWLlnd"
data-ws-component="Box">
<Text
data-ws-id="tHqoib_BIUFE7nvi5B4AD"
data-ws-component="Text">
{"Everything in Free, plus..."}
</Text>
</Box>
<Box
data-ws-id="n_l9vBuXrMAWvahH1NTEU"
data-ws-component="Box">
<Image
data-ws-id="Pdyl1fng7S006l5xQvjIX"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
<Text
data-ws-id="6cHYYQ0t02ZW8FwWPnKKF"
data-ws-component="Text">
{"Unlimited issues and file uploads"}
</Text>
</Box>
<Box
data-ws-id="EdVywKKrjml9RQRAwIJ1g"
data-ws-component="Box">
<Image
data-ws-id="D6weP7N8AT6j-3NRnZcQO"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
<Text
data-ws-id="YpqpFFvAgsMmOTlCNdHbT"
data-ws-component="Text">
{"Guest accounts, private teams"}
</Text>
</Box>
<Box
data-ws-id="LuC99KxBaS1cfoASgXDee"
data-ws-component="Box">
<Image
data-ws-id="zoRtbOgN0SVwrBkBRp13U"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
<Text
data-ws-id="P6qIWficJXyfkIrvEH5k7"
data-ws-component="Text">
{"Admin tools"}
</Text>
</Box>
</Box>
</Box>
<Link
data-ws-id="YKPWqa77s9U-6XUNigvTG"
data-ws-component="Link"
href={"/pricing"}>
{"Standard"}
</Link>
</Box>
</Box>
<Box
data-ws-id="QCRnRnWDS5lilxAd9Ai_C"
data-ws-component="Box">
<Box
data-ws-id="2xiKzSplG7rNQoT76D0tz"
data-ws-component="Box">
<Box
data-ws-id="AuVcBecFSASMvRxU5WdMs"
data-ws-component="Box">
<Box
data-ws-id="_kIHOdhzPM_Q-xdKDRCIb"
data-ws-component="Box">
<Text
data-ws-id="6twHyszYQvnIAYxfdnKyo"
data-ws-component="Text">
{"Plus"}
</Text>
<Heading
data-ws-id="xAoOWH44wwjOfOObRnXzw"
data-ws-component="Heading">
{"$14 per user/month"}
</Heading>
</Box>
<Separator
data-ws-id="MizaMZbMNqwnIsCddIp9N"
data-ws-component="Separator" />
<Box
data-ws-id="FSNwRMsds6fK1plSvlygz"
data-ws-component="Box">
<Box
data-ws-id="LMMlDSLfDaGBr-57cwUQS"
data-ws-component="Box">
<Text
data-ws-id="ySdqGrE-RX6osFl60zNdf"
data-ws-component="Text">
{"Everything in Standard, plus..."}
</Text>
</Box>
<Box
data-ws-id="qHT6r5-lnpYs3XTV1Ye6P"
data-ws-component="Box">
<Image
data-ws-id="bjchn2889dazpw9_995WW"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
<Text
data-ws-id="XemvmOtK4EeZFWhXP4BEN"
data-ws-component="Text">
{"SAML / Single Sign On"}
</Text>
</Box>
<Box
data-ws-id="9wgH-lbI69o1ioXiNsebJ"
data-ws-component="Box">
<Image
data-ws-id="5UYnbK731H1nAqKFpVpc-"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
<Text
data-ws-id="AWAXrmytNYbmnVt0KHhqf"
data-ws-component="Text">
{"Advanced authentication controls"}
</Text>
</Box>
<Box
data-ws-id="nRz8ZHiiklXmDaYfGq834"
data-ws-component="Box">
<Image
data-ws-id="08vFSEeQmjCeSIuqtiE34"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
<Text
data-ws-id="vPs9trmbHznVkdVnHEJvL"
data-ws-component="Text">
{"Linear insights and SLAs"}
</Text>
</Box>
<Box
data-ws-id="fjysnt3-EORHjzAdrdvuY"
data-ws-component="Box">
<Image
data-ws-id="LzH861PHwJY52nGb3SGYr"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
<Text
data-ws-id="bSlGiOi5JlBEVdXvEGTxS"
data-ws-component="Text">
{"Priority support"}
</Text>
</Box>
</Box>
</Box>
<Link
data-ws-id="D9Ma82venPH1VTWNbgygy"
data-ws-component="Link"
prefetch={"intent"}>
{"Plus"}
</Link>
</Box>
</Box>
</Box>
</Fragment>
</Slot>
<Box
data-ws-id="1msfU4Ntb847TQoTq8mNa"
data-ws-component="Box">
<Text
data-ws-id="hYEZshdNFOd_5N7uuilr_"
data-ws-component="Text">
{"Discover flexible and affordable options to suit your project management needs"}
</Text>
<Link
data-ws-id="Hu8a8-JZ01633Ah4v7Nwf"
data-ws-component="Link"
prefetch={"intent"}>
{"Compare our Plans"}
</Link>
</Box>
</Box>
<Box
data-ws-id="m9IVVvrpGZ5RPVTmDMAgo"
data-ws-component="Box">
<Box
data-ws-id="plbVtYQv9Qnf068n2khIn"
data-ws-component="Box">
<Box
data-ws-id="qkOwk6i2dmRz5aqYBY7y1"
data-ws-component="Box">
<Box
data-ws-id="Va1QQAkOmJRW8gUv2-no7"
data-ws-component="Box">
<Heading
data-ws-id="kZbVTgv73E7AXwKUAD2vy"
data-ws-component="Heading">
{"Unlock Your Team's Full Potential!"}
</Heading>
<Text
data-ws-id="mckX_PoBrpjjDd6I_axNt"
data-ws-component="Text">
{"Take the first step towards human-centered project management excellence"}
</Text>
</Box>
<Link
data-ws-id="yUIliS0D6Myn_k-oBP1Qf"
data-ws-component="Link">
{"Get started with Free"}
</Link>
</Box>
</Box>
</Box>
</Box>
<Slot
data-ws-id="_NqZ9fD9LqNEc09fvDDd4"
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
  
