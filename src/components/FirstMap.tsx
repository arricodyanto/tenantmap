import React, { useState } from 'react'
import { Box,  Button,  ButtonGroup,  Card, CardActionArea, CardActions, CardContent, CardMedia, Fab, Modal, Popover, Typography } from '@mui/material'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

export const FirstMap = () => {
    // Popover on Hover
    const [anchorEl, setAnchorEl] = React.useState<any | null>(null)
    const open = Boolean(anchorEl);
    const handlePopoverOpen = (event: React.MouseEvent<any>) => {
        setAnchorEl(event.currentTarget);
    }
    const handlePopoverClose = () => {
        setAnchorEl(null);
    }

    // Popover on Click
    const [anchorClick, setAnchorClick] = React.useState<any | null>(null);
    const handleClick = (event: React.MouseEvent<any>) => {
        setAnchorClick(event.currentTarget)
    };
    const handleClose = () => {
        setAnchorClick(null);
    };
    const openEl = Boolean(anchorClick);
    const id = openEl ? 'simple-popover' : undefined;

    // Modal in Popover
    const [openn, setOpenn] = React.useState(false);
    const handleOpenn = () => setOpenn(true);
    const handleCloses = () => setOpenn(false);

    const [tenant, setTenant] = useState('')
    // const isFound = itemPopover.filter((item) => {
    //     if(item.id === tenant){
    //         return (
    //             console.log(item.name)
    //         )
    //     }
    // })
    // console.log(isFound)

  return (
      <Box id='wrapper' className='container relative border-2 border-slate-300 mx-auto lg:max-w-[1040px] sm:max-w-[650px]:'>
        <TransformWrapper
        initialScale={1} limitToBounds={false} centerOnInit={true}
        >
          {({ zoomIn, zoomOut, centerView, zoomToElement, ...rest }) => (
        <React.Fragment>
            <Box sx={{ right: '30px', bottom: '30px',}} className='absolute'>
                <ButtonGroup className='gap-2' orientation='vertical'>
                    <Fab size="small" color="primary" aria-label="reset" onClick={() => zoomToElement('map-canvass')}>
                        <RestartAltIcon />
                    </Fab>
                    <Fab size="small" color="primary" aria-label="zoom in" onClick={() => zoomIn()}>
                        <AddIcon />
                    </Fab>
                    <Fab  size="small" color="primary" aria-label="zoom out" onClick={() => zoomOut()}>
                        <RemoveIcon />
                    </Fab>
                </ButtonGroup>
            </Box>

            <TransformComponent>
                <Box id='pin' sx={{ top: '181.545px', left: '487px' }} className='absolute hover:brightness-110 hover:cursor-pointer'>
                    <FmdGoodIcon sx={{fontSize: 12}} color="success"/>
                </Box>
                {itemPopover.map((item) => (
                    <>
                        {/* Handle Popover */}
                        <Box key={item.id} id={item.id} sx={{ top: `${item.top}`, left: `${item.left}` }} className='absolute hover:brightness-110 hover:cursor-pointer' onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose} onClick={handleClick}>
                            <FmdGoodIcon sx={{fontSize: 12, color: '#af003a'}}/>
                        </Box>
                    </>
                ))}

                {itemPopover.map((item) => {
                        if(item.id === tenant){
                            return (
                                <>
                                    {/* <Popover id="mouse-over-popover" sx={{ pointerEvents: 'none', }} open={open} anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'center', }} transformOrigin={{ vertical: 'bottom', horizontal: 'center', }} onClose={handlePopoverClose} transitionDuration={0}> */}
                                        {/* <Typography>{item.name}</Typography> */}
                                        {/* <Card className='w-32 p-2'>
                                            <CardActionArea>
                                                <CardMedia component="img" width="128" height="128" image={item.image} alt={item.name} />
                                                <Typography className='text-center pt-1' variant='body2'>{item.name}</Typography>
                                            </CardActionArea>
                                        </Card>
                                    </Popover> */}

                                    <Popover id={id} open={openEl} anchorEl={anchorClick} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center', }} transformOrigin={{ vertical: 'bottom', horizontal: 'center', }}>
                                        <Card className='w-52'>
                                            <CardMedia sx={{ maxHeight: 128 }} component="img" alt='image' height='128' image={item.image} />
                                            <CardContent>
                                                <Typography sx={{ fontWeight: 'bold', fontSize: '16',}}>
                                                    {item.name}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                {/* Popover Media */}
                                                <Button className='mx-auto' sx={{ textTransform: 'none' }} variant="contained" color="info" size="small" disableElevation onClick={handleOpenn}>Lihat Lokasi</Button>
                                                <Modal open={openn} onClose={handleCloses} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                                                    <Box className='absolute w-96 bg-white p-2 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] shadow-sm border border-info'>
                                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                                        {item.name}
                                                    </Typography>
                                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellendus ullam, neque laudantium debitis deleniti illum quis aliquam praesentium voluptate rem assumenda cumque modi repudiandae, quasi sunt. A, fuga quasi.
                                                    </Typography>
                                                    </Box>
                                                </Modal>

                                            </CardActions>
                                        </Card>
                                    </Popover>
                                </>
                            )
                        } else {
                            return null
                        }
                })}

                <Box id='map-canvass' className='w-[1040px]'>
                    <svg width="1040" height="900" viewBox="0 0 1040 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="FF">
                        <path id="Vector 120" d="M70.8984 449.438L352.92 301.681L338.664 295.266L388.916 267.467L404.598 274.239L584.224 183L962.357 370.094C976.254 376.97 977.26 396.408 964.147 404.681L1000.5 421.432L765.275 569.695L723.22 544.39L438.812 716.888L330.823 647.39L292.688 669.843L141.574 570.764L176.858 551.162L69.5801 484.113C56.479 475.925 57.2135 456.607 70.8984 449.438Z" fill="#F4F4F4"/>
                        <path id="Vector 121" d="M482.631 366.598L439.783 389.264C437.678 390.377 437.647 393.381 439.729 394.538L450.93 400.761L438.456 407.176H406.782C406.284 407.176 405.794 407.3 405.356 407.537L361.796 431.065C359.758 432.166 359.683 435.063 361.662 436.268L388.503 452.606C389.42 453.164 390.566 453.189 391.507 452.672L511.769 386.613C513.833 385.479 513.846 382.518 511.791 381.367L485.501 366.632C484.612 366.134 483.531 366.121 482.631 366.598Z" fill="white" stroke="black" stroke-width="0.1"/>
                        <path id="redS" d="M405.667 293.136V285.964C405.667 284.534 406.677 283.303 408.079 283.023L453.152 274.008C454.554 273.728 455.563 272.496 455.563 271.066V260.463C455.563 259.124 456.451 257.947 457.739 257.579L510.768 242.428C512.056 242.06 512.944 240.883 512.944 239.543V231.186C512.944 229.424 514.455 228.041 516.211 228.198L529.635 229.397C531.391 229.554 532.902 228.171 532.902 226.409V221.102C532.902 219.378 534.351 218.009 536.072 218.107L549.145 218.847C550.656 218.932 551.995 217.878 552.266 216.388L552.456 215.342C552.488 215.165 552.504 214.986 552.504 214.806V211.068C552.504 209.365 553.92 208.004 555.622 208.07L567.563 208.539C569.265 208.605 570.681 207.244 570.681 205.541V202.13C570.681 200.736 571.64 199.526 572.997 199.209L586.439 196.063C587.083 195.912 587.758 195.978 588.36 196.251L634.495 217.129C635.569 217.615 636.259 218.684 636.259 219.863V225.696C636.259 226.832 635.617 227.871 634.6 228.379L623.516 233.922C623.008 234.175 622.414 234.193 621.893 233.969C620.954 233.567 619.864 233.966 619.407 234.88L618.893 235.907C618.598 236.497 618.117 236.973 617.525 237.262L604.446 243.642C604.075 243.823 603.63 243.749 603.338 243.457C602.729 242.848 601.688 243.279 601.688 244.141V244.644C601.688 245.089 601.436 245.496 601.038 245.695L585.229 253.599C584.83 253.799 584.353 253.762 583.99 253.502C583.193 252.933 582.086 253.503 582.086 254.482V254.858C582.086 255.379 581.796 255.857 581.334 256.098L566.525 263.824C566.001 264.098 565.378 264.103 564.85 263.839C563.81 263.319 562.555 263.88 562.249 265.001L562.052 265.724C561.872 266.381 561.429 266.934 560.826 267.252L509.374 294.35C508.727 294.691 507.939 294.621 507.362 294.172C506.298 293.345 504.736 293.884 504.409 295.191L504.275 295.729C504.121 296.342 503.715 296.861 503.157 297.156L456.994 321.595C456.101 322.068 455.03 322.059 454.145 321.572L407.221 295.765C406.263 295.237 405.667 294.23 405.667 293.136Z" fill="#BE191C"/>
                        <g id="03" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('03', 4, 100)} onMouseEnter={() => setTenant('03')}>
                        <path id="03s" d="M408.557 282.361L450.242 261.055C451.119 260.607 452.161 260.618 453.028 261.084L498.354 285.466C500.47 286.605 500.456 289.645 498.329 290.764L456.637 312.69C455.744 313.16 454.675 313.149 453.792 312.662L408.473 287.659C406.368 286.497 406.416 283.455 408.557 282.361Z" fill="#DF2327"/>
                        <text id="03text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="448.079" y="288.919">03</tspan></text>
                        </g>
                        <g id="02" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('02', 4, 100)} onMouseEnter={() => setTenant('02')}>
                        <path id="02s" d="M458.23 256.249L506.947 231.105C507.803 230.663 508.82 230.659 509.679 231.095L556.553 254.844C558.733 255.949 558.749 259.057 556.58 260.183L507.551 285.64C506.686 286.089 505.657 286.09 504.792 285.643L458.229 261.58C456.065 260.462 456.066 257.366 458.23 256.249Z" fill="#DF2327"/>
                        <text id="02text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="502.252" y="260.407">02</tspan></text>
                        </g>
                        <g id="01" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('01', 4, 100)} onMouseEnter={() => setTenant('01')}>
                        <g id="01s">
                        <path id="01s-1" d="M573.252 197.719L583.902 191.951C584.773 191.479 585.82 191.468 586.701 191.92L633.486 215.936C635.672 217.058 635.655 220.189 633.457 221.288L622.988 226.523C622.143 226.945 621.149 226.945 620.304 226.523L573.02 203.04C571.169 201.955 571.118 198.875 573.252 197.719Z" fill="#DF2327"/>
                        <path id="01s-2" opacity="0.9" d="M565.409 202.194L555.402 207.091C553.181 208.178 553.155 211.334 555.358 212.458L601.764 236.128C602.612 236.561 603.616 236.565 604.468 236.139L614.212 231.267C616.41 230.168 616.427 227.037 614.241 225.915L568.098 202.22C567.256 201.788 566.26 201.778 565.409 202.194Z" fill="#DF2327"/>
                        <path id="01s-3" d="M595.268 235.835L548.157 211.499C547.305 211.059 546.295 211.053 545.438 211.481L535.582 216.409C533.407 217.497 533.362 220.584 535.503 221.735L581.455 246.43C582.299 246.884 583.309 246.907 584.173 246.492L595.189 241.205C597.422 240.133 597.468 236.971 595.268 235.835Z" fill="#DF2327"/>
                        <path id="01s-4" d="M515.793 226.751L527.64 221.386C528.486 221.003 529.462 221.034 530.283 221.469L576.336 245.905C578.47 247.037 578.459 250.098 576.318 251.215L566.346 256.418C565.487 256.866 564.466 256.872 563.602 256.434L515.675 232.16C513.429 231.022 513.499 227.789 515.793 226.751Z" fill="#DF2327"/>
                        </g>
                        <text id="01-4" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="540.743" y="241.162">01</tspan></text>
                        <text id="01-3" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="559.989" y="231.182">01</tspan></text>
                        <text id="01-2" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="580.66" y="221.203">01</tspan></text>
                        <text id="01-1" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="598.48" y="211.937">01</tspan></text>
                        </g>
                        <path id="redSTwo" d="M123.398 437.946V431.866C123.398 430.539 124.27 429.37 125.542 428.991L167.942 416.368C169.214 415.989 170.086 414.82 170.086 413.493V407.838C170.086 406.415 171.086 405.188 172.479 404.9L210.818 396.978C212.211 396.691 213.211 395.463 213.211 394.04V385.157C213.211 383.84 214.07 382.676 215.328 382.289L275.958 363.634C277.217 363.247 278.076 362.084 278.076 360.767V352.249C278.076 350.668 279.302 349.359 280.879 349.255L297.012 348.197C298.59 348.094 299.816 346.784 299.816 345.204V341.136C299.816 339.44 301.221 338.081 302.916 338.138L318.1 338.644C319.795 338.7 321.2 337.341 321.2 335.645V330.699C321.2 329.042 322.543 327.699 324.2 327.699H340.297C341.954 327.699 343.297 326.356 343.297 324.699V318.649C343.297 317.267 344.242 316.063 345.585 315.735L372.99 309.043C373.612 308.891 374.266 308.942 374.857 309.189L421.642 328.711C422.76 329.177 423.487 330.269 423.487 331.48V338.053C423.487 339.142 422.898 340.145 421.947 340.674L396.056 355.095C395.609 355.343 395.062 355.33 394.628 355.059C393.693 354.474 392.48 355.146 392.48 356.249V356.371C392.48 356.928 392.165 357.437 391.667 357.687L374.635 366.203C374.218 366.411 373.717 366.349 373.364 366.046C372.613 365.402 371.453 365.936 371.453 366.925V367.188C371.453 367.669 371.183 368.109 370.755 368.328L354.232 376.751C353.671 377.037 352.988 376.902 352.578 376.424C351.918 375.654 350.677 375.85 350.286 376.787L349.672 378.26C349.468 378.752 349.101 379.16 348.634 379.416L331.365 388.864C330.824 389.16 330.157 389.091 329.689 388.689C328.878 387.994 327.621 388.358 327.307 389.379L326.851 390.861C326.656 391.495 326.217 392.025 325.631 392.335L266.969 423.392C266.387 423.7 265.667 423.539 265.272 423.012C264.64 422.17 263.329 422.352 262.951 423.334L262.343 424.915C262.146 425.427 261.771 425.851 261.286 426.108L222.544 446.679C222.098 446.916 221.545 446.786 221.251 446.374C220.751 445.675 219.661 445.882 219.453 446.716L219.098 448.136C218.98 448.606 218.667 449.002 218.236 449.224L176.237 470.901C175.296 471.387 174.169 471.341 173.271 470.779L124.808 440.49C123.931 439.942 123.398 438.98 123.398 437.946Z" fill="#BE191C"/>
                        <g id="04" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('04', 4, 100)} onMouseEnter={() => setTenant('04')}>
                        <path id="04s" d="M346.076 314.493L371.79 301.351C372.691 300.89 373.765 300.915 374.644 301.417L421.061 327.941C423.078 329.094 423.076 332.003 421.057 333.153L396.469 347.163C395.544 347.69 394.408 347.687 393.486 347.155L345.944 319.764C343.883 318.576 343.958 315.576 346.076 314.493Z" fill="#DF2327"/>
                        <text id="04text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="376.799" y="326.698">04</tspan></text>
                        </g>
                        <g id="05" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('05', 4, 100)} onMouseEnter={() => setTenant('05')}>
                        <path id="05s" d="M324.155 325.24L338.312 318.405C339.202 317.976 340.245 318.012 341.103 318.501L388.083 345.302C390.141 346.476 390.09 349.459 387.994 350.562L373.99 357.933C373.076 358.414 371.98 358.391 371.087 357.873L323.954 330.536C321.873 329.329 321.988 326.286 324.155 325.24Z" fill="#DF2327"/>
                        <text id="05text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="352.563" y="340.954">05</tspan></text>
                        </g>
                        <g id="06" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('06', 4, 100)} onMouseEnter={() => setTenant('06')}>
                        <path id="06s" d="M302.477 336.258L316.567 329.456C317.459 329.025 318.506 329.063 319.365 329.556L365.892 356.278C367.967 357.469 367.88 360.492 365.739 361.562L352.211 368.326C351.318 368.773 350.26 368.746 349.391 368.253L302.302 341.57C300.197 340.377 300.298 337.31 302.477 336.258Z" fill="#DF2327"/>
                        <text id="06text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="330.467" y="351.646">06</tspan></text>
                        </g>
                        <g id="07" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('07', 4, 100)} onMouseEnter={() => setTenant('07')}>
                        <path id="07s" d="M280.912 347.664L295.179 340.531C296.072 340.084 297.13 340.112 297.999 340.604L345.327 367.424C347.384 368.589 347.347 371.565 345.262 372.679L330.871 380.371C329.955 380.861 328.851 380.842 327.952 380.32L280.749 352.943C278.684 351.745 278.777 348.732 280.912 347.664Z" fill="#DF2327"/>
                        <text id="07text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="308.37" y="363.051">07</tspan></text>
                        </g>
                        <g id="08" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('08', 4, 100)} onMouseEnter={() => setTenant('08')}>
                        <path id="08s" d="M215.979 380.803L273.413 351.605C274.32 351.143 275.4 351.174 276.28 351.685L322.937 378.797C324.974 379.98 324.914 382.942 322.831 384.043L266.362 413.882C265.446 414.366 264.345 414.343 263.45 413.822L215.828 386.069C213.776 384.873 213.862 381.879 215.979 380.803Z" fill="#DF2327"/>
                        <text id="08text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="267.027" y="383.722">08</tspan></text>
                        </g>
                        <g id="09" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('09', 4, 100)} onMouseEnter={() => setTenant('09')}>
                        <path id="09s" d="M172.819 402.959L208.537 385.099C209.451 384.643 210.534 384.682 211.412 385.204L258.124 412.979C260.144 414.18 260.062 417.132 257.978 418.218L222.547 436.691C221.618 437.175 220.505 437.14 219.609 436.598L172.609 408.21C170.587 406.988 170.705 404.015 172.819 402.959Z" fill="#DF2327"/>
                        <text id="09text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="208.578" y="412.947">09</tspan></text>
                        </g>
                        <g id="10" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('10', 4, 100)} onMouseEnter={() => setTenant('10')}>
                        <path id="10s" d="M126.313 426.85L165.018 406.883C165.952 406.401 167.069 406.443 167.964 406.994L214.774 435.775C216.756 436.994 216.656 439.908 214.595 440.988L175.882 461.266C174.941 461.759 173.809 461.717 172.907 461.156L126.105 432.064C124.127 430.834 124.243 427.917 126.313 426.85Z" fill="#DF2327"/>
                        <text id="10text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="164.384" y="435.044">10</tspan></text>
                        </g>
                        <path id="Vector 61" d="M360.761 374.397V370.046C360.761 368.475 361.973 367.17 363.54 367.054L401.021 364.289C402.76 364.161 404.242 365.537 404.242 367.281V371.096C404.242 372.238 403.593 373.281 402.569 373.787L379.628 385.1C378.749 385.534 377.712 385.51 376.853 385.037L362.313 377.024C361.355 376.497 360.761 375.49 360.761 374.397Z" fill="#1F234D"/>
                        <path id="Vector 60" d="M379.731 379.674L401.904 368.31C404.004 367.234 404.096 364.266 402.067 363.061L396.777 359.92C395.879 359.387 394.769 359.359 393.845 359.847L383.944 365.072C383.044 365.547 381.965 365.534 381.078 365.036L374.977 361.62C374.11 361.135 373.059 361.11 372.17 361.555L363.434 365.922C361.333 366.973 361.2 369.922 363.199 371.157L376.785 379.556C377.678 380.108 378.796 380.153 379.731 379.674Z" fill="#343B79"/>
                        <path id="Vector 59" d="M379.65 386.92V382.924C379.65 381.486 380.671 380.25 382.083 379.978L395.749 377.35C397.162 377.078 398.183 375.842 398.183 374.404V373.912C398.183 372.52 399.14 371.311 400.496 370.992L409.737 368.817C410.109 368.73 410.495 368.714 410.873 368.772L431.272 371.862C432.739 372.085 433.823 373.345 433.823 374.828V377.248C433.823 378.341 433.228 379.348 432.271 379.876L416.74 388.433C416.508 388.561 416.223 388.541 416.011 388.382C415.567 388.049 414.934 388.379 414.934 388.934C414.934 389.191 414.79 389.429 414.561 389.546L398.216 397.878C397.307 398.342 396.224 398.311 395.342 397.797L381.138 389.511C380.217 388.974 379.65 387.987 379.65 386.92Z" fill="#1F234D"/>
                        <path id="Vector 57" d="M399.148 370.729L415.527 362.855C415.825 362.712 416.174 362.725 416.46 362.89L432.925 372.389C433.615 372.787 433.585 373.793 432.873 374.149L416.492 382.34C416.187 382.492 415.826 382.479 415.533 382.304L399.069 372.489C398.384 372.081 398.429 371.075 399.148 370.729Z" fill="#343B79"/>
                        <path id="Vector 58" d="M380.539 380.358L396.276 372.489C396.576 372.339 396.932 372.35 397.223 372.518L413.68 382.012C414.37 382.41 414.34 383.416 413.627 383.772L397.257 391.957C396.946 392.113 396.578 392.096 396.283 391.913L380.459 382.102C379.794 381.69 379.839 380.708 380.539 380.358Z" fill="#343B79"/>
                        <path id="Vector 49" d="M425.626 339.088V332.571C425.626 331.35 426.367 330.25 427.499 329.791L521.406 291.748C522.538 291.29 523.279 290.19 523.279 288.968V281.152C523.279 279.804 524.178 278.622 525.476 278.262L535.355 275.517C535.85 275.38 536.372 275.372 536.871 275.494L583.362 286.866C584.705 287.194 585.65 288.398 585.65 289.78V294.965C585.65 296.034 585.081 297.022 584.156 297.559L564.425 309.016C563.894 309.324 563.232 309.293 562.732 308.936C561.891 308.335 560.708 308.702 560.355 309.674L559.95 310.786C559.745 311.35 559.342 311.819 558.816 312.106L467.678 361.849C466.79 362.334 465.718 362.338 464.826 361.861L427.21 341.733C426.235 341.211 425.626 340.195 425.626 339.088Z" fill="#81B9A5"/>
                        <path id="Vector 55" d="M221.764 447.695V441.9C221.764 440.388 222.891 439.111 224.392 438.924L239.095 437.086C240.596 436.898 241.723 435.622 241.723 434.109V432.036C241.723 430.63 242.699 429.412 244.072 429.107L274.657 422.311C276.03 422.006 277.006 420.788 277.006 419.382V413.618C277.006 412.009 278.275 410.687 279.882 410.62L291.239 410.147C292.845 410.08 294.114 408.758 294.114 407.15V404.289C294.114 402.859 295.123 401.628 296.525 401.348L325.56 395.541C326.962 395.26 327.972 394.029 327.972 392.599V385.408C327.972 384.142 328.767 383.012 329.958 382.584L341.087 378.589C341.6 378.405 342.154 378.364 342.689 378.471L391.138 388.161C392.54 388.441 393.55 389.673 393.55 391.103V397.936C393.55 399.02 392.964 400.02 392.019 400.551L368.229 413.913C367.811 414.148 367.29 414.096 366.925 413.784C366.183 413.148 365.037 413.675 365.037 414.652V414.967C365.037 415.438 364.781 415.87 364.369 416.097L333.308 433.163C332.9 433.388 332.39 433.291 332.091 432.933C331.574 432.312 330.569 432.556 330.393 433.345L330.237 434.048C330.156 434.412 329.926 434.725 329.603 434.911L316.593 442.391C316.168 442.636 315.628 442.533 315.322 442.15C314.889 441.61 314.049 441.666 313.693 442.26L312.627 444.037C312.406 444.405 312.093 444.707 311.718 444.915L279.538 462.717C279.103 462.957 278.559 462.855 278.24 462.473C277.712 461.839 276.69 462.048 276.453 462.839L276.132 463.908C276.007 464.323 275.723 464.672 275.341 464.878L241.134 483.323C240.177 483.839 239.016 483.797 238.099 483.214L217.451 470.074C216.586 469.523 216.062 468.569 216.062 467.543V461.567C216.062 460.184 217.007 458.98 218.351 458.652L224.347 457.19C226.835 456.583 227.467 453.338 225.389 451.841L223.011 450.129C222.228 449.565 221.764 448.66 221.764 447.695Z" fill="#81B9A5"/>
                        <g id="42" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('42', 4, 100)} onMouseEnter={() => setTenant('42')}>
                        <path id="42s" d="M526.25 276.317L544.012 267.436C544.869 267.008 545.88 267.014 546.731 267.455L582.475 285.933C584.599 287.03 584.648 290.05 582.561 291.216L564.649 301.226C563.746 301.731 562.645 301.734 561.738 301.235L526.145 281.628C524.027 280.462 524.088 277.398 526.25 276.317Z" fill="#91D2BB"/>
                        <text id="42text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="549.297" y="286.781">42</tspan></text>
                        </g>
                        <g id="43" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('43', 4, 100)} onMouseEnter={() => setTenant('43')}>
                        <path id="43s" d="M428.089 328.628L518.263 280.713C519.168 280.232 520.255 280.246 521.147 280.75L555.989 300.444C558.041 301.603 558.016 304.566 555.946 305.691L467.68 353.655C466.791 354.138 465.719 354.14 464.827 353.662L428.077 333.92C425.965 332.785 425.972 329.753 428.089 328.628Z" fill="#91D2BB"/>
                        <text id="43text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="489.421" y="318.144">43</tspan></text>
                        </g>
                        <g id="44" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('44', 4, 100)} onMouseEnter={() => setTenant('44')}>
                        <path id="44s" d="M330.494 380.444L354.303 367.689C355.216 367.2 356.317 367.217 357.215 367.733L391.331 387.358C393.378 388.535 393.325 391.507 391.238 392.61L366.533 405.673C365.605 406.163 364.487 406.133 363.587 405.593L330.367 385.661C328.37 384.463 328.441 381.544 330.494 380.444Z" fill="#91D2BB"/>
                        <text id="44text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="353.989" y="388.711">44</tspan></text>
                        </g>
                        <g id="45" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('45', 4, 100)} onMouseEnter={() => setTenant('45')}>
                        <path id="45s" d="M296.742 399.04L323.981 385.13C324.911 384.656 326.02 384.698 326.91 385.242L359.554 405.191C361.52 406.393 361.454 409.271 359.434 410.38L333.062 424.87C332.118 425.389 330.969 425.362 330.051 424.799L296.539 404.27C294.541 403.045 294.655 400.105 296.742 399.04Z" fill="#91D2BB"/>
                        <text id="45text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="322.626" y="406.532">45</tspan></text>
                        </g>
                        <g id="46" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('4645', 4, 100)} onMouseEnter={() => setTenant('46')}>
                        <path id="46s" d="M279.529 408.254L289.384 402.998C290.327 402.496 291.465 402.532 292.373 403.093L325.629 423.652C327.607 424.874 327.502 427.785 325.442 428.862L315.924 433.837C314.996 434.323 313.881 434.288 312.984 433.747L279.39 413.47C277.397 412.267 277.475 409.35 279.529 408.254Z" fill="#91D2BB"/>
                        <text id="46text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="297.678" y="420.788">46</tspan></text>
                        </g>
                        <g id="47" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('47', 4, 100)} onMouseEnter={() => setTenant('47')}>
                        <path id="47s" d="M244.216 426.86L272.293 412.237C273.227 411.75 274.348 411.789 275.246 412.34L308.923 432.97C310.893 434.177 310.816 437.066 308.784 438.166L280.689 453.385C279.735 453.901 278.577 453.863 277.66 453.284L244.002 432.059C242.044 430.824 242.163 427.93 244.216 426.86Z" fill="#91D2BB"/>
                        <text id="47text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="270.591" y="435.044">47</tspan></text>
                        </g>
                        <g id="48" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('48', 4, 100)} onMouseEnter={() => setTenant('48')}>
                        <path id="48s" d="M224.486 436.91L236.286 430.774C237.226 430.285 238.354 430.329 239.254 430.888L272.944 451.831C274.907 453.051 274.811 455.938 272.772 457.026L241.454 473.729C240.516 474.229 239.384 474.196 238.478 473.642L218.783 461.606C216.797 460.393 216.89 457.478 218.948 456.393L229.421 450.871C231.433 449.81 231.578 446.983 229.686 445.721L224.206 442.068C222.307 440.802 222.461 437.963 224.486 436.91Z" fill="#91D2BB"/>
                        <text id="48text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="239.941" y="452.864">48</tspan></text>
                        </g>
                        <path id="Vector 56" d="M403.674 352.153L423.337 341.516C423.651 341.346 424.031 341.356 424.335 341.542L428.788 344.264C429.443 344.664 429.421 345.623 428.748 345.993L409.369 356.652C409.062 356.82 408.689 356.816 408.386 356.641L403.649 353.898C402.973 353.507 402.987 352.525 403.674 352.153Z" fill="#ECBB82"/>
                        <path id="Vector 132" d="M648.982 241.571L631.507 232.674C630.796 232.312 630.775 231.303 631.471 230.911L635.083 228.88C635.372 228.717 635.723 228.708 636.02 228.857L653.766 237.73C654.494 238.093 654.506 239.127 653.787 239.508L649.904 241.563C649.616 241.716 649.273 241.718 648.982 241.571Z" fill="#ECBB82"/>
                        <path id="Vector 133" d="M641.93 245.147L624.455 236.251C623.743 235.888 623.722 234.879 624.418 234.488L628.03 232.456C628.32 232.293 628.671 232.285 628.968 232.433L646.713 241.306C647.441 241.67 647.453 242.704 646.734 243.084L642.851 245.14C642.564 245.292 642.22 245.295 641.93 245.147Z" fill="#ECBB82"/>
                        <path id="Vector 126" d="M463.76 669.131L490.023 653.724C490.314 653.552 490.673 653.54 490.976 653.692L497.619 657.013L471.061 673.087L471.061 673.087L470.909 673.179C470.678 673.319 470.388 673.316 470.159 673.172L470.01 673.078L470.009 673.077L463.76 669.131Z" fill="#ECBB82"/>
                        <path id="Vector 128" d="M763.137 550.806L788.669 535.067C788.97 534.881 789.346 534.869 789.659 535.033L795.926 538.332L770.286 554.854C770.055 554.994 769.764 554.991 769.536 554.847L769.37 554.742L763.137 550.806Z" fill="#ECBB82"/>
                        <path id="Vector 129" d="M755.296 545.816L780.828 530.077C781.129 529.892 781.505 529.879 781.818 530.044L788.085 533.342L762.445 549.865C762.214 550.004 761.924 550.002 761.695 549.857L761.529 549.752L755.296 545.816Z" fill="#ECBB82"/>
                        <path id="Vector 130" d="M890.349 373.119L915.058 356.118C915.349 355.917 915.725 355.886 916.046 356.034L922.47 359.014L897.692 376.803C897.468 376.955 897.178 376.966 896.943 376.834L896.771 376.737L890.349 373.119Z" fill="#ECBB82"/>
                        <path id="Vector 131" d="M882.268 368.529L906.977 351.528C907.268 351.328 907.643 351.296 907.964 351.445L914.389 354.424L889.611 372.214C889.387 372.365 889.097 372.377 888.861 372.244L888.69 372.148L882.268 368.529Z" fill="#ECBB82"/>
                        <path id="Vector 127" d="M472.314 673.764L498.576 658.357C498.868 658.185 499.227 658.173 499.529 658.325L506.172 661.646L479.615 677.72L479.614 677.721L479.463 677.812C479.232 677.952 478.941 677.949 478.713 677.805L478.564 677.711L478.563 677.71L472.314 673.764Z" fill="#ECBB82"/>
                        <path id="Vector 122" d="M438.245 397.416L457.908 386.779C458.222 386.609 458.602 386.619 458.906 386.805L463.359 389.526C464.014 389.927 463.992 390.886 463.319 391.256L443.94 401.914C443.633 402.083 443.26 402.079 442.957 401.904L438.22 399.161C437.544 398.769 437.558 397.788 438.245 397.416Z" fill="#ECBB82"/>
                        <path id="orangeS" d="M71.0068 473.582V465.173C71.0068 463.345 72.629 461.941 74.4387 462.205L186.051 478.439C187.525 478.654 188.619 479.918 188.619 481.408V486.83C188.619 487.833 188.118 488.77 187.283 489.326L183.466 491.871C181.315 493.305 181.864 496.606 184.363 497.267L199.93 501.388C201.246 501.736 202.162 502.927 202.162 504.288V508.872C202.162 510.263 203.119 511.471 204.472 511.791L219.454 515.332C220.808 515.652 221.764 516.861 221.764 518.252V522.098C221.764 523.629 222.917 524.914 224.439 525.08L238.692 526.635C240.214 526.801 241.366 528.086 241.366 529.617V532.555C241.366 534.033 242.444 535.292 243.905 535.519L254.866 537.224C256.327 537.451 257.404 538.709 257.404 540.188V545.22C257.404 546.442 258.146 547.542 259.278 548L298.655 563.946C299.788 564.405 300.529 565.505 300.529 566.727V572.708C300.529 573.907 301.243 574.991 302.345 575.464L349.322 595.645C350.424 596.118 351.138 597.202 351.138 598.401V605.328C351.138 606.928 352.394 608.247 353.993 608.324L370.38 609.117C371.978 609.194 373.235 610.513 373.235 612.114V619.128C373.235 620.459 374.111 621.631 375.388 622.006L407.434 631.432C408.711 631.807 409.588 632.979 409.588 634.31V643.194C409.588 644.249 409.033 645.227 408.127 645.769L376.634 664.6C375.645 665.191 374.405 665.164 373.443 664.53L344.63 645.539C344.021 645.137 343.653 644.456 343.653 643.725V642.66C343.653 641.118 341.788 640.345 340.698 641.436C340.132 642.002 339.252 642.106 338.569 641.688L323.179 632.266C322.591 631.905 322.145 631.353 321.917 630.702L320.88 627.738C320.445 626.495 318.753 626.332 318.089 627.47C317.647 628.227 316.665 628.465 315.926 627.994L272.806 600.492C272.292 600.164 271.89 599.688 271.654 599.127L270.367 596.071C269.779 594.675 267.99 594.275 266.864 595.288C266.12 595.958 265.018 596.042 264.182 595.492L228.854 572.277C228.412 571.986 228.055 571.584 227.819 571.111L226.336 568.147C225.84 567.155 224.519 566.941 223.735 567.725C223.206 568.254 222.384 568.353 221.744 567.965L212.071 562.103C211.451 561.727 211.072 561.055 211.072 560.33C211.072 558.851 209.568 557.848 208.202 558.417L207.854 558.562C207.187 558.84 206.428 558.792 205.802 558.432L190.779 549.802C190.316 549.536 190.001 549.071 189.925 548.541L189.7 546.966C189.564 546.015 188.347 545.704 187.771 546.472C187.442 546.91 186.836 547.032 186.363 546.754L171.731 538.166C171.129 537.812 170.668 537.26 170.43 536.604L170.092 535.673C169.66 534.488 168.534 533.698 167.272 533.698H166.982C166.447 533.698 165.923 533.556 165.462 533.285L144.78 521.138C144.096 520.737 143.599 520.081 143.398 519.315L142.814 517.095C142.4 515.525 140.502 514.909 139.245 515.937C138.507 516.541 137.465 516.608 136.655 516.104L72.4217 476.129C71.5418 475.582 71.0068 474.619 71.0068 473.582Z" fill="#DC721C"/>
                        <g id="11" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('11', 4, 100)} onMouseEnter={() => setTenant('11')}>
                        <path id="11s" d="M73.4905 459.312L117.608 436.471C118.546 435.986 119.671 436.029 120.569 436.586L185.981 477.141C187.945 478.359 187.853 481.246 185.816 482.336L141.341 506.139C140.384 506.651 139.226 506.607 138.311 506.023L73.2559 464.505C71.3076 463.262 71.438 460.375 73.4905 459.312Z" fill="#F47F20"/>
                        <text id="11text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="121.616" y="469.971">11</tspan></text>
                        </g>
                        <g id="12" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('12', 4, 100)} onMouseEnter={() => setTenant('12')}>
                        <path id="12s" d="M147.617 505.642L179.294 489.205C180.217 488.727 181.321 488.76 182.214 489.292L200.232 500.049C202.207 501.228 202.175 504.1 200.174 505.235L169.162 522.828C168.196 523.376 167.006 523.346 166.069 522.748L147.386 510.834C145.437 509.592 145.566 506.706 147.617 505.642Z" fill="#F47F20"/>
                        <text id="12text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="170.086" y="507.037">12</tspan></text>
                        </g>
                        <g id="13" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('13', 4, 100)} onMouseEnter={() => setTenant('13')}>
                        <path id="13s" d="M174.505 522.276L204.84 505.027C205.821 504.469 207.033 504.509 207.975 505.131L220.053 513.102C221.951 514.355 221.819 517.181 219.813 518.252L189.065 534.671C188.126 535.173 186.993 535.139 186.085 534.584L174.421 527.442C172.473 526.25 172.519 523.405 174.505 522.276Z" fill="#F47F20"/>
                        <text id="13text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="191.47" y="521.293">13</tspan></text>
                        </g>
                        <g id="14" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('14', 4, 100)} onMouseEnter={() => setTenant('14')}>
                        <path id="14s" d="M194.327 534.048L224.496 517.78C225.451 517.266 226.608 517.306 227.524 517.886L239.153 525.243C241.096 526.472 240.991 529.34 238.964 530.424L209.008 546.44C208.078 546.937 206.955 546.909 206.05 546.367L194.208 539.261C192.213 538.065 192.28 535.152 194.327 534.048Z" fill="#F47F20"/>
                        <text id="14text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="212.142" y="533.41">14</tspan></text>
                        </g>
                        <g id="15" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('15', 4, 100)} onMouseEnter={() => setTenant('15')}>
                        <path id="15s" d="M214.275 545.98L243.727 529.916C244.689 529.391 245.86 529.433 246.783 530.024L254.996 535.289C256.898 536.508 256.821 539.313 254.854 540.426L225.54 557.007C224.539 557.574 223.302 557.518 222.356 556.863L214.004 551.081C212.168 549.81 212.315 547.05 214.275 545.98Z" fill="#F47F20"/>
                        <text id="15text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="229.249" y="545.528">15</tspan></text>
                        </g>
                        <g id="16" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('16', 4, 100)} onMouseEnter={() => setTenant('16')}>
                        <path id="16s" d="M231.007 556.929L260.129 540.288C261.086 539.741 262.264 539.763 263.2 540.343L298.756 562.413C300.685 563.61 300.636 566.433 298.668 567.563L268.624 584.816C267.644 585.378 266.432 585.343 265.487 584.724L230.852 562.043C228.978 560.815 229.062 558.04 231.007 556.929Z" fill="#F47F20"/>
                        <text id="16text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="259.899" y="564.773">16</tspan></text>
                        </g>
                        <g id="17" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('17', 4, 100)} onMouseEnter={() => setTenant('17')}>
                        <path id="17s" d="M274.485 584.711L303.95 567.747C304.915 567.191 306.108 567.216 307.049 567.81L348.71 594.123C350.621 595.329 350.562 598.135 348.602 599.261L318.513 616.54C317.537 617.1 316.33 617.067 315.386 616.455L274.349 589.828C272.468 588.607 272.542 585.83 274.485 584.711Z" fill="#F47F20"/>
                        <text id="17_2" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="306.944" y="593.286">17</tspan></text>
                        </g>
                        <g id="18" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('18', 4, 100)} onMouseEnter={() => setTenant('18')}>
                        <path id="18s" d="M324.107 616.384L353.548 599.433C354.482 598.895 355.632 598.9 356.562 599.445L371.269 608.066C373.256 609.231 373.244 612.108 371.246 613.256L341.292 630.457C340.332 631.008 339.147 630.986 338.208 630.399L324.014 621.528C322.094 620.327 322.144 617.514 324.107 616.384Z" fill="#F47F20"/>
                        <text id="18text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="343.297" y="617.521">18</tspan></text>
                        </g>
                        <g id="19" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('19', 4, 100)} onMouseEnter={() => setTenant('19')}>
                        <path id="19s" d="M346.062 630.637L375.595 613.036C376.554 612.465 377.751 612.473 378.702 613.057L407.084 630.5C409.019 631.69 408.982 634.515 407.015 635.653L376.591 653.251C375.623 653.811 374.425 653.786 373.481 653.188L345.99 635.747C344.102 634.549 344.141 631.782 346.062 630.637Z" fill="#F47F20"/>
                        <text id="19text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="371.096" y="635.341">19</tspan></text>
                        </g>
                        <path id="yellowS" d="M378.224 665.006V657.356C378.224 656.083 379.028 654.948 380.229 654.526L423.39 639.352C423.691 639.247 424.006 639.19 424.324 639.183L491.35 637.829C493.031 637.795 494.411 639.148 494.411 640.829V646.766C494.411 647.817 493.861 648.791 492.961 649.334L462.182 667.913C459.753 669.379 460.528 673.085 463.341 673.455L465.785 673.777C467.278 673.973 468.394 675.246 468.394 676.751V683.506C468.394 684.54 467.861 685.502 466.984 686.05L438.65 703.758C437.662 704.376 436.406 704.365 435.428 703.731L379.592 667.523C378.739 666.97 378.224 666.022 378.224 665.006Z" fill="#D9B50C"/>
                        <path id="yellowSTwo" d="M462.335 614.404V607.46C462.335 605.868 463.579 604.553 465.168 604.465L485.162 603.354C486.752 603.266 487.996 601.951 487.996 600.359V591.607C487.996 590.246 488.913 589.055 490.23 588.707L505.957 584.552C506.561 584.393 507.199 584.426 507.783 584.646L558.761 603.89C559.929 604.33 560.701 605.448 560.701 606.696V615.115C560.701 616.128 560.189 617.074 559.34 617.627L537.702 631.739C536.73 632.373 535.479 632.39 534.491 631.782L523.816 625.212C522.834 624.608 521.593 624.62 520.623 625.243L499.966 638.5C498.972 639.138 497.694 639.133 496.705 638.487L463.694 616.915C462.846 616.361 462.335 615.416 462.335 614.404Z" fill="#D9B50C"/>
                        <g id="20" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('20', 4, 100)} onMouseEnter={() => setTenant('20')}>
                        <path id="20s" d="M380.335 652.749L450.775 611.604C451.745 611.037 452.952 611.061 453.9 611.665L492.447 636.223C494.33 637.422 494.289 640.185 492.372 641.329L458.291 661.663C456.38 662.803 456.332 665.555 458.203 666.761L466.172 671.896C468.028 673.092 467.999 675.816 466.119 676.973L439.342 693.452C438.364 694.053 437.128 694.044 436.16 693.428L380.238 657.871C378.343 656.666 378.395 653.882 380.335 652.749Z" fill="#F1CA11"/>
                        <text id="20text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="431.684" y="651.735">20</tspan></text>
                        </g>
                        <path id="Vector 80" d="M310.865 454.026V451.145C310.865 449.802 311.757 448.623 313.049 448.258L327.259 444.242L354.288 434.921C356.236 434.25 358.266 435.697 358.266 437.758V439.649C358.266 441.23 359.493 442.54 361.071 442.643L371.855 443.346C373.433 443.449 374.66 444.759 374.66 446.34V448.18C374.66 449.77 375.901 451.084 377.489 451.175L384.305 451.565C385.893 451.655 387.134 452.969 387.134 454.56V457.455C387.134 458.539 386.549 459.539 385.604 460.071L351.301 479.345C350.325 479.894 349.124 479.853 348.188 479.239L339.912 473.817C339.578 473.598 339.377 473.226 339.377 472.827V472.542C339.377 471.718 338.459 471.227 337.774 471.684C337.446 471.902 337.022 471.915 336.682 471.717L325.127 464.976C324.664 464.706 324.314 464.276 324.144 463.766L323.843 462.862C323.577 462.064 322.665 461.686 321.912 462.062C321.471 462.283 320.947 462.252 320.535 461.982L312.22 456.535C311.374 455.981 310.865 455.037 310.865 454.026Z" fill="#0698BD"/>
                        <g id="30" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('30', 4, 100)} onMouseEnter={() => setTenant('30')}>
                        <path id="30s" d="M343.741 465.656L376.33 447.249C377.279 446.713 378.444 446.733 379.373 447.303L384.551 450.476C386.506 451.674 386.449 454.533 384.449 455.652L351.629 474.019C350.667 474.557 349.489 474.525 348.558 473.936L343.611 470.802C341.695 469.589 341.766 466.771 343.741 465.656Z" fill="#0AADD7"/>
                        <text id="30text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="358.266" y="462.843">30</tspan></text>
                        </g>
                        <g id="31" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('31', 4, 100)} onMouseEnter={() => setTenant('31')}>
                        <path id="31s" d="M327.855 455.97L360.719 437.578C361.631 437.068 362.742 437.069 363.652 437.58L372.146 442.344C374.186 443.489 374.189 446.425 372.151 447.574L339.115 466.195C338.175 466.724 337.023 466.709 336.098 466.154L327.777 461.161C325.8 459.975 325.844 457.096 327.855 455.97Z" fill="#0AADD7"/>
                        <text id="31text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="344.723" y="454.289">31</tspan></text>
                        </g>
                        <g id="32" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('32', 4, 100)} onMouseEnter={() => setTenant('32')}>
                        <path id="32s" d="M313.536 447.537L347.131 429.377C348.068 428.871 349.202 428.899 350.113 429.451L356.016 433.029C357.979 434.218 357.933 437.081 355.934 438.208L322.78 456.894C321.809 457.442 320.614 457.405 319.677 456.8L313.333 452.695C311.419 451.456 311.531 448.621 313.536 447.537Z" fill="#0AADD7"/>
                        <text id="32text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="330.467" y="445.023">32</tspan></text>
                        </g>
                        <path id="Vector 88" d="M496.549 353.742V350.247C496.549 348.922 497.419 347.753 498.689 347.373L545.376 333.401L624.255 321.45C626.071 321.175 627.705 322.58 627.705 324.416V326.99C627.705 328.086 627.107 329.095 626.145 329.622L538.638 377.509C537.73 378.006 536.631 378 535.729 377.494L498.081 356.358C497.135 355.827 496.549 354.826 496.549 353.742Z" fill="#15526B"/>
                        <path id="Vector 89" d="M404.954 466.778V463.044C404.954 461.807 405.713 460.697 406.866 460.248L456.052 441.102C457.251 440.636 458.019 439.456 457.96 438.17L457.838 435.48C457.763 433.824 459.045 432.421 460.702 432.347L470.873 431.895C472.476 431.824 473.74 430.503 473.74 428.898V425.735C473.74 424.127 475.008 422.805 476.615 422.738L487.972 422.265C489.579 422.198 490.847 420.876 490.847 419.267V415.851C490.847 414.513 491.733 413.337 493.019 412.968L524.671 403.879C525.957 403.51 526.843 402.334 526.843 400.996V396.077C526.843 394.654 527.843 393.427 529.237 393.139L548.666 389.13C549.082 389.044 549.511 389.047 549.925 389.14L586.867 397.386C588.238 397.692 589.214 398.909 589.214 400.314V404.026C589.214 405.094 588.646 406.081 587.723 406.618L561.917 421.645C561.43 421.928 560.808 421.795 560.48 421.336C559.97 420.622 558.868 420.772 558.568 421.597L558.083 422.931C557.933 423.344 557.64 423.689 557.258 423.904L527.579 440.62C527.16 440.856 526.632 440.738 526.353 440.347C525.87 439.672 524.812 439.908 524.664 440.726L524.463 441.83C524.39 442.23 524.148 442.58 523.799 442.789L510.794 450.592C510.375 450.844 509.842 450.799 509.471 450.481C508.735 449.85 507.598 450.373 507.598 451.343V451.941C507.598 452.466 507.306 452.948 506.841 453.191L492.665 460.601C492.219 460.834 491.674 460.751 491.319 460.395C490.748 459.824 489.782 460.004 489.454 460.741L488.971 461.828C488.8 462.211 488.512 462.53 488.148 462.738L442.119 488.991C441.177 489.529 440.019 489.516 439.089 488.958L406.411 469.351C405.507 468.809 404.954 467.832 404.954 466.778Z" fill="#15526B"/>
                        <path id="Vector 102" d="M616.409 233.928L595.775 244.517C593.614 245.626 593.598 248.709 595.747 249.841L616.276 260.645C617.18 261.121 618.263 261.104 619.151 260.602L639.78 248.93C641.896 247.733 641.784 244.648 639.587 243.608L619.063 233.886C618.22 233.487 617.239 233.502 616.409 233.928Z" fill="#343B79"/>
                        <path id="Vector 103" d="M559.632 268.155V263.038C559.632 261.661 560.569 260.461 561.905 260.127L573.071 257.336C573.605 257.202 574.167 257.218 574.693 257.383L618.25 270.994C619.051 271.245 619.921 271.148 620.648 270.727L669.762 242.275C670.649 241.761 671.737 241.735 672.647 242.207L709.677 261.408L780.746 286.715C781.941 287.141 782.739 288.273 782.739 289.542V295.314C782.739 296.387 782.166 297.378 781.236 297.914L701.846 343.623C700.953 344.137 699.858 344.157 698.946 343.675L561.229 270.807C560.247 270.287 559.632 269.267 559.632 268.155Z" fill="#81B9A5"/>
                        <path id="Vector 100" d="M620.22 348.346V345.063C620.22 343.662 621.19 342.447 622.556 342.137L677.496 329.666C678.031 329.545 678.589 329.572 679.109 329.746L697.647 335.925C698.872 336.333 699.698 337.48 699.698 338.771V343.407C699.698 344.491 699.113 345.491 698.168 346.022L658 368.596C657.111 369.096 656.028 369.109 655.127 368.632L621.817 350.997C620.835 350.477 620.22 349.457 620.22 348.346Z" fill="#15526B"/>
                        <path id="Vector 95" d="M374.66 490.735V487.723V482.282C374.66 480.879 375.633 479.663 377.002 479.355L402.78 473.555C403.04 473.496 403.308 473.473 403.574 473.485L416.327 474.065C417.787 474.131 418.986 475.239 419.168 476.689L419.358 478.21C419.488 479.248 420.149 480.144 421.103 480.573L426.404 482.959C426.597 483.046 426.799 483.112 427.007 483.156L434.303 484.72C435.686 485.016 436.674 486.238 436.674 487.653V488.055C436.674 489.346 437.5 490.493 438.725 490.901L453.868 495.949C455.093 496.357 455.92 497.504 455.92 498.795V501.489C455.92 502.35 456.618 503.048 457.479 503.048C457.627 503.048 457.774 503.069 457.915 503.11L472.649 507.407C473.929 507.781 474.809 508.954 474.809 510.287V510.74C474.809 512.397 476.152 513.74 477.809 513.74H480.931C481.359 513.74 481.782 513.832 482.172 514.009L491.583 518.287C492.654 518.773 493.342 519.841 493.342 521.018V523.096C493.342 524.146 492.792 525.12 491.894 525.664L462.427 543.473C461.491 544.039 460.321 544.05 459.374 543.503L445.695 535.6C445.167 535.295 444.781 534.794 444.621 534.206L444.407 533.422C444.106 532.317 442.824 531.815 441.852 532.422C441.3 532.767 440.6 532.769 440.047 532.426L426.789 524.219C426.271 523.898 425.893 523.392 425.732 522.803L425.434 521.71C425.17 520.742 424.063 520.284 423.192 520.782C422.714 521.055 422.125 521.051 421.65 520.771L407.423 512.363C406.991 512.108 406.704 511.664 406.648 511.166L406.611 510.828C406.502 509.846 405.422 509.297 404.565 509.788C404.143 510.028 403.627 510.029 403.205 509.789L388.986 501.71C388.489 501.428 388.139 500.944 388.027 500.383L387.882 499.657C387.689 498.695 386.611 498.204 385.76 498.691C385.291 498.959 384.712 498.941 384.26 498.645L376.016 493.244C375.17 492.69 374.66 491.746 374.66 490.735Z" fill="#0698BD"/>
                        <g id="41" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('41', 4, 100)} onMouseEnter={() => setTenant('41')}>
                        <path id="41s" d="M698.952 335.487L562.842 264.029C560.715 262.912 560.698 259.873 562.812 258.732L588.15 245.067C589.036 244.589 590.104 244.588 590.992 245.064L617.351 259.208C618.251 259.691 619.334 259.683 620.227 259.187L665.577 233.993C666.414 233.528 667.423 233.49 668.292 233.892L779.608 285.346C781.819 286.368 781.955 289.459 779.842 290.671L701.84 335.432C700.95 335.943 699.86 335.963 698.952 335.487Z" fill="#91D2BB"/>
                        <text id="41text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="679.026" y="283.217">41</tspan></text>
                        </g>
                        <g id="25" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('25', 4, 100)} onMouseEnter={() => setTenant('25')}>
                        <path id="25s" d="M448.234 527.245L477.193 510.698C478.141 510.156 479.308 510.172 480.241 510.74L490.861 517.204C492.794 518.381 492.778 521.191 490.833 522.346L462.454 539.196C461.503 539.761 460.318 539.756 459.371 539.184L448.171 532.418C446.212 531.234 446.247 528.381 448.234 527.245Z" fill="#0AADD7"/>
                        <text id="25text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="463.76" y="525.569">25</tspan></text>
                        </g>
                        <g id="26"  className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('26', 4, 100)} onMouseEnter={() => setTenant('26')}>
                        <path id="26s" d="M429.864 515.875L457.957 499.314C458.899 498.759 460.068 498.76 461.009 499.317L472.508 506.123C474.488 507.295 474.466 510.168 472.469 511.309L443.584 527.815C442.622 528.365 441.434 528.339 440.496 527.748L429.787 520.997C427.888 519.799 427.929 517.015 429.864 515.875Z" fill="#0AADD7"/>
                        <text id="26text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="445.94" y="515.59">26</tspan></text>
                        </g>
                        <g id="27" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('27', 4, 100)} onMouseEnter={() => setTenant('27')}>
                        <path id="27s" d="M410.106 504.069L438.396 487.861C439.317 487.334 440.448 487.332 441.37 487.856L453.507 494.757C455.522 495.903 455.531 498.804 453.524 499.963L425.017 516.421C424.073 516.966 422.908 516.956 421.973 516.395L410.054 509.244C408.089 508.065 408.118 505.208 410.106 504.069Z" fill="#0AADD7"/>
                        <text id="27text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="425.982" y="503.473">27</tspan></text>
                        </g>
                        <g id="28" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('28', 4, 100)} onMouseEnter={() => setTenant('28')}>
                        <path id="28s" d="M391.407 493.658L420.573 477.16C421.496 476.638 422.625 476.642 423.545 477.17L434.272 483.332C436.282 484.487 436.279 487.388 434.266 488.538L405.362 505.055C404.446 505.579 403.322 505.582 402.403 505.065L391.413 498.884C389.377 497.738 389.374 494.808 391.407 493.658Z" fill="#0AADD7"/>
                        <text id="28text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="407.449" y="492.781">28</tspan></text>
                        </g>
                        <g id="29" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('29', 4, 100)} onMouseEnter={() => setTenant('29')}>
                        <path id="29s" d="M376.212 477.957L400.904 464.345C401.863 463.816 403.035 463.852 403.96 464.439L416.747 472.555C418.665 473.772 418.587 476.595 416.606 477.705L386.913 494.333C385.951 494.872 384.772 494.84 383.842 494.25L376.055 489.319C375.187 488.769 374.66 487.812 374.66 486.784V480.584C374.66 479.491 375.255 478.485 376.212 477.957Z" fill="#0AADD7"/>
                        <text id="29text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="390.342" y="481.376">29</tspan></text>
                        </g>
                        <g id="33" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('33', 4, 100)} onMouseEnter={() => setTenant('33')}>
                        <path id="33s" d="M407.751 459.564L452.628 435.086C453.563 434.576 454.699 434.6 455.611 435.15L486.407 453.687C488.383 454.876 488.334 457.757 486.318 458.879L441.761 483.668C440.819 484.192 439.669 484.17 438.748 483.612L407.633 464.764C405.654 463.565 405.72 460.672 407.751 459.564Z" fill="#1D6684"/>
                        <text id="33text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="443.089" y="460.704">33</tspan></text>
                        </g>
                        <g id="34" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('34', 4, 100)} onMouseEnter={() => setTenant('34')}>
                        <path id="34s" d="M460.336 430.989L468.744 426.477C469.637 425.998 470.712 426.002 471.601 426.488L503.741 444.045C505.845 445.195 505.817 448.226 503.692 449.337L494.439 454.174C493.533 454.647 492.449 454.627 491.561 454.12L460.266 436.237C458.219 435.068 458.259 432.103 460.336 430.989Z" fill="#1D6684"/>
                        <text id="34text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="475.878" y="442.172">34</tspan></text>
                        </g>
                        <g id="35" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('35', 4, 100)} onMouseEnter={() => setTenant('35')}>
                        <path id="35s" d="M476.441 422.059L486.17 416.87C487.084 416.382 488.184 416.401 489.081 416.918L520.179 434.859C522.185 436.016 522.179 438.913 520.169 440.062L511.211 445.181C510.296 445.704 509.174 445.708 508.255 445.193L476.385 427.322C474.317 426.162 474.348 423.175 476.441 422.059Z" fill="#1D6684"/>
                        <text id="35text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="492.273" y="433.618">35</tspan></text>
                        </g>
                        <g id="36" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('36', 4, 100)} onMouseEnter={() => setTenant('36')}>
                        <path id="36s" d="M493.342 412.767L521.386 396.992C522.335 396.459 523.498 396.481 524.426 397.05L554.604 415.575C556.547 416.768 556.502 419.606 554.523 420.737L527.968 435.911C527.05 436.436 525.923 436.438 525.002 435.917L493.335 417.992C491.303 416.842 491.307 413.912 493.342 412.767Z" fill="#1D6684"/>
                        <text id="36text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="520.072" y="418.649">36</tspan></text>
                        </g>
                        <g id="37" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('37', 4, 100)} onMouseEnter={() => setTenant('37')}>
                        <path id="37s" d="M529.218 392.852L552.119 379.846C553.023 379.333 554.129 379.324 555.041 379.823L586.618 397.101C588.682 398.231 588.702 401.188 586.653 402.345L562.564 415.949C561.632 416.475 560.49 416.465 559.567 415.922L529.179 398.046C527.189 396.876 527.211 393.992 529.218 392.852Z" fill="#1D6684"/>
                        <text id="37text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="552.148" y="400.116">37</tspan></text>
                        </g>
                        <g id="39" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('39', 4, 100)} onMouseEnter={() => setTenant('39')}>
                        <path id="39s" d="M622.836 341.403L662.63 318.884C663.52 318.38 664.605 318.365 665.509 318.842L697.039 335.5C699.125 336.602 699.181 339.569 697.139 340.75L657.659 363.574C656.762 364.093 655.661 364.112 654.747 363.625L622.903 346.661C620.814 345.549 620.776 342.568 622.836 341.403Z" fill="#1D6684"/>
                        <text id="39text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="654.791" y="343.805">39</tspan></text>
                        </g>
                        <g id="38" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('38', 4, 100)} onMouseEnter={() => setTenant('38')}>
                        <path id="38s" d="M499.219 346.472L584.232 300.313C585.117 299.832 586.184 299.828 587.073 300.301L624.906 320.438C627.019 321.562 627.029 324.587 624.923 325.725L538.979 372.181C538.08 372.667 536.994 372.662 536.099 372.166L499.197 351.733C497.125 350.586 497.137 347.602 499.219 346.472Z" fill="#1D6684"/>
                        <text id="38text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="557" y="336.909">38</tspan></text>
                        </g>
                        <path id="Vector 105" d="M464.83 544.864V543.427C464.83 542.097 465.706 540.925 466.983 540.549L506.176 529.022C506.863 528.82 507.456 528.378 507.846 527.777L537.128 482.648C537.396 482.236 537.76 481.896 538.19 481.657L645.525 422.145L826.418 333.472C826.984 333.194 827.624 333.102 828.246 333.209L860.081 338.676C861.521 338.923 862.573 340.171 862.573 341.632V343.46C862.573 344.516 862.018 345.494 861.112 346.035L837.289 360.271C835.431 361.381 835.325 364.034 837.087 365.29L859.077 380.954C859.269 381.09 859.475 381.203 859.693 381.291L924.493 407.487C925.627 407.945 926.369 409.046 926.369 410.268V411.914C926.369 412.956 925.828 413.924 924.94 414.47L772.409 508.227C771.52 508.774 770.411 508.819 769.48 508.346L749.3 498.101C748.375 497.631 747.272 497.673 746.385 498.212L601.449 586.221C600.499 586.798 599.309 586.802 598.355 586.233L536.923 549.577C535.982 549.016 534.81 549.012 533.865 549.567L502.392 568.062C501.43 568.627 500.232 568.612 499.285 568.021L466.242 547.41C465.364 546.862 464.83 545.9 464.83 544.864Z" fill="#D9B50C"/>
                        <g id="24" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('24', 4, 100)} onMouseEnter={() => setTenant('24')}>
                        <path id="24s" d="M658.015 366.792L777.436 298.551C778.301 298.057 779.354 298.024 780.248 298.464L860.087 337.724C862.227 338.776 862.343 341.784 860.29 342.998L836.605 357.006C834.572 358.208 834.661 361.179 836.763 362.257L923.733 406.866C925.821 407.937 925.926 410.882 923.921 412.099L772.048 504.32C771.161 504.859 770.059 504.9 769.133 504.431L748.934 494.176C748.014 493.709 746.918 493.747 746.033 494.278L600.365 581.609C599.423 582.174 598.247 582.178 597.3 581.621L536.213 545.647C535.27 545.092 534.1 545.094 533.159 545.652L502.038 564.13C501.075 564.702 499.872 564.69 498.921 564.097L466.913 544.168C464.996 542.974 465.035 540.17 466.985 539.031L494.285 523.083C496.26 521.93 496.269 519.078 494.301 517.912L445.438 488.956C443.448 487.777 443.486 484.883 445.506 483.756L590.192 403.04C592.249 401.892 592.242 398.93 590.179 397.793L561.536 381.999C559.469 380.859 559.467 377.89 561.532 376.747L615.227 347.023C616.118 346.53 617.199 346.522 618.097 347.003L655.11 366.832C656.02 367.319 657.118 367.304 658.015 366.792Z" fill="#F1CA11"/>
                        <text id="24text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="673.324" y="438.608">24</tspan></text>
                        </g>
                        <path id="Vector 98" d="M503.321 568.005V563.977C503.321 562.705 504.123 561.571 505.322 561.148L538.515 549.433C539.258 549.17 540.073 549.211 540.787 549.545L572.162 564.252C573.215 564.746 573.888 565.805 573.888 566.969V570.485C573.888 571.542 573.332 572.521 572.424 573.062L541.935 591.226C540.982 591.793 539.794 591.789 538.845 591.214L504.767 570.571C503.869 570.027 503.321 569.054 503.321 568.005Z" fill="#15526B"/>
                        <path id="Vector 99" d="M544.307 592.935V588.597C544.307 587.311 545.127 586.168 546.345 585.755L565.903 579.131C566.234 579.019 566.583 578.965 566.932 578.973L595.422 579.606C597.101 579.643 598.423 581.052 598.353 582.73L598.188 586.672C598.148 587.647 597.635 588.542 596.815 589.07L568.677 607.182C567.721 607.797 566.499 607.819 565.521 607.239L545.775 595.515C544.865 594.974 544.307 593.994 544.307 592.935Z" fill="#1F234D"/>
                        <path id="Vector 97" d="M546.949 584.861L574.843 568.124C575.791 567.555 576.975 567.554 577.925 568.12L596.05 578.942C597.976 580.091 598.005 582.87 596.105 584.06L569.341 600.824C568.409 601.408 567.233 601.435 566.276 600.896L547.02 590.047C545.015 588.918 544.975 586.045 546.949 584.861Z" fill="#343B79"/>
                        <g id="23" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('23', 4, 100)} onMouseEnter={() => setTenant('23')}>
                        <path id="23s" d="M505.809 560.388L534.239 543.507C535.174 542.952 536.336 542.947 537.277 543.492L571.259 563.214C573.237 564.362 573.254 567.214 571.289 568.386L541.946 585.872C540.988 586.444 539.791 586.436 538.84 585.851L505.769 565.523C503.847 564.342 503.868 561.54 505.809 560.388Z" fill="#1D6684"/>
                        <text id="23text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="533.615" y="567.625">23</tspan></text>
                        </g>
                        <g id="21"  className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('21', 4, 100)} onMouseEnter={() => setTenant('21')}>
                        <path id="21s" d="M464.735 603.502L483.567 592.039C484.534 591.45 485.751 591.456 486.712 592.055L518.816 612.044C520.706 613.221 520.701 615.974 518.807 617.143L500.263 628.597C499.297 629.194 498.078 629.194 497.112 628.598L464.72 608.618C462.813 607.442 462.821 604.667 464.735 603.502Z" fill="#F1CA11"/>
                        <text id="21text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="487.283" y="611.818">21</tspan></text>
                        </g>
                        <g id="22" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('22', 4, 100)} onMouseEnter={() => setTenant('22')}>
                        <path id="22s" d="M558.29 602.813L513.07 575.618C512.116 575.044 510.922 575.046 509.97 575.622L490.402 587.473C488.486 588.634 488.472 591.409 490.376 592.589L535.236 620.389C536.207 620.992 537.437 620.989 538.406 620.383L558.334 607.928C560.233 606.741 560.21 603.967 558.29 602.813Z" fill="#F1CA11"/>
                        <text id="22text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="518.646" y="598.275">22</tspan></text>
                        </g>
                        <path id="Vector 108" d="M718.943 532.713V532.049C718.943 530.706 719.836 529.526 721.129 529.161L732.03 526.087C732.562 525.937 733.124 525.937 733.656 526.086L742.432 528.555C743.506 528.857 744.248 529.836 744.248 530.951V531.486C744.248 532.804 745.469 533.783 746.756 533.497C747.209 533.397 747.683 533.452 748.101 533.654L756.811 537.869C757.846 538.37 758.504 539.419 758.504 540.569V541.648C758.504 542.688 757.965 543.654 757.08 544.2L747.948 549.841C746.989 550.433 745.78 550.438 744.816 549.854L735.244 544.053C734.843 543.81 734.535 543.439 734.371 543L734.118 542.325C733.817 541.524 732.89 541.159 732.125 541.542C731.684 541.762 731.162 541.742 730.739 541.489L720.4 535.285C719.496 534.743 718.943 533.766 718.943 532.713Z" fill="#7B34D7"/>
                        <path id="Vector 106" d="M721.188 528.23L729.897 522.569C730.832 521.961 732.027 521.922 732.999 522.468L741.731 527.367C743.692 528.466 743.791 531.252 741.914 532.489L732.993 538.363C732.03 538.997 730.788 539.023 729.8 538.43L721.279 533.318C719.378 532.177 719.328 529.439 721.188 528.23Z" fill="#923EFD"/>
                        <path id="Vector 107" d="M737.151 537.514L745.214 532.209C746.153 531.592 747.358 531.551 748.337 532.103L756.189 536.532C758.184 537.658 758.232 540.514 756.277 541.706L747.593 547.001C746.633 547.586 745.427 547.586 744.467 546.999L737.235 542.58C735.358 541.433 735.313 538.723 737.151 537.514Z" fill="#923EFD"/>
                        <path id="Vector 112" d="M916.55 370.474L916.505 369.812C916.415 368.472 917.226 367.235 918.492 366.784L929.161 362.983C929.681 362.797 930.243 362.759 930.784 362.873L939.706 364.745C940.797 364.974 941.603 365.901 941.679 367.014L941.714 367.547C941.803 368.863 943.087 369.758 944.352 369.386C944.797 369.255 945.274 369.278 945.704 369.451L954.678 373.07C955.745 373.5 956.472 374.503 956.55 375.651L956.622 376.727C956.692 377.765 956.22 378.765 955.374 379.369L946.641 385.612C945.725 386.267 944.519 386.354 943.518 385.836L933.577 380.692C933.161 380.476 932.829 380.127 932.635 379.7L932.337 379.043C931.983 378.265 931.033 377.963 930.296 378.397C929.871 378.646 929.348 378.661 928.91 378.437L918.176 372.943C917.238 372.463 916.621 371.526 916.55 370.474Z" fill="#7B34D7"/>
                        <path id="Vector 113" d="M918.487 365.851L926.796 359.617C927.688 358.947 928.877 358.828 929.884 359.307L938.926 363.607C940.957 364.572 941.243 367.345 939.453 368.705L930.948 375.166C930.03 375.864 928.793 375.974 927.766 375.448L918.921 370.921C916.947 369.911 916.714 367.182 918.487 365.851Z" fill="#923EFD"/>
                        <path id="Vector 114" d="M935.039 374.039L942.727 368.204C943.622 367.525 944.822 367.403 945.835 367.888L953.968 371.779C956.034 372.767 956.275 375.614 954.404 376.935L946.097 382.802C945.178 383.451 943.974 383.531 942.977 383.011L935.465 379.088C933.515 378.07 933.287 375.369 935.039 374.039Z" fill="#923EFD"/>
                        <path id="Vector 117" d="M844.04 475.626V472.71C844.04 471.452 844.825 470.327 846.007 469.894L880.921 457.081C882.102 456.648 882.888 455.523 882.888 454.265V449.424C882.888 448.226 883.601 447.142 884.701 446.668L907.893 436.683C908.324 436.498 908.793 436.416 909.261 436.444L941.014 438.369C942.597 438.464 943.832 439.777 943.832 441.363V444.394C943.832 445.41 943.318 446.358 942.465 446.911L911.089 467.272C910.656 467.553 910.082 467.466 909.752 467.07C909.234 466.448 908.234 466.649 907.996 467.422L907.361 469.484C907.208 469.984 906.88 470.412 906.437 470.691L872.99 491.763C872.061 492.348 870.886 492.379 869.928 491.844L845.577 478.246C844.628 477.715 844.04 476.713 844.04 475.626Z" fill="#1F234D"/>
                        <path id="Vector 115" d="M904.628 461.925L881.066 449.825C880.142 449.35 879.038 449.388 878.147 449.924L846.577 468.946C844.592 470.143 844.656 473.044 846.692 474.151L870.001 486.83C870.946 487.344 872.093 487.313 873.008 486.749L904.831 467.148C906.82 465.922 906.707 462.992 904.628 461.925Z" fill="#343B79"/>
                        <path id="Vector 116" d="M908.872 462.134L885.81 450.421C883.71 449.355 883.601 446.396 885.617 445.179L916.343 426.614C917.23 426.078 918.332 426.038 919.255 426.508L941.121 437.64C943.18 438.689 943.331 441.574 941.392 442.831L911.863 461.977C910.965 462.559 909.826 462.619 908.872 462.134Z" fill="#343B79"/>
                        <path id="Vector 111" d="M770.978 519.843V516.965C770.978 515.677 771.801 514.532 773.022 514.122L809.272 501.931C810.462 501.531 811.276 500.433 811.314 499.179L811.545 491.582C811.583 490.332 812.391 489.237 813.575 488.834L840.944 479.496C841.565 479.284 842.239 479.281 842.861 479.489L863.373 486.326C864.598 486.734 865.424 487.881 865.424 489.172V492.841C865.424 493.87 864.896 494.828 864.026 495.377L839.152 511.087C838.708 511.367 838.12 511.221 837.86 510.765C837.477 510.095 836.489 510.163 836.203 510.88L835.677 512.193C835.553 512.504 835.335 512.768 835.054 512.948L799.24 535.923C798.299 536.527 797.099 536.557 796.128 536L772.486 522.445C771.553 521.91 770.978 520.918 770.978 519.843Z" fill="#46C973"/>
                        <g id="40" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('40', 4, 100)} onMouseEnter={() => setTenant('40')}>
                        <path id="40s-2" d="M814.295 487.848L837.59 473.644C838.495 473.092 839.625 473.059 840.561 473.557L862.636 485.293C864.671 486.375 864.777 489.252 862.826 490.48L839.817 504.968C838.903 505.543 837.75 505.583 836.798 505.072L814.437 493.052C812.395 491.955 812.316 489.055 814.295 487.848Z" fill="#4EE882"/>
                        <path id="40s-1" d="M773.242 512.841L806.585 492.532C807.489 491.981 808.617 491.947 809.552 492.444L832.328 504.535C834.367 505.617 834.471 508.5 832.516 509.726L799.21 530.618C798.283 531.199 797.114 531.23 796.159 530.699L773.345 518.025C771.335 516.908 771.277 514.037 773.242 512.841Z" fill="#4EE882"/>
                        <text id="40text-2" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="832.992" y="491.355">40</tspan></text>
                        <text id="40text-1" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="799" y="511.909">40</tspan></text>
                        </g>
                        <path id="Vector 119" d="M844.04 360.085V358.797C844.04 357.473 844.908 356.306 846.176 355.925L883.659 344.646C884.09 344.517 884.544 344.486 884.988 344.555L899.955 346.903C901.414 347.132 902.49 348.389 902.49 349.867V350.592C902.49 351.646 901.937 352.622 901.033 353.164L868.283 372.815C867.392 373.349 866.288 373.385 865.364 372.909L845.665 362.751C844.667 362.237 844.04 361.208 844.04 360.085Z" fill="#1F234D"/>
                        <path id="Vector 118" d="M844.866 356.347L878.145 336.178C878.436 336.002 878.795 335.985 879.101 336.134L901.88 347.198C902.598 347.547 902.639 348.555 901.951 348.96L867.678 369.12C867.384 369.293 867.022 369.304 866.718 369.15L844.932 358.094C844.232 357.739 844.195 356.754 844.866 356.347Z" fill="#343B79"/>
                        <path id="Vector 123" d="M461.622 561.141L321.913 478.1L318.897 479.565C312.976 482.441 306.019 482.219 300.293 478.971L295.519 476.264C289.349 472.765 281.788 472.795 275.647 476.343L250.816 490.69C244.538 494.317 244.086 503.21 249.964 507.455L253.125 509.738C254.838 510.976 254.769 513.55 252.99 514.694L246.712 518.729L384.64 604.622L388.734 602.234C394.073 599.119 400.725 599.345 405.842 602.813C413.567 608.051 423.622 608.356 431.65 603.596L458.997 587.383C463.388 584.78 463.606 578.504 459.406 575.603L458.063 574.675C453.793 571.725 454.106 565.317 458.642 562.797L461.622 561.141Z" fill="white" stroke="black" stroke-width="0.1"/>
                        <path id="Vector 124" d="M242.219 505.634L297.913 472.39C298.207 472.214 298.571 472.201 298.877 472.356L303.307 474.597C304.012 474.953 304.045 475.947 303.366 476.35L246.907 509.828C246.574 510.025 246.158 510.013 245.837 509.796L242.172 507.321C241.565 506.912 241.59 506.01 242.219 505.634Z" fill="#ECBB82"/>
                        <path id="Vector 125" d="M404.482 604.921L461.472 571.418C461.784 571.234 462.172 571.235 462.485 571.419L466.57 573.821C467.228 574.208 467.227 575.16 466.569 575.546L409.086 609.279C408.741 609.481 408.31 609.459 407.988 609.223L404.398 606.59C403.818 606.165 403.863 605.286 404.482 604.921Z" fill="#ECBB82"/>
                        </g>
                    </svg>

                </Box>
            </TransformComponent>

          </React.Fragment> 
        )}
      </TransformWrapper>
    </Box>
  )
}

