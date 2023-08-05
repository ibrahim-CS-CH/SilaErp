import { useLocale } from "../Context/LocalizeContext";
import { Button, Tooltip } from "@material-ui/core";
const SelectLng = () => {
  const { locale, setLocale } = useLocale();
  return (
    <div>
        {locale == "en" ? (
          <Tooltip title="التغيير الي العربية">
              <Button onClick={()=>setLocale("ar")}>العربية</Button>

          </Tooltip>
        ) : (
          <Tooltip title="change to english">
            <Button onClick={()=>setLocale("en")}>English</Button>

          </Tooltip>
        )}
    </div>
  );
};

export default SelectLng;
