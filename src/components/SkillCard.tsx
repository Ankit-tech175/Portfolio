import { Avatar } from "@mantine/core";

const SkillBadge = (skills:[]) => {
    return (
        skills.map((skill:any, index:number) => <div key={index} className="flex gap-2 border-textColor py-2 px-3 border rounded-2xl items-center">
            <Avatar className="!w-[24px] !p-1" variant="transparent" radius="xs" src={`icons/${skill}.png`} />
            <div className="text-textColor text-xl">{skill}</div>
        </div>)
    )
}

const SkillCard = (props:any) => {
    return <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" className="w-[49%] shadow-[0_0_10px_0_#64FFDA50] rounded-2xl border border-primaryColor p-5">
        <div className="text-3xl mb-4 text-white text-center font-bold">{props.title}</div>
        <div className="flex flex-wrap gap-3 justify-center">
            {SkillBadge(props.skills)}
        </div>
    </div>
}

export default SkillCard;