import React,{ useState, useEffect } from "react";
import { BasicInput } from "../../Input/BasicInput";
import { SelectInput } from "../../Input/SelectInput";
import { getApiLink, getApiResponse } from "../../../service/apiService";
import { useSetting } from "../../../context/SettingContext";
import "./InputMailchimpList.scss";

interface InputMailchimpListProps {
  mailchimpKey: string;
  optionKey: string;
  settingChanged: { current: boolean };
  apiLink: string;
  proSettingChanged: () => boolean;
  onChange: (event: { target: { value: any } }, key: string) => void;
  selectKey: string;
  value: any;
}

const InputMailchimpList: React.FC<InputMailchimpListProps> = (props) => {
  const { mailchimpKey, optionKey, settingChanged } = props;
  const { setting, updateSetting } = useSetting();
  const [selectOption, setSelectOption] = useState<any[]>(setting[optionKey] || []);
  const [loading, setLoading] = useState<boolean>(false);
  const [showOption, setShowOption] = useState<boolean>(false);
  const [mailchimpErrorMessage, setMailchimpErrorMessage] = useState<string>("");

  const updateSelectOption = async () => {
    if (!setting[mailchimpKey]) {
      setMailchimpErrorMessage("Kindly use a proper MailChimp key.");
    } else {
      setLoading(true);
      setMailchimpErrorMessage("");
      const options = await getApiResponse(getApiLink(props.apiLink));
      settingChanged.current = true;
      updateSetting(optionKey, options);
      setSelectOption([options]);
      setLoading(false);
      setShowOption(true);
    }
  };

  return (
    <div className="connect-main-wrapper">
      <BasicInput
        wrapperClass="setting-form-input"
        descClass="settings-metabox-description"
        type="text"
        value={setting[mailchimpKey]}
        proSetting={false}
        onChange={(e) => {
          if (!props.proSettingChanged()) {
            props.onChange(e, mailchimpKey);
          }
        }}
      />

      <div className="loader-wrapper">
        <button
          className="btn-purple btn-effect"
          onClick={(e) => {
            e.preventDefault();
            if (!props.proSettingChanged()) {
              updateSelectOption();
            }
          }}
        >
          Fetch List
        </button>

        {loading && (
          <div className="loader">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        )}
      </div>

      {(selectOption.length || showOption) && (
        <SelectInput
          onChange={(e) => {
            // const event = { target: { value: e?.value } };
            const event = { target: { value: selectOption} };
            if (!props.proSettingChanged()) {
              props.onChange(event, props.selectKey);
            }
          }}
          options={selectOption}
          value={props.value}
        />
      )}
    </div>
  );
};

export default InputMailchimpList;
