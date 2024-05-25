import { formattedDate } from "../../../utils/dateFormatter";
import IconBtn from "../../Common/IconBtn";
import { RiEditBoxLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DescriptionIcon from '@mui/icons-material/Description';

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate();

  // const user = {
  //   image:
  //     "https://res.cloudinary.com/didg0mhqv/image/upload/v1716532018/%22CodeHelp%22/ertk43omo3otybexg034.jpg",
  //   _id: "664f7e3149f62ad14588e32a",
  //   firstName: "Gaurav",
  //   lastName: "Goyal",
  //   email: "gauravgoyal8493@gmail.com",
  //   password: "$2b$10$xT3lZJ967QPb6NT37v97WOSnR2HaxD9c2XfbhLUQxyxjHzTd3B7ga",
  //   accountType: "Student",
  //   active: true,
  //   approved: true,
  //   additionalDetails: {
  //     _id: "664f7e3149f62ad14588e328",
  //     gender: null,
  //     dateOfBirth: null,
  //     about: null,
  //     contactNumber: null,
  //     __v: 0,
  //   },
  // };

  return (
    <>
      <h1 className="mb-14 text-3xl font-medium text-richblack-5">
        My Profile
      </h1>
      <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
        <div className="flex items-center gap-x-4">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[78px] rounded-full object-cover"
          />
          <div className="space-y-1">
            <p className="text-lg font-semibold text-richblack-5">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-sm text-richblack-300">{user?.email}</p>
          </div>
        </div>
        <IconBtn
          text="Edit"
          onclick={() => {
            navigate("/dashboard/settings");
          }}
        >
          <RiEditBoxLine />
        </IconBtn>
      </div>
      <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-richblack-5">
            License Details
          </p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings");
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <div className="flex max-w-[500px] justify-between">
          <div className="flex flex-col gap-x-4">
          {user?.additionalDetails?.pilotLicenseImage ?<img
              src={user?.additionalDetails?.pilotLicenseImage}
              alt={`profile-${user?.firstName}`}
              className="aspect-square w-[78px] rounded-full object-cover"
            />: <DescriptionIcon fontSize="large" color='success' /> }
          </div>
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-richblack-600">
                Certificate Type
              </p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.certificateType || "Permanent"}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">
                Certificate Expiry
              </p>
              <p className="text-sm font-medium text-richblack-5">
              {user?.additionalDetails?.toCertificateExpiryDate ? formattedDate(user?.additionalDetails?.dateofExpiry ) :
                  "Add Date Of Expiry"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-richblack-5">About</p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings");
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <p
          className={`${
            user?.additionalDetails?.about
              ? "text-richblack-5"
              : "text-richblack-400"
          } text-sm font-medium`}
        >
          {user?.additionalDetails?.about ?? "Write Something About Yourself"}
        </p>
      </div>
      <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-richblack-5">
            Personal Details
          </p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings");
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <div className="flex max-w-[500px] justify-between">
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-richblack-600">First Name</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.firstName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Email</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.email}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Gender</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.gender ?? "Add Gender"}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Date Of Medical</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.dateofExpiry ? formattedDate(user?.additionalDetails?.dateofExpiry ) :
                  "Add Date Of Expiry"}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">
                Medical Expiry Date
              </p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.gender ?? "Add Gender"}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-richblack-600">Last Name</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.lastName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Phone Number</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Date Of Birth</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.dateOfBirth? formattedDate(user?.additionalDetails?.dateOfBirth) :
                  "Add Date Of Birth"}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Medical Class</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.medicalClass ||
                  "Commercial Pilot"}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Approval Status</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.approved || "Approved"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
