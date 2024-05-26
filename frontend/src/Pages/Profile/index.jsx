import { IoPersonCircleSharp } from "react-icons/io5";
import { CustomButton } from "@/components";
import { useProfileData } from "./useProfile";
import { ProfileModal } from "./component/ProfileModal";
import ProfileLayout from "./../../components/Layouts/ProfileLayout";

const Profile = () => {
  const { user, modalIsOpen, handleSave, toggleModal } =
    useProfileData();

  return (
    <ProfileLayout>
      <section className="w-full md:w-[710px] md:h-[300px] bg-white shadow-xl rounded-xl py-12 px-10">
        <div className="flex flex-col md:flex-row pt-24 md:pt-0">
          <IoPersonCircleSharp className="text-[114px] text-secondary me-6" />

          <div className="flex gap-6">
            <div>
              <h5 className="text-gray-400 text-xl font-medium leading-normal">
                Email
              </h5>
              <h5 className="text-gray-400 text-xl font-medium leading-normal">
                Nama
              </h5>
              <h5 className="text-gray-400 text-xl font-medium leading-normal">
                Role
              </h5>
            </div>
            <div>
              <h5 className="text-primary text-lg font-normal leading-normal mb-1">
                {user.email}
              </h5>
              <h5 className="text-primary text-lg font-normal leading-normal mb-1">
                {user.nama}
              </h5>
              <h5 className="text-primary text-lg font-normal leading-normal mb-1">
                {user.role}
              </h5>
            </div>
          </div>
        </div>
      </section>

      <ProfileModal
        modalIsOpen={modalIsOpen}
        toggleModal={toggleModal}
        handleSave={handleSave}
      />
    </ProfileLayout>
  );
};

export default Profile;
