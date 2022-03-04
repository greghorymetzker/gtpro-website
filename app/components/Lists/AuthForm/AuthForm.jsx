import BaseImage from "../../BaseKit/BaseImage/BaseImage"
import Box from "../../BaseKit/Box/Box"
import { Title } from "../../Title/Title"
import s from "./styles.css"

import Button from "../../Buttons/Button/Button"
import InputBasic from "../../Inputs/InputBasic/InputBasic"
import LabelInput from "../../Inputs/LabelInput/LabelInput"
import Loading from "../../loaders/Loading/Loading"
import { useIsSubmitting } from "remix-validated-form"
import { useTheme } from "../../contexts/theme"

import LOGODOT8 from "../../../assets/images/LOGO.png"
import LOGOBUSCAMILHAS from "../../../assets/images/LOGO.png"

const logos = {
  buscamilhas: LOGOBUSCAMILHAS,
  dot8: LOGODOT8,
}

export const links = [
  { rel: "stylesheet", href: s },
  ...Button.links,
  ...InputBasic.links,
  ...LabelInput.links,
  ...Loading.links,
]

export const AuthForm = ({ style }) => {
  const isSubmitting = useIsSubmitting()
  const [theme] = useTheme()
  return (
    <Box flexDirection="column" className={"auth-ctn"} flex={1} style={style}>
      <Box flexDirection="column" className={"ctn"}>
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            overflow: "hidden",
          }}
        >
          <div>
            <BaseImage
              src={logos[theme]}
              alt="Logo Dot8"
              title="Imagem Logo Dot8"
              disableLoader
              style={{
                width: "120px",
                height: "30px",
                marginBottom: "10px",
              }}
            />
            <Title
              type="h1"
              style={{
                fontSize: "1.4em",
                lineHeight: "34px",
                display: "flex",
                alignItems: "center",
                letterSpacing: "0.1em",
                margin: "0px",
                padding: "0px",
                marginBottom: "20px",

                fontStyle: "normal",
                fontWeight: "bold",
              }}
            >
              Acesso a Dashboard
            </Title>
            <Box
              flexDirection="column"
              flex={1}
              style={{
                marginBottom: "20px",
              }}
            >
              <LabelInput style={{ fontSize: "0.8em" }} title="Digite Seu Usuário" />
              <InputBasic placeholder="E-mail" name="email" variant="basic" />
            </Box>
            <Box
              flexDirection="column"
              flex={1}
              style={{
                marginBottom: "0px",
              }}
            >
              <LabelInput style={{ fontSize: "0.8em" }} title="Digite Sua Senha" />
              <InputBasic placeholder="Senha" name="password" type="password" variant="basic" />
              <Button
                type="purple"
                mode="submit"
                title="Logar No Sistema"
                style={{
                  margin: "20px 0px",
                  marginBottom: "0px",
                }}
              />
            </Box>
          </div>
        </div>
        <Loading loading={isSubmitting} text="Carregando..." />
      </Box>
    </Box>
  )
}

AuthForm.links = links
