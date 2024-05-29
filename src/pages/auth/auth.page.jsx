import React, { useEffect, useState } from 'react';
import { Box, Button, Container, TextField, Typography } from "@mui/material";
// import logo from "../../_common/assets/img/yutok-colored.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import authStore from "../../stores/auth.store"

const AuthPage = observer(() => {

  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.state ? location.state.from.pathname : '/';
  const fromPage = authStore.isNavigateHome ? '/' : pathname;

  useEffect(() => {
    document.title = 'Yutok - войти на сайт'

    if (authStore.isAuth) {
      navigate(fromPage, {replace: true})
    }

  }, [fromPage])


  const [form, setForm] = useState({
    username: '', password: ''
  })

  const [showPassword, setShowPassword] = useState(false)

  const [errorForm, setErrorForm] = useState('')


  const changeHandler = event => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const handleChangeShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const login = async () => {

    const isAuthenticated = await authStore.login(form.username, form.password)

    if (isAuthenticated) {

      console.log("")
      navigate(fromPage, {replace: true})
    } else {
      setErrorForm('Неверный логин или пароль.')
    }
  }

  const handleKeyPress = (e, v) => {
    if (e.code === "Enter") {
      login()
    }
  }

  return (
    <Box
      component="main"
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexGrow: 1,
        minHeight: '100%'
      }}
    >
      <Container maxWidth="xs">
        <Box sx={{my: 8, backgroundColor: 'white', p: 5, boxShadow: 2, borderRadius: 1}}>
          {/*<Typography variant="h3" sx={{textAlign: 'center'}}>Вход на сайт</Typography>*/}
          <Box sx={{pb: 1, pt: 2, textAlign: 'center'}}><img className="auth-logo" src={""} alt="logo" /></Box>
          <TextField
            fullWidth
            id="username"
            label="Введите email"
            margin="normal"
            name="username"
            type="email"
            variant="outlined"
            onChange={changeHandler}
            error={Boolean(errorForm)}
            size={'small'}
            onKeyPress={handleKeyPress}
          />
          <TextField
            fullWidth
            id="password"
            label="Введите пароль"
            margin="normal"
            name="password"
            // type="password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            onChange={changeHandler}
            error={Boolean(errorForm)}
            helperText={errorForm}
            size={'small'}
            onKeyPress={handleKeyPress}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleChangeShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box sx={{py: 2}}>
            <Button
              color="primary"
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              // disabled={loading}
              onClick={login}
            >
              Войти
            </Button>
          </Box>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            Забыли пароль?
          </Typography>
        </Box>
      </Container>
    </Box>
  )
});

export default AuthPage;