const itemPopover = [
    {
        id : '01',
        name: 'Inul Vizta Karaoke',
        top: '206.182px',
        left: '557.989px',
        image: '/images/default-image.png',
    },
    {
        id: '02',
        name: 'Rifan Index Trading',
        top: '235.407px',
        left: '500px',
        image: '/images/image-2.png',
    },
    {
        id: '03',
        name: 'A&W Restaurant',
        top: '263.919px',
        left: '446.079px',
        image: '/images/default-image.png',

    },
    {
        id: '04',
        name: 'Hoka-Hoka Bento',
        top: '301.698px',
        left: '374.799px',
        image: '/images/image-2.png',
    },
    {
        id: '05',
        name: 'Mie Pasar Baru',
        top: '315.954px',
        left: '350.563px',
        image: '/images/default-image.png',

    },
    {
        id: '06',
        name: 'R12',
        top: '326.646px',
        left: '328.467px',
        image: '/images/image-2.png',
    },
    {
        id: '07',
        name: 'Mangos',
        top: '338.051px',
        left: '306.37px',
        image: '/images/default-image.png',

    },
    {
        id: '08',
        name: 'Bucherri',
        top: '358.722px',
        left: '265.027px',
        image: '/images/image-2.png',

    },
    {
        id: '09',
        name: 'Happy Puppy',
        top: '387.947px',
        left: '206.578px',
        image: '/images/default-image.png',

    },
    {
        id: '10',
        name: 'Natasha',
        top: '415.044px',
        left: '162.384px',
        image: '/images/image-2.png',

    },
    {
        id: '11',
        name: 'Vinolia',
        top: '444.971px',
        left: '119.616px',
        image: '/images/default-image.png',

    },
    {
        id: '12',
        name: 'Watson',
        top: '482.037px',
        left: '168.086px',
        image: '/images/image-2.png',

    },
    {
        id: '13',
        name: 'DeLunos',
        top: '496.293px',
        left: '189.47px',
        image: '/images/default-image.png',

    },
    {
        id: '14',
        name: 'PACC',
        top: '508.41px',
        left: '210.142px',
        image: '/images/image-2.png',

    },
    {
        id: '15',
        name: 'Samsung',
        top: '520.528px',
        left: '227.249px',
        image: '/images/default-image.png',

    },
    {
        id: '16',
        name: 'Christopher Salon',
        top: '539.773px',
        left: '257.899px',
        image: '/images/image-2.png',

    },
    {
        id: '17',
        name: 'Hardware',
        top: '568.286px',
        left: '304.944px',
        image: '/images/default-image.png',

    },
    {
        id: '18',
        name: 'Sistersel',
        top: '592.521px',
        left: '341.297px',
        image: '/images/image-2.png',

    },
    {
        id: '19',
        name: 'Hush Puppies',
        top: '610.341px',
        left: '369.09px',
        image: '/images/default-image.png',

    },
    {
        id: '20',
        name: 'Kidz Stasion',
        top: '626.735px',
        left: '429.684px',
        image: '/images/image-2.png',

    },
    {
        id: '21',
        name: 'Noaeveryday',
        top: '586.818px',
        left: '485.283px',
        image: '/images/default-image.png',

    },
    {
        id: '22',
        name: 'Es Teller77',
        top: '567.275px',
        left: '516.646px',
        image: '/images/image-2.png',

    },
    {
        id: '23',
        name: 'Andrew Smith',
        top: '542.625px',
        left: '531.615px',
        image: '/images/default-image.png',

    },
    {
        id: '24',
        name: 'Matahari',
        top: '413.608px',
        left: '671.324px',
        image: '/images/image-2.png',

    },
    {
        id: '25',
        name: 'Aily Diaomnd',
        top: '500.569px',
        left: '461.76px',
        image: '/images/default-image.png',

    },
    {
        id: '26',
        name: 'Gaudi',
        top: '490.59px',
        left: '443.94px',
        image: '/images/image-2.png',

    },
    {
        id: '27',
        name: 'Erafone',
        top: '478.473px',
        left: '423.982px',
        image: '/images/default-image.png',

        
    },
    {
        id: '28',
        name: 'Alexis',
        top: '467.781px',
        left: '405.449px',
        image: '/images/image-2.png',

    },
    {
        id: '29',
        name: 'Sharks',
        top: '456.376px',
        left: '388.342px',
        image: '/images/default-image.png',

    },
    {
        id: '30',
        name: 'Koma',
        top: '437.843px',
        left: '356.266px',
        image: '/images/image-2.png',

    },
    {
        id: '31',
        name: 'Ice Bar',
        top: '429.289px',
        left: '342.723px',
        image: '/images/default-image.png',

    },
    {
        id: '32',
        name: 'Creeps',
        top: '420.023px',
        left: '328.467px',
        image: '/images/image-2.png',

    },
    {
        id: '33',
        name: 'Skechers',
        top: '435.704px',
        left: '441.089px',
        image: '/images/default-image.png',

    },
    {
        id: '34',
        name: 'Nobby Fashion',
        top: '417.172px',
        left: '473.878px',
        image: '/images/image-2.png'
    },
    {
        id: '35',
        name: 'Brahouse',
        top: '408.618px',
        left: '490.273px',
        image: '/images/default-image.png',

    },
    {
        id: '36',
        name: 'Cardinal',
        top: '393.649px',
        left: '518.072px',
        image: '/images/image-2.png',

    },
    {
        id: '37',
        name: 'Guardian',
        top: '375.116px',
        left: '550.148px',
        image: '/images/default-image.png',

    },
    {
        id: '38',
        name: `D'Cost Seating Area`,
        top: '311.909px',
        left: '555px',
        image: '/images/image-2.png',

    },
    {
        id: '39',
        name: `D'Cost`,
        top: '318.805px',
        left: '652.791px',
        image: '/images/default-image.png',

    },
    {
        id: '40',
        name: 'Toilets',
        top: '466.355px',
        left: '830.992px',
        image: '/images/image-2.png',

    },
    {
        id: '41',
        name: 'Fun World',
        top: '258.217px',
        left: '677.026px',
        image: '/images/image-2.png',

    },
    {
        id: '42',
        name: 'L1-45',
        top: '261.781px',
        left: '547.297px',
        image: '/images/image-2.png',

    },
    {
        id: '43',
        name: 'Planet Surf',
        top: '293.144px',
        left: '487.421px',
        image: '/images/image-2.png',

    },
    {
        id: '44',
        name: '3 Second',
        top: '363.711px',
        left: '351.989px',
        image: '/images/image-2.png',

    },
    {
        id: '45',
        name: 'Sport Station',
        top: '381.532px',
        left: '320.626px',
        image: '/images/image-2.png',

    },
    {
        id: '46',
        name: 'Gabino',
        top: '395.788px',
        left: '295.678px',
        image: '/images/image-2.png',

    },
    {
        id: '47',
        name: 'L1-15&17',
        top: '415.044px',
        left: '268.591px',
        image: '/images/image-2.png',

    },
    {
        id: '48',
        name: '_square',
        top: '427.864px',
        left: '237.941px',
        image: '/images/image-2.png',

    },
]