import { FC, ChangeEvent } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import type { IconType } from 'react-icons';

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder: string;
  icon?: IconType;
  showToggle?: boolean;
  isPasswordVisible?: boolean;
  onToggle?: () => void;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputField: FC<InputFieldProps> = ({
  label,
  type = 'text',
  placeholder,
  icon: Icon,
  showToggle,
  isPasswordVisible,
  onToggle,
  ...props
}) => {
  return (
    <div className="mb-4">
      <label className="text-xs sm:text-sm text-gray-600 block mb-2">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
          </span>
        )}
        <input
          type={showToggle && isPasswordVisible ? 'text' : type}
          placeholder={placeholder}
          className="w-full pl-9 sm:pl-12 pr-9 sm:pr-12 py-2.5 sm:py-3 border border-gray-300 rounded-full focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 text-sm transition"
          {...props}
        />
        {showToggle && (
          <button
            type="button"
            onClick={onToggle}
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
          >
            {isPasswordVisible ? (
              <AiOutlineEyeInvisible size={16} className="sm:w-[18px] sm:h-[18px]" />
            ) : (
              <AiOutlineEye size={16} className="sm:w-[18px] sm:h-[18px]" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;