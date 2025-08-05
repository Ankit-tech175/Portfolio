import { Timeline } from "@mantine/core";
import { IconBriefcaseFilled } from "@tabler/icons-react";
import { ExperienceInfo } from "../User.tsx";

const TimeLineItem = (items: any) => {
    return items.map((item: any, index: number) => <Timeline.Item data-aos="fade-up" data-aos-duration="800" key={index} className="!pt-12 !mb-2 " bullet={<IconBriefcaseFilled className="!text-bgColor" size={20}/>}>
        <div className="border border-primaryColor shadow-[0_0_10px_0_#64FFDA50] p-4 rounded-2xl flex flex-col gap-2">
            <div className="flex gap-2 items-center">
                <img className="rounded-lg w-16" src={`icons/${item.company}.png`} alt="company" />
                <div className="flex flex-col">
                    <div className="text-white text-2xl font-semibold">{item.role}</div>
                    <div className="text-lg font-semibold text-textColor">{item.company} &#x2022; {item.date}</div>
                </div>
            </div>
            <div className="text-textColor leading-6">
                {item.description}
            </div>
            <div className="text-lg font-medium text-textColor">
                <span className="font-semibold text-white">Skills:</span>
                {
                    item.skills.map((skill: any, index: number) => <span key={index}> &#x2022; {skill}</span>)
                }
            </div>
        </div>
    </Timeline.Item>)
}

const Experience = () => {
    return (
        <div className="px-16 mx-20 my-10 mb-28 font-mono" id="Experience">
            <h1 className="text-4xl mb-10 font-bold text-center text-white"><span className="text-primaryColor">04.&nbsp;</span>Experiences</h1>
            <Timeline active={5} bulletSize={30} lineWidth={2} color="#64FFDA">
                {TimeLineItem(ExperienceInfo)}
                <Timeline.Item bullet={<IconBriefcaseFilled className="!text-bgColor" size={20}/>}></Timeline.Item>
            </Timeline>
        </div>
    );
}

export default Experience;