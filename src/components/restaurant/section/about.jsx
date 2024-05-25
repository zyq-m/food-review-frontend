import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

export default function AboutSection({ restaurant }) {
  return (
    <>
      <div>
        <h3 className="font-medium">From the owners</h3>
        <p className="text-gray-500 text-sm">“{restaurant?.description}”</p>
      </div>

      <div className="grid gap-2">
        <div className="flex items-center gap-6">
          <LocationOnOutlinedIcon />
          <p className="text-gray-500 text-xs">{restaurant?.location}</p>
        </div>
        <div className="flex items-center gap-6">
          <AccessTimeOutlinedIcon />
          <p className="text-gray-500 text-xs">{restaurant?.restaurant_open}</p>
        </div>
        <div className="flex items-center gap-6">
          <RestaurantMenuOutlinedIcon />
          <p className="text-gray-500 text-xs">Menu</p>
        </div>
        <div className="flex items-center gap-6">
          <LocalPhoneOutlinedIcon />
          <p className="text-gray-500 text-xs">{restaurant?.phone_no}</p>
        </div>
        <div className="flex items-center gap-6">
          <LanguageOutlinedIcon />
          <p className="text-gray-500 text-xs">{restaurant?.website_link}</p>
        </div>
      </div>
    </>
  );
}
