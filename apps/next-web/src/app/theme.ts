'use client'

import { PaletteOptions, createTheme } from '@mui/material/styles'

export const LEFT_MENU_ICON_COLOR = 'white'
export const BACKGROUND_LOADING_COLOR = 'rgba(240, 243, 247,0.6)'
export const flexRowStyle = {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '10px',
    alignItems: 'center',
}
export const borderStyle = { border: '1px solid #DCDCDC' }
export const alignCenterStyle = {
    alignItems: 'center',
    justifyItems: 'center',
}
export const flexColumnStyle = {
    display: 'flex',
    flexDirection: 'row',
    columnGap: '10px',
    alignItems: 'center',
}
export const profileBoxStyle = {
    backgroundColor: 'white',
    padding: '12px',
    borderRadius: '12px',
}

// Font files can be colocated inside of `pages`
// const notoSansJP = localFont({
//   src: [
//     {
//       path: './fonts/NotoSansJP-Regular.ttf',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: './fonts/NotoSansJP-Bold.ttf',
//       weight: '700',
//       style: 'normal',
//     },
//   ],
// });

const paletteOptions: PaletteOptions = {
    primary: {
        // main: '#1A4734',
        main: 'rgb(7, 25, 62)',
        dark: '#1A0A0E',
    },
    secondary: {
        main: '#082E67',
        dark: '#F7F7F7',
        light: '#FFFFFF',
    },
    text: {
        primary: '#000000',
    },
    action: {
        disabled: '#D5D5D5',
        active: '#929292',
    },
    error: {
        main: '#FF0000',
    },
}

const theme = createTheme({
    palette: paletteOptions,

    components: {
        MuiDialog: {
            styleOverrides: {
                root: {
                    '.MuiPickersLayout-toolbar': {
                        display: 'none',
                    },
                },
            },
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    '&.ui-date-picker .MuiIconButton-edgeEnd ': {
                        backgroundColor: '#F9DD9C',
                        right: '-2px',
                        borderRadius: '0 4px 4px 0',
                        color: 'white',
                    },
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    'input:-webkit-autofill': {
                        WebkitBoxShadow: '0 0 0 30px white inset !important',
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '14px',
                    height: '40px',
                },
                contained: {
                    ':hover': {
                        backgroundColor: 'rgb(13, 36, 83)',
                    },
                },
                // outlined: {
                //     color: '#0C4191',
                //     border: '1px solid #870903',
                //     ':hover': {
                //         backgroundColor: '#E90C00',
                //     },
                // },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontSize: '14px',
                    // fontFamily: notoSansJP.style.fontFamily,
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: 'rgb(39, 129, 176)',
                },
            },
        },
        MuiBreadcrumbs: {
            styleOverrides: {
                separator: {
                    marginRight: '2px',
                },
            },
        },
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    fontSize: '14px',
                    lineHeight: '14px',
                    color: '#1A4734',
                    borderColor: '#1A4734',
                    ':hover': {
                        backgroundColor: '#418B42',
                    },
                    '&.Mui-selected': {
                        backgroundColor: '#1A4734',
                        ':hover': {
                            backgroundColor: '#418B42',
                        },
                    },
                },
            },
        },
    },
})

export default theme

// import { PaletteOptions, createTheme } from '@mui/material/styles';
// import { red } from '@mui/material/colors';
// import { jaJP as coreJP } from '@mui/material/locale';
// import { jaJP } from '@mui/x-date-pickers/locales';

// const paletteOptions: PaletteOptions = {
//   primary: {
//     main: '#0C4191',
//   },
//   secondary: {
//     main: '#EA5267',
//   },
//   text: {
//     primary: '#222222',
//   },
//   action: {
//     disabled: '#D5D5D5',
//     active: '#929292',
//   },
//   error: {
//     main: red.A400,
//   },
// };

// const theme = createTheme(
//   {
//     palette: paletteOptions,
//     components: {
//       MuiButton: {
//         styleOverrides: {
//           root: {
//             borderRadius: '1000px',
//             padding: '12px 10px',
//             fontSize: '14px',
//             '&.Mui-disabled': {
//               color: '#222222',
//               backgroundColor: '#D5D5D5',
//             },
//           },
//           sizeLarge: {
//             padding: '16px 10px',
//             fontSize: '16px',
//           },
//         },
//       },
//       MuiFormControlLabel: {
//         styleOverrides: {
//           label: {
//             fontStyle: 'normal',
//             fontSize: '14px',
//             fontWeight: 400,
//           },
//         },
//       },

//       MuiTypography: {
//         styleOverrides: {
//           root: {
//             fontStyle: 'normal',
//             fontWeight: 400,
//             fontSize: '16px',
//             lineHeight: '150%',
//             color: '#222222',
//           }
//         },
//       },
//     },
//   },
//   coreJP,
//   jaJP
// );
