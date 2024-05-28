import React from 'react';
import {createTheme, CssBaseline, ThemeProvider} from '@mui/material';

export const Theme = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  );
};


export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1920
    }
  },
  components: {
    borderColor: '#ECEDFF',
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          cursor: 'pointer',
          fontWeight: 500,
        }
      }
    },
    MuiLocalizationProvider: {
      defaultProps: {
        localeText: {
          cancelButtonLabel: 'Отмена',
        },
      },
    },

    //styles for menu items - inspect select mui dropdown
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&[role="option"]': {
            fontSize:"16px",
            fontWeight:"700",
            lineHeight: "28px",
            color: "black",
            opacity: "1",
          },
        },
      },
    },


    MuiAutocomplete: {
      styleOverrides: {
        listbox: {
          "& .MuiAutocomplete-option": {
            fontSize:"16px !important",
            fontWeight:"700 !important",
            lineHeight: "28px !important",
            color: "black !important",
            opacity: "1",
          }
        },
      }
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          textTransform: 'none'
        },
        sizeSmall: {
          padding: '6px 16px'
        },
        sizeMedium: {
          padding: '8px 20px'
        },
        sizeLarge: {
          padding: '11px 24px'
        },
        textSizeSmall: {
          padding: '7px 12px'
        },
        textSizeMedium: {
          padding: '9px 16px'
        },
        textSizeLarge: {
          padding: '12px 16px'
        }
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '32px 24px',
          '&:last-child': {
            paddingBottom: '32px'
          }
        }
      }
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: 'h6'
        },
        subheaderTypographyProps: {
          variant: 'body2'
        }
      },
      styleOverrides: {
        root: {
          padding: '32px 24px'
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
          margin: 0,
          padding: 0
        },
        '@global': {
          '*::-webkit-scrollbar': {
            width: '10px'
          },
          '*::-webkit-scrollbar-track': {
            background: '#ffffff',
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(95, 102, 191, 0.5)',
            '-webkit-border-radius': '4px',
            borderRadius: "4px",
            width: '10px'
            // outline: '1px solid slategrey',
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'rgba(95, 102, 191, 1)',
            '-webkit-border-radius': '4px',
            borderRadius: "4px",
            width: '10px'
            // outline: '1px solid slategrey',
          }
        },
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
          '*::-webkit-scrollbar': {
            width: '10px'
          },
          '*::-webkit-scrollbar-track': {
            background: '#ffffff',
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(95, 102, 191, 0.5)',
            '-webkit-border-radius': '4px',
            borderRadius: "4px",
            width: '10px'
            // outline: '1px solid slategrey',
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'rgba(95, 102, 191, 1)',
            '-webkit-border-radius': '4px',
            borderRadius: "4px",
            width: '10px'
            // outline: '1px solid slategrey',
          }
        },
        body: {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%'
        },
        '#__next': {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          height: '100%',
          width: '100%'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#E6E8F0'
        }
      }
    },
    // MuiTableHead: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: '#F3F4F6',
    //       '.MuiTableCell-root': {
    //         color: '#374151'
    //       },
    //       borderBottom: 'none',
    //       '& .MuiTableCell-root': {
    //         borderBottom: 'none',
    //         fontSize: '12px',
    //         fontWeight: 600,
    //         lineHeight: 1,
    //         letterSpacing: 0.5,
    //         textTransform: 'uppercase'
    //       },
    //       '& .MuiTableCell-paddingCheckbox': {
    //         paddingTop: 4,
    //         paddingBottom: 4
    //       }
    //     }
    //   }
    // },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          '.MuiTableCell-root': {
            color: '#374151'
          },
          borderBottom: '1px solid #ADC4F5',
          '& .MuiTableCell-root': {
            borderBottom: 'none',
            fontSize: '12px',
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: 0.5,
            textTransform: 'none'
          },
          '& .MuiTableCell-paddingCheckbox': {
            paddingTop: 4,
            paddingBottom: 4
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '8px 0'
        }
      }
    },
    MuiTable: {
      styleOverrides: {
        root: {
          caption: {
            padding: '8px 0',
            borderTop: '1px solid #ADC4F5',
            fontWeight: 600,
          }
        }
      }
    }
  },
  palette: {
    neutral: {
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827'
    },
    action: {
      active: '#6B7280',
      focus: 'rgba(55, 65, 81, 0.12)',
      hover: 'rgba(236, 237, 255, 1)',
      selected: 'rgba(55, 65, 81, 0.08)',
      disabledBackground: 'rgba(55, 65, 81, 0.12)',
      disabled: 'rgba(55, 65, 81, 0.26)'
    },
    background: {
      // default: '#F3F4F9',
      default: '#F1F6FF',
      paper: '#FFFFFF'
    },
    divider: '#E6E8F0',
    primary: {
      white: '#FFFFFF',
      // main: '#1A5DED',
      main: '#286CFF',


      light: '#7494D9',


      light2: '#ECEDFF',
      light3: '#F5F6FF',
      light4: '#CDD0FA',
      dark: '#54599b',
      dark1: '#052D81',
      dark2: '#503179',
      black: '#5C5F81',
      black2: '#070609',
      violetDeep: '#8C82C6',
      violetDeep2: "#8c93e6",
      halfViolet: 'rgba(199, 205, 255, 0.5)',
      halfViolet2: 'rgba(199, 205, 255, 0.05)',
      halfBlue: 'rgba(157, 250, 255, 0.5)',
      halfGreen: 'rgba(144, 255, 176, 0.5)',
      halfRed: 'rgba(255, 167, 188, 0.5)',
      yellow: '#FEF9C5',
      yellow2: '#ffea9f',
      deepYellow: '#e0c064',
      halfYellow: 'rgba(255, 244, 134, 0.5)',
      orange: '#ffa338',
      green: '#cfffd1',
      halfBlack: 'rgba(0, 0, 0, 0.6)',
      halfGrey: 'rgba(205, 206, 219, 0.6)',
      deepGreen: '#3ec470',
      deepGreen2: '#91cb80',
      lightGreen: '#7cf5a9',
      lightGreen2: '#e2ffe4',
      violetGrey: '#F5F6FF',
      violetGrey2: '#dcdff4',
      grey: '#686868',
      grey2: '#a3a1ad',
      lightGrey: '#BABCD8',
      lightGrey2: '#EBEBEB',
      blue: '#00D6E4',
      aquamarine:'#10B981',
      lightblue: '#d5fdff',
      lightblue2: '#a8e7f5',
      deepblue: "#3994E8",
      deepblue2: '#7ba7d5',
      lightred: '#D14343',
      lightred2: '#FFC1D0',
      lightred3: '#E8A6B7',
      lightred4: '#ffdbe3',
      deepred: '#DF5656',
      deepred2: '#ed8997',
      deepRed3: '#ff475e',
      contrastText: '#FFFFFF',
      dashedGrey:  "repeating-linear-gradient(-40deg, rgba(167, 177, 255, 0.5) 0, rgba(167, 177, 255, 0.5) 2px, transparent 0px, transparent 5px)",
      dashedLightBlue:  "repeating-linear-gradient(-40deg, rgba(92, 255, 255, 0.5) 0, rgba(92, 255, 255, 0.5) 2px, transparent 1px, transparent 5px)",
      dashedGreen:  "repeating-linear-gradient(-40deg, rgba(129, 255, 133, 0.5) 0, rgba(129, 255, 133, 0.5) 2px, transparent 1px, transparent 5px)",
      dashedLightRed:  "repeating-linear-gradient(-40deg, rgba(255, 158, 180, 0.5) 0, rgba(255, 158, 180, 0.5) 2px, transparent 1px, transparent 5px)",

    },
    secondary: {
      main: '#10B981',
      light: '#ADC4F5',
      dark: '#1A5DED',
      contrastText: '#FFFFFF'
    },
    contrastLight: {
      main: "#FFFFFF",
    },
    success: {
      main: '#14B8A6',
      light: '#43C6B7',
      dark: '#0E8074',
      contrastText: '#FFFFFF'
    },
    info: {
      main: '#9499d7',
      light: '#CDD0FA',
      dark: '#7F85D3FF',
      contrastText: '#FFFFFF'
    },
    warning: {
      main: '#FFB020',
      light: '#FFBF4C',
      dark: '#B27B16',
      contrastText: '#FFFFFF'
    },
    error: {
      main: '#D14343',
      light: '#DA6868',
      dark: '#922E2E',
      contrastText: '#FFFFFF',
      pink: '#FFC1D0'
    },
    text: {
      primary: '#5c5f81',
      secondary: '#65748B',
      disabled: 'rgba(55, 65, 81, 0.48)'
    }
  },
  shape: {
    borderRadius: 8
  },
  typography: {
    button: {
      fontWeight: 600
    },
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.57
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.75
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.57
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.5px',
      lineHeight: 2.5,
      textTransform: 'uppercase'
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.66
    },
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.375,
    },
    h2: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.375
    },
    h3: {
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 1.375
    },
    h4: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.375
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.375
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.375
    },
    h7: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1
    }
  }
});