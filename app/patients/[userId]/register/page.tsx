import Image from "next/image";
import { redirect } from "next/navigation";

import RegisterForm from "@/components/forms/RegisterForm";
import { getPatient, getUser } from "@/lib/actions/patient.actions";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  const patient = await getPatient(userId);

  if (patient) redirect(`/patients/${userId}/new-appointment`);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
        <div className=" mb-6  flex">
            <Image
              src="/assets/icons/logo-full.png"
              height={1000}
              width={1000}
              alt="patient"
              className="mr-4 h-10 w-fit"
            />
            <p className=" h-10 w-fit text-3xl font-extrabold">CurePulse</p>
          </div>


          <RegisterForm user={user} />

          <p className="copyright py-12">© 2024 CurePulse</p>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;
