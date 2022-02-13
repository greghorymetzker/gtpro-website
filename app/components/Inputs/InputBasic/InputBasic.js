import React, { useEffect, useRef, useState } from "react"
import { animated, useTransition } from "react-spring"
import MaskedInput from "react-text-mask"
import { useField } from "remix-validated-form"
import createAutoCorrectedDatePipe from "text-mask-addons/dist/createAutoCorrectedDatePipe"
// import { Transition } from 'react-spring/renderprops';
import createNumberMask from "text-mask-addons/dist/createNumberMask"
import styles from "./styles.css"
export const links = [{ rel: "stylesheet", href: styles }]

const MoneyMask = (e) => {
  const numberMask = createNumberMask({
    prefix: "R$ ",
    includeThousandsSeparator: true,
    allowDecimal: true,
    requireDecimal: true,
    allowLeadingZeroes: true,
    decimalSymbol: ",",
    thousandsSeparatorSymbol: ".",
    decimalLimit: 2,
  })
  const tmp = e
  let v = tmp.replace(/\D/g, "")
  v = `${(v / 100).toFixed(2)}`
  v = v.replace(".", ",")
  v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,")
  v = v.replace(/(\d)(\d{3}),/g, "$1.$2,")
  const mask = numberMask(v)

  return mask
}
const PercentMask = (e) => {
  const numberMask = createNumberMask({
    prefix: "",
    suffix: "%",
    includeThousandsSeparator: false,
    allowDecimal: false,
    decimalLimit: 2,
    allowLeadingZeroes: true,
    thousandsSeparatorSymbol: ".",
  })
  const mask = numberMask(e)

  return mask
}

const dateMask = (e) => {
  const numberMask = createAutoCorrectedDatePipe("dd/mm/yyyy")
  return {
    mask: [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/],
    pipe: numberMask,
  }
}
const monthMask = (e) => {
  const numberMask = createAutoCorrectedDatePipe("mm/yyyy")
  return {
    mask: [/\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/],
    pipe: numberMask,
  }
}

const timeMask = (e) => {
  const chars = e.split("")
  const hours = [/[0-2]/, chars[0] == "2" ? /[0-3]/ : /[0-9]/]

  const minutes = [/[0-5]/, /[0-9]/]

  return hours.concat(":").concat(minutes)
}
const CpfMask = (e) => {
  const numbers = e.match(/\d/g)
  let numberLength = 0
  if (numbers) {
    numberLength = numbers.join("").length
  }

  return [/\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "-", /\d/, /\d/]
}
const CpfCnpjMask = (e) => {
  const numbers = e.match(/\d/g)
  let numberLength = 0
  if (numbers) {
    numberLength = numbers.join("").length
  }
  if (numberLength > 11) {
    return [
      /\d/,
      /\d/,
      ".",
      /\d/,
      /\d/,
      /\d/,
      ".",
      /\d/,
      /\d/,
      /\d/,
      "/",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
    ]
  }
  return [/\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "-", /\d/, /\d/]
}

const cellphoneMask = (e) => {
  const numbers = e.match(/\d/g)
  let numberLength = 0
  if (numbers) {
    numberLength = numbers.join("").length
  }

  if (numberLength > 8) {
    return [/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]
  }
  return [/\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]
}
const cellphoneDDDMask = (e) => {
  const numbers = e.match(/\d/g)
  let numberLength = 0
  if (numbers) {
    numberLength = numbers.join("").length
  }

  if (numberLength > 10) {
    return ["(", /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]
  }
  return ["(", /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]
}

const cepMask = (e) => {
  return [/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/]
}
const ccvMask = (e) => {
  return [/\d/, /\d/, /\d/, /\d?/]
}
const numberMask = (e) => {
  return [/\d/, /\d/, /\d/, /\d?/, /\d?/, /\d?/, /\d?/, /\d?/, /\d?/]
}

const cardMask = (e) => {
  return [
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d?/,
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d?/,
    " ",
    /\d/,
    /\d/,
    /\d?/,
    /\d?/,
  ]
}

