import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

export default function AboutSection() {
  return (
    <>
      <div>
        <h3 className="font-medium">From the owners</h3>
        <p className="text-gray-500 text-sm">
          “Serving #SeolAwesome Urban Korean Food”
        </p>
      </div>

      <div className="grid gap-2">
        <div className="flex items-center gap-6">
          <LocationOnOutlinedIcon />
          <p className="text-gray-500 text-xs">
            Simpang 3 Pengkalan Kubur, 22200 Besut, Terengganu
          </p>
        </div>
        <div className="flex items-center gap-6">
          <AccessTimeOutlinedIcon />
          <p className="text-gray-500 text-xs">
            Opens &gt; Sunday - Friday (6:00 PM-10:00 PM)
          </p>
        </div>
        <div className="flex items-center gap-6">
          <RestaurantMenuOutlinedIcon />
          <p className="text-gray-500 text-xs">Menu</p>
        </div>
        <div className="flex items-center gap-6">
          <LocalPhoneOutlinedIcon />
          <p className="text-gray-500 text-xs">011-110 0011</p>
        </div>
        <div className="flex items-center gap-6">
          <LanguageOutlinedIcon />
          <p className="text-gray-500 text-xs">lapor.com</p>
        </div>
      </div>
    </>
  );
}
