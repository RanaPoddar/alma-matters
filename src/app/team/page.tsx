import Card from "@/Components/Card";
import Image from "next/image";

const TeamPage = () => {

    return (
        <div className="w-full bg-primaryWhite">
 <div className="max-w-7xl mx-auto">

{/* <div className="pt-10">
<h1 className="text-2xl mdt:ext-3xl lg:text-4xl font-bold text-primaryBlue text-center">Our Team</h1>
</div> */}
<div className="w-full">
<Image src="/team.jpg" alt="" width={1000} height={500} className="object-cover"/>
</div>

{/* team members page */}
<div className="mt-10">
<h1 className="text-2xl mdt:ext-3xl lg:text-4xl font-bold text-primaryBlue text-center">Team Members</h1>
</div>
<div className="my-10 px-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 place-items-center ">
<Card name="Rana Poddar" img="https://media.licdn.com/dms/image/v2/D5603AQH9RAZ40xI6Ew/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718244253212?e=1732147200&v=beta&t=24Gn7p6N3UdMA6OI9L1W0iahRYd0LpRf5jiMJU0hYYY" position="Team Leader" department="Computer Engineerring" email="ranapoddarmath2@gmail.com" /> 
<Card name="Vishal Lodhi" img="https://media.licdn.com/dms/image/v2/D5603AQH9RAZ40xI6Ew/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718244253212?e=1732147200&v=beta&t=24Gn7p6N3UdMA6OI9L1W0iahRYd0LpRf5jiMJU0hYYY" position="Member" department="Computer Engineerring" email="ranapoddarmath2@gmail.com" /> 
<Card name="Rana Poddar" img="https://media.licdn.com/dms/image/v2/D5603AQH9RAZ40xI6Ew/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718244253212?e=1732147200&v=beta&t=24Gn7p6N3UdMA6OI9L1W0iahRYd0LpRf5jiMJU0hYYY" position="Member" department="Computer Engineerring" email="ranapoddarmath2@gmail.com" /> 
<Card name="Rana Poddar" img="https://media.licdn.com/dms/image/v2/D5603AQH9RAZ40xI6Ew/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718244253212?e=1732147200&v=beta&t=24Gn7p6N3UdMA6OI9L1W0iahRYd0LpRf5jiMJU0hYYY" position="Member" department="Production and Indutrial Engineerring" email="ranapoddarmath2@gmail.com" /> 
<Card name="Rana Poddar" img="https://media.licdn.com/dms/image/v2/D5603AQH9RAZ40xI6Ew/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718244253212?e=1732147200&v=beta&t=24Gn7p6N3UdMA6OI9L1W0iahRYd0LpRf5jiMJU0hYYY" position="Member" department="Production and Indutrial Engineerring" email="ranapoddarmath2@gmail.com" /> 
<Card name="Rana Poddar" img="https://media.licdn.com/dms/image/v2/D5603AQH9RAZ40xI6Ew/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718244253212?e=1732147200&v=beta&t=24Gn7p6N3UdMA6OI9L1W0iahRYd0LpRf5jiMJU0hYYY" position="Member" department="Production and Indutrial Engineerring" email="ranapoddarmath2@gmail.com" /> 
</div>

{/* team mentors page */}
<div className="mt-10">
<h1 className="text-2xl mdt:ext-3xl lg:text-4xl font-bold text-primaryBlue text-center">Mentors</h1>
</div>
<div className="my-10 px-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 place-items-center ">
<Card name="Rana Poddar" img="https://media.licdn.com/dms/image/v2/D5603AQH9RAZ40xI6Ew/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718244253212?e=1732147200&v=beta&t=24Gn7p6N3UdMA6OI9L1W0iahRYd0LpRf5jiMJU0hYYY" position="Team Leader" department="Computer Engineerring" email="ranapoddarmath2@gmail.com" /> 
<Card name="Vishal Lodhi" img="https://media.licdn.com/dms/image/v2/D5603AQH9RAZ40xI6Ew/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718244253212?e=1732147200&v=beta&t=24Gn7p6N3UdMA6OI9L1W0iahRYd0LpRf5jiMJU0hYYY" position="Member" department="Computer Engineerring" email="ranapoddarmath2@gmail.com" /> 
</div>
            
        </div>

        </div>
       
    )
}

export default TeamPage