const masks = (type) => {
  let mask = null
  switch (type) {
    case "money":
      mask = MoneyMask

      break
    case "hour":
      mask = timeMask

      break
    case "cpf":
      mask = CpfMask

      break
    case "cpfcnpj":
      mask = CpfCnpjMask

      break
    case "card":
      mask = cardMask

      break
    case "phone":
      mask = cellphoneMask

      break
    case "phoneddd":
      mask = cellphoneDDDMask

      break
    case "date":
      mask = dateMask()

      break
    case "ccv":
      mask = ccvMask()

      break
    case "percent":
      mask = PercentMask

      break
    case "number":
      mask = numberMask

      break
    case "month":
      mask = monthMask()

      break
    case "cep":
      mask = cepMask()

      break
    default:
      mask = type
      break
  }
  return mask
}

const InputBasic = ({
  placeholder,
  className,
  mask = null,
  label,
  handleSubmit,
  preffixClass,
  onKeyDown,
  onChange,
  onBlur,
  name,
  type,
  min,
  max,
  style,
  autofocus,
  preffix = null,
  variant = null,
  disabled,
  stylectn,
}) => {
  const inputRef = useRef(null)
  const [innerType, setInnerType] = useState(type)

  const { defaultValue, validate, error } = useField(name)

  useEffect(() => {
    if (inputRef && autofocus) {
      // Hack focus bug

      if (inputRef.current) {
        setTimeout(() => {
          if (!mask) {
            // inputRef.current.focus();
          } else {
            // inputRef.current.getInputDOMNode().focus();
          }
        }, 200)
      }
    }
  }, [autofocus, inputRef])

  const transitionError = useTransition(error, {
    leave: { opacity: 0, transform: "translateX(-10%)" },
    from: { opacity: 0, transform: "translateX(10%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
  })

  const [value, setValue] = useState(null)
  return (
    <div
      className={`input-ctn ${preffix ? "preffixCtn" : ""} ${variant ? variant : "none"} ${
        error ? "error" : ""
      }
      ${error && value ? "success" : ""}
      ${disabled ? "disabled" : ""}
      ${className || ""}`}
      style={{ ...style }}
    >
      {preffix ? <label className={`preffix} ${preffixClass ? "preffixClass" : ""}`}>{preffix}</label> : null}
      {mask ? (
        <MaskedInput
          onChange={(e) => {
            !disabled && onChange && onChange(e)
            setValue(e)
          }}
          onBlur={(e) => {
            if (!disabled && onBlur) onBlur(e)
            if (validate) validate()
          }}
          defaultValue={defaultValue || ""}
          name={name}
          id={name}
          type={innerType}
          mask={masks(mask)}
          ref={inputRef}
          placeholder={placeholder}
          guide={false}
          // onKeyDown={(e) => {
          //   if (onKeyDown) {
          //     onKeyDown(e.key);
          //   }
          // }}
        />
      ) : (
        <div
          className="inputCtn"
          style={{
            paddingLeft: preffix ? "28px" : "0px",
            ...stylectn,
          }}
        >
          <input
            // onKeyDown={(e) => {
            //   if (onKeyDown) {
            //     onKeyDown(e.key);
            //   }
            // }}
            ref={inputRef}
            id={name}
            onChange={(e) => {
              !disabled && onChange && onChange(e)
              setValue(e.currentTarget.target)
            }}
            onBlur={(e) => {
              if (!disabled && onBlur) onBlur(e)
              if (validate) validate()
            }}
            placeholder={placeholder}
            name={name}
            defaultValue={defaultValue || ""}
            min={min}
            max={max}
            type={innerType}
          />
        </div>
      )}

      {type == "password" && (
        <span
          className="password"
          onClick={() => {
            setInnerType(innerType == "password" ? "text" : "password")
          }}
        >
          {innerType == "password" ? (
            <i className="icon-eye-3" />
          ) : (
            <i
              style={{
                fontSize: "1.4em",
                marginTop: "-3px",
                marginLeft: "-2px",
              }}
              className="icon-EYE_2"
            />
          )}
        </span>
      )}

      {/* {label && <label> {label || ''}</label>} */}
      {transitionError(
        (props, item) =>
          item && (
            <animated.span style={props} className="errorLabel">
              {item}
            </animated.span>
          ),
      )}
    </div>
  )
}

InputBasic.links = links
export default InputBasic
