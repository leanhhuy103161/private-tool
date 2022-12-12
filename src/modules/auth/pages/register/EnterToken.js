import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import classNames from "classnames";

EnterToken.propTypes = {
  formState: PropTypes.object.isRequired,
  setStep: PropTypes.any.isRequired,
};

function EnterToken({ formState, setStep }) {
  const { t } = useTranslation();

  return (
    <div className="mt-4 text-left shadow-lg bg-gray-100 p-12 w-96 rounded-2xl sm:w-loginForm">
      <div className="flex justify-start">
        <svg
          width="219"
          height="50"
          viewBox="0 0 219 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="218.354" height="50" fill="url(#pattern0)" />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_1_981"
                transform="scale(0.00144928 0.00632911)"
              />
            </pattern>
            <image
              id="image0_1_981"
              width="690"
              height="158"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      </div>
      <h3 className="text-3xl mt-7 font-semibold flex items-center">
        <svg
          width="35"
          height="26"
          viewBox="0 0 35 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-4"
        >
          <path
            d="M11.7373 1.34802C12.2013 0.883992 12.9319 0.883992 13.3959 1.34802C13.8443 1.79638 13.8443 2.5426 13.3959 2.98991L4.98583 11.4H32.7379C33.3849 11.4 33.9158 11.9142 33.9158 12.5611C33.9158 13.208 33.3849 13.739 32.7379 13.739H4.98583L13.3959 22.1334C13.8443 22.5974 13.8443 23.3447 13.3959 23.792C12.9319 24.256 12.2013 24.256 11.7373 23.792L1.33627 13.3909C0.887911 12.9426 0.887911 12.1964 1.33627 11.7491L11.7373 1.34802Z"
            fill="#212121"
            stroke="#212121"
            strokeWidth="2"
          />
        </svg>
        Enter Token
      </h3>
      <p className="pt-5 text-base">We have sent token on your given email johndoe1@gmail.com Please enter received token to reset password</p>
      <form>
        <div className="mt-4">
          <div>
            <label className="block text-sm font-semibold" htmlFor="email">
              Token
            </label>
            <input
              name="token"
              type="text"
              placeholder="XXX - XXX"
              className={classNames(
                "w-full h-14 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1",
                { "border-orange-500": !formState.email }
              )}
            />
          </div>

          <div className="mt-5 w-full flex flex-col items-baseline">
            <button
              type="button"
              className="px-6 w-full py-2 mt-4 text-white bg-orange-500 rounded-lg hover:bg-orange-600"
              onClick={() => setStep(3)}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EnterToken;
