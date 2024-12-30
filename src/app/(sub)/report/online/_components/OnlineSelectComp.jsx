import { color } from "framer-motion";
import { useFormContext } from "react-hook-form";

export default function OnlineSelectComp({
  selects = [],
  groupLabel,
  isEssential = true,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="box">
      {groupLabel && (
        <div className="label-wrap f-exBold">
          <label htmlFor={selects[0]?.id || ""}>{groupLabel}</label>
          {isEssential && <span className="essential">*</span>}
        </div>
      )}
      <div className="select-box">
        {selects.map((select, index) => (
          <div
            key={index}
            className="select-item"
          >
            <select
              id={select.id}
              name={select.name}
              required
              {...register(select.id, select.validation)}
            >
              <option
                value=""
                disabled="true"
                hidden="true"
                selected="true"
              >
                {select.placeholder || "선택하세요"}
              </option>
              {select.options.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>
            {errors[select.id] && (
              <p className="error-message">{errors[select.id]?.message}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
