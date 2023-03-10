import React, { useState } from 'react'
import { Box,  Button,  ButtonGroup,  Card, CardActionArea, CardActions, CardContent, CardMedia, Fab, Modal, Popover, Typography } from '@mui/material'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

export const GFMap = () => {
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

    // Popover on Click Media
    // const [anchorClickk, setAnchorClickk] = React.useState<any | null>(null);
    // const handleClickk = (event: React.MouseEvent<any>) => {
    //     setAnchorClickk(event.currentTarget)
    // };
    // const handleCloses = () => {
    //     setAnchorClickk(null);
    // };
    // const openEll = Boolean(anchorClickk);
    // const idd = openEll ? 'simple-popover' : undefined;

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
      <Box id='wrapper' className='container relative border-2 border-slate-300 mx-auto lg:max-w-[1080px] sm:max-w-[650px]:'>
        <TransformWrapper
        initialScale={1} limitToBounds={false} centerOnInit={true}
        >
          {({ zoomIn, zoomOut, centerView, zoomToElement, ...rest }) => (
        <React.Fragment>
            <Box sx={{ right: '30px', bottom: '30px',}} className='absolute'>
                <ButtonGroup className='gap-2' orientation='vertical'>
                    <Fab size="small" color="primary" aria-label="reset" onClick={() => zoomToElement('map-canvas')}>
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
                                    {/* <Popover id="mouse-over-popover" sx={{ pointerEvents: 'none', }} open={open} anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'center', }} transformOrigin={{ vertical: 'bottom', horizontal: 'center', }} onClose={handlePopoverClose} transitionDuration={0}>
                                        <Card className='w-32 p-2'>
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
                <Box id='map-canvas' className='w-[1080px]'>
                    <svg width="1080" height="900" viewBox="0 0 1080 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="GF">
                            <g id="ground" filter="url(#filter0_d_1_2)">
                            <path d="M256.562 557.447C229.359 539.467 213.125 562.271 193.82 549.115L59.4564 457.143C40.4937 444.163 42.5672 415.557 63.2034 405.447L133.049 371.229C134.002 370.762 135.131 370.834 136.018 371.417L149.385 380.215C150.275 380.8 151.408 380.87 152.363 380.399L529.049 194.375C548.664 184.688 571.681 184.729 591.262 194.486L858.878 327.832C859.764 328.273 860.811 328.249 861.675 327.767L877.789 318.794C886.102 314.165 896.118 313.754 904.783 317.687L1012.5 366.574C1034.21 376.426 1036.31 406.439 1016.18 419.218L839.928 531.133C839.473 531.421 838.949 531.582 838.411 531.599L738.708 534.618C738.166 534.635 737.639 534.798 737.182 535.09L463.427 710.174C453.185 716.724 440.002 716.446 430.046 709.468L388 680C367.5 664 386.188 642.99 368 631C347.378 617.406 283.765 575.426 256.562 557.447Z" fill="#F6F6F6"/>
                            <path d="M256.562 557.447C229.359 539.467 213.125 562.271 193.82 549.115L59.4564 457.143C40.4937 444.163 42.5672 415.557 63.2034 405.447L133.049 371.229C134.002 370.762 135.131 370.834 136.018 371.417L149.385 380.215C150.275 380.8 151.408 380.87 152.363 380.399L529.049 194.375C548.664 184.688 571.681 184.729 591.262 194.486L858.878 327.832C859.764 328.273 860.811 328.249 861.675 327.767L877.789 318.794C886.102 314.165 896.118 313.754 904.783 317.687L1012.5 366.574C1034.21 376.426 1036.31 406.439 1016.18 419.218L839.928 531.133C839.473 531.421 838.949 531.582 838.411 531.599L738.708 534.618C738.166 534.635 737.639 534.798 737.182 535.09L463.427 710.174C453.185 716.724 440.002 716.446 430.046 709.468L388 680C367.5 664 386.188 642.99 368 631C347.378 617.406 283.765 575.426 256.562 557.447Z" stroke="#787878" stroke-width="0.1"/>
                            </g>
                            <path id="toscaShadow" d="M408 315.779V311.529C408 309.679 409.657 308.27 411.483 308.568L437.514 312.811C437.716 312.844 437.914 312.897 438.105 312.971L475.074 327.145C476.234 327.59 477 328.704 477 329.946V333.986C477 335.121 476.36 336.159 475.346 336.667L458.203 345.27C457.296 345.725 456.22 345.691 455.343 345.179L409.486 318.369C408.566 317.831 408 316.845 408 315.779Z" fill="#73AE99"/>
                            <g id="34" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('34', 4, 100)} onMouseEnter={() => setTenant('34')}>
                            <path id="34s" d="M410.031 308.403L425.523 300.699C426.404 300.261 427.444 300.283 428.306 300.758L475.12 326.536C477.213 327.689 477.185 330.706 475.071 331.819L459.089 340.233C458.181 340.711 457.092 340.692 456.202 340.183L409.877 313.693C407.795 312.503 407.883 309.471 410.031 308.403Z" fill="#91D2BB"/>
                            <text id="34text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="437" y="321.545">34</tspan></text>
                            </g>
                            <path id="aquaShadowTwo" d="M402.527 374.463L384.411 384.176C383.461 384.686 382.311 384.646 381.399 384.073L334.405 354.571C333.531 354.023 333 353.063 333 352.031V349.146C333 347.692 334.042 346.448 335.474 346.193L356.526 342.441C357.958 342.186 359 340.941 359 339.487V335.501C359 334.052 360.035 332.811 361.46 332.55L380.852 329.003C382.277 328.742 383.312 327.5 383.312 326.052V323.101C383.312 321.84 384.102 320.713 385.287 320.282L401.303 314.458C402.105 314.167 402.992 314.23 403.744 314.632L450.416 339.612C451.391 340.134 452 341.15 452 342.257V347.01C452 348.133 451.373 349.162 450.375 349.677L434.203 358.017C433.56 358.348 432.803 358.374 432.139 358.087C430.997 357.594 429.667 358.049 429.066 359.138L428.371 360.399C428.088 360.913 427.661 361.332 427.142 361.605L409.754 370.767C409.076 371.125 408.277 371.174 407.56 370.903C406.229 370.4 404.738 371.025 404.164 372.327L403.854 373.03C403.584 373.642 403.117 374.147 402.527 374.463Z" fill="#0A89AA"/>
                            <g id="35" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('35', 4, 100)} onMouseEnter={() => setTenant('35')}>
                            <path id="35s" d="M385.156 320.405L401.074 312.691C401.966 312.259 403.014 312.295 403.875 312.788L450.165 339.324C452.238 340.513 452.158 343.529 450.024 344.605L434.812 352.279C433.919 352.73 432.859 352.705 431.988 352.214L384.991 325.718C382.883 324.529 382.978 321.461 385.156 320.405Z" fill="#0AADD7"/>
                            <text id="35text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="413" y="333.545">35</tspan></text>
                            </g>
                            <g id="36" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('36', 4, 100)} onMouseEnter={() => setTenant('36')}>
                            <path id="36s" d="M361.051 332.352L376.14 324.729C377.041 324.274 378.111 324.303 378.986 324.805L425.371 351.438C427.401 352.603 427.374 355.54 425.324 356.668L411.632 364.201C410.727 364.698 409.631 364.696 408.729 364.195L360.947 337.652C358.843 336.484 358.903 333.438 361.051 332.352Z" fill="#0AADD7"/>
                            <text id="36text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="390" y="345.545">36</tspan></text>
                            </g>
                            <g id="37" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('37', 4, 100)} onMouseEnter={() => setTenant('37')}>
                            <path id="37s" d="M334.953 346.17L351.533 337.734C352.434 337.276 353.505 337.302 354.383 337.804L401.175 364.551C403.247 365.736 403.174 368.747 401.047 369.83L384.467 378.266C383.566 378.724 382.495 378.698 381.617 378.196L334.825 351.449C332.753 350.264 332.826 347.253 334.953 346.17Z" fill="#0AADD7"/>
                            <text id="37text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="364" y="359.545">37</tspan></text>
                            </g>
                            <path id="redShadowTwo" d="M362 289.532V283.351C362 282.073 362.809 280.936 364.016 280.517L398.824 268.428C399.441 268.214 400.126 268.37 400.59 268.831C401.645 269.882 403.445 269.174 403.502 267.686L403.713 262.237C403.761 261.004 404.558 259.926 405.722 259.52L436.848 248.653C437.382 248.467 437.958 248.435 438.509 248.562L439.712 248.839C441.591 249.27 443.384 247.843 443.384 245.915V242.667C443.384 241.366 444.223 240.213 445.461 239.813L459.772 235.182C460.545 234.932 461.385 235.006 462.103 235.386L462.946 235.835C464.996 236.923 467.452 235.372 467.351 233.054L467.257 230.909C467.193 229.444 468.363 228.221 469.83 228.221C470.088 228.221 470.344 228.182 470.59 228.106L482.389 224.46C482.777 224.341 483.184 224.301 483.588 224.343L488.022 224.808C489.793 224.993 491.335 223.605 491.335 221.824V218.916C491.335 217.663 492.112 216.543 493.285 216.105L507.392 210.838C508.33 210.488 509.386 210.716 510.096 211.423C511.674 212.994 514.366 211.943 514.464 209.719L514.565 207.393C514.617 206.209 515.361 205.166 516.464 204.732L532.308 198.496C533.108 198.18 534.005 198.224 534.771 198.616L565.365 214.246C566.368 214.759 567 215.791 567 216.918V222.859C567 223.998 566.356 225.038 565.337 225.545L550.249 233.056C549.716 233.321 549.091 233.321 548.558 233.056C547.584 232.571 546.402 233.004 545.971 234.004L545.777 234.455C545.562 234.955 545.18 235.366 544.697 235.617L526.092 245.281C525.537 245.57 524.877 245.575 524.316 245.296C523.35 244.815 522.177 245.206 521.693 246.171L521.25 247.052C520.964 247.622 520.5 248.084 519.929 248.368L502.311 257.139C501.761 257.412 501.126 257.457 500.543 257.264C499.528 256.927 498.413 257.327 497.844 258.234L497.054 259.492C496.766 259.951 496.359 260.324 495.875 260.57L478.71 269.314C478.084 269.632 477.336 269.589 476.751 269.201C475.828 268.589 474.581 268.869 474.009 269.818L472.861 271.723C472.572 272.203 472.154 272.592 471.655 272.847L438.05 289.994C437.537 290.256 436.925 290.235 436.431 289.94C435.65 289.474 434.639 289.717 434.156 290.487L433.262 291.91C432.977 292.365 432.575 292.735 432.098 292.981L398.627 310.26C397.732 310.722 396.664 310.704 395.785 310.211L363.534 292.15C362.587 291.619 362 290.618 362 289.532Z" fill="#B3191C"/>
                            <path id="redShadow" d="M146.385 399.868L146.082 390.821C146.034 389.4 146.991 388.14 148.374 387.805L163.569 384.122C163.865 384.051 164.17 384.024 164.474 384.044L167.408 384.239C169.139 384.354 170.606 382.98 170.606 381.245V378.583C170.606 377.167 171.596 375.944 172.981 375.649L189.061 372.225L191.427 371.798C192.855 371.54 193.894 370.297 193.894 368.846V366.39C193.894 365.167 194.637 364.066 195.771 363.608L234.922 347.804C235.661 347.506 236.488 347.513 237.22 347.826L238.052 348.18C240.031 349.022 242.227 347.57 242.227 345.419V342.536C242.227 341.234 243.067 340.081 244.305 339.681L258.446 335.114C259.302 334.838 260.237 334.975 260.978 335.484C262.899 336.806 265.515 335.43 265.515 333.098V331.057C265.515 329.817 266.278 328.705 267.434 328.259L280.14 323.348C280.902 323.054 281.752 323.083 282.492 323.429L284.532 324.383C286.521 325.313 288.803 323.862 288.803 321.666V320.215C288.803 318.939 289.61 317.803 290.814 317.382L304.58 312.576C304.898 312.465 305.233 312.408 305.569 312.408H308.212C309.869 312.408 311.212 311.065 311.212 309.408V308.197C311.212 307.036 311.882 305.98 312.932 305.484L327.485 298.615C328.309 298.226 329.264 298.233 330.082 298.632L354.408 310.513C354.61 310.612 354.823 310.688 355.042 310.739L366.572 313.433C367.98 313.762 368.952 315.047 368.887 316.49L368.578 323.281C368.53 324.346 367.92 325.305 366.976 325.8L346.756 336.422C346.215 336.707 345.599 336.819 344.991 336.743L344.258 336.652C343.182 336.519 342.161 337.161 341.817 338.189C341.633 338.737 341.247 339.195 340.738 339.47L330.572 344.953C328.574 346.031 328.451 348.852 330.347 350.1L359.691 369.412C359.886 369.541 360.096 369.646 360.315 369.726L376.025 375.437C377.211 375.868 378 376.995 378 378.256V384.817C378 385.934 377.38 386.958 376.39 387.476L362.763 394.603C361.854 395.078 360.764 395.056 359.875 394.544L300.817 360.523C300.717 360.465 300.613 360.415 300.506 360.373L300.483 360.364C299.344 359.911 298.047 360.403 297.496 361.499C297.272 361.944 296.914 362.306 296.471 362.536L278.042 372.09C277.34 372.454 276.517 372.504 275.775 372.228C274.437 371.73 272.938 372.318 272.296 373.594L272.11 373.964C271.822 374.536 271.358 375.001 270.787 375.291L229.602 396.171C228.96 396.497 228.221 396.58 227.522 396.407L227.315 396.355C226.002 396.029 224.633 396.622 223.973 397.803L223.332 398.949C223.046 399.46 222.617 399.876 222.098 400.147L205.452 408.811C204.827 409.136 204.075 409.097 203.487 408.707C202.569 408.099 201.328 408.378 200.759 409.321L199.603 411.235C199.318 411.708 198.907 412.092 198.418 412.347L181.34 421.217C180.405 421.703 179.284 421.663 178.387 421.111L147.813 402.323C146.955 401.796 146.419 400.874 146.385 399.868Z" fill="#B3191C"/>
                            <g id="01" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('01', 4, 100)} onMouseEnter={() => setTenant('01')}>
                            <g id="01s">
                            <path id="01-1" d="M516.605 204.007L530.535 196.894C531.41 196.447 532.448 196.457 533.314 196.92L564.48 213.591C566.637 214.744 566.581 217.857 564.383 218.931L551.246 225.353C550.406 225.764 549.423 225.76 548.587 225.341L516.628 209.362C514.427 208.262 514.414 205.126 516.605 204.007Z" fill="#DF2327"/>
                            <path id="01-2" d="M493.083 215.876L506.419 208.764C507.289 208.3 508.332 208.293 509.209 208.747L540.837 225.106C542.995 226.222 543 229.307 540.846 230.43L527.181 237.56C526.31 238.014 525.272 238.014 524.402 237.559L493.104 221.182C490.968 220.064 490.956 217.011 493.083 215.876Z" fill="#DF2327"/>
                            <path id="01-3" d="M469.406 227.398L483.218 220.933C484.066 220.536 485.051 220.558 485.881 220.992L517.086 237.321C519.254 238.455 519.226 241.568 517.037 242.662L503.487 249.437C502.621 249.87 501.599 249.859 500.743 249.406L469.275 232.768C467.086 231.61 467.163 228.448 469.406 227.398Z" fill="#DF2327"/>
                            <path id="01-4" d="M445.5 239.669L460.345 232.398C461.229 231.965 462.27 231.993 463.13 232.474L493.755 249.61C495.836 250.774 495.792 253.784 493.678 254.888L479.836 262.109C478.953 262.57 477.899 262.563 477.022 262.089L445.394 245.003C443.247 243.843 443.309 240.742 445.5 239.669Z" fill="#DF2327"/>
                            </g>
                            <text id="01text-4" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="537" y="213.545">01</tspan></text>
                            <text id="01text-3" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="513" y="224.545">01</tspan></text>
                            <text id="01text-2" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="489" y="236.545">01</tspan></text>
                            <text id="01text-1" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="465" y="248.545">01</tspan></text>
                            </g>
                            <g id="02" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('02', 4, 100)} onMouseEnter={() => setTenant('02')}>
                            <path id="02s" d="M406.04 259.444L435.509 244.699C436.384 244.261 437.418 244.277 438.279 244.742L469.928 261.854C472.064 263.008 472.015 266.089 469.844 267.175L439.647 282.285C438.754 282.732 437.698 282.705 436.829 282.214L405.906 264.739C403.815 263.557 403.892 260.519 406.04 259.444Z" fill="#DF2327"/>
                            <text id="02-text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="434" y="265.545">02</tspan></text>
                            </g>
                            <g id="03" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('03', 4, 100)} onMouseEnter={() => setTenant('03')}>
                            <path id="03s" d="M364.139 279.917L394.849 264.709C395.744 264.266 396.801 264.297 397.668 264.792L429.192 282.793C431.26 283.974 431.193 286.979 429.074 288.067L399.456 303.271C398.568 303.727 397.511 303.711 396.637 303.228L364.021 285.232C361.9 284.062 361.969 280.991 364.139 279.917Z" fill="#DF2327"/>
                            <text id="03text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="393" y="285.545">03</tspan></text>
                            </g>
                            <g id="04" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('04', 4, 100)} onMouseEnter={() => setTenant('04')}>
                            <path id="04s" d="M313.061 305.393L333.065 295.688C333.953 295.257 334.995 295.291 335.854 295.777L367.228 313.561C369.291 314.73 369.246 317.718 367.148 318.825L347.432 329.223C346.516 329.706 345.415 329.683 344.52 329.161L312.858 310.683C310.785 309.473 310.901 306.441 313.061 305.393Z" fill="#DF2327"/>
                            <text id="04text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="334" y="314.545">04</tspan></text>
                            </g>
                            <g id="05" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('05', 4, 100)} onMouseEnter={() => setTenant('05')}>
                            <path id="05s" d="M290.102 316.716L304.347 309.718C305.259 309.27 306.336 309.315 307.208 309.836L338.307 328.418C340.339 329.633 340.23 332.612 338.114 333.675L324.949 340.282C324.055 340.731 322.997 340.705 322.127 340.213L289.948 322.02C287.849 320.833 287.937 317.779 290.102 316.716Z" fill="#DF2327"/>
                            <text id="05text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="310" y="326.545">05</tspan></text>
                            </g>
                            <g id="06" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('06', 4, 100)} onMouseEnter={() => setTenant('06')}>
                            <path id="06s" d="M267.21 328.086L280.757 321.673C281.647 321.251 282.687 321.294 283.54 321.786L375.199 374.677C377.263 375.868 377.181 378.875 375.055 379.952L362.576 386.271C361.678 386.726 360.611 386.7 359.736 386.202L267.009 333.405C264.9 332.204 265.016 329.125 267.21 328.086Z" fill="#DF2327"/>
                            <text id="06text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="316" y="354.545">06</tspan></text>
                            </g>
                            <g id="07" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('07', 4, 100)} onMouseEnter={() => setTenant('07')}>
                            <path id="07s" d="M243.972 339.379L257.582 332.723C258.503 332.273 259.59 332.324 260.464 332.858L292.431 352.396C294.431 353.619 294.319 356.56 292.232 357.627L279.291 364.244C278.371 364.714 277.273 364.678 276.386 364.148L243.751 344.65C241.707 343.428 241.832 340.426 243.972 339.379Z" fill="#DF2327"/>
                            <text id="07text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="264" y="350.545">07</tspan></text>
                            </g>
                            <g id="08" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('08', 4, 100)} onMouseEnter={() => setTenant('08')}>
                            <path id="08s" d="M195.937 363.457L234.715 344.702C235.621 344.263 236.686 344.309 237.552 344.822L268.371 363.099C270.392 364.298 270.313 367.25 268.231 368.338L230.22 388.211C229.284 388.7 228.16 388.662 227.26 388.109L195.673 368.714C193.653 367.473 193.802 364.489 195.937 363.457Z" fill="#DF2327"/>
                            <text id="08text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="228" y="368.545">08</tspan></text>
                            </g>
                            <g id="09" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('09', 4, 100)} onMouseEnter={() => setTenant('09')}>
                            <path id="09s" d="M172.863 375.656L187.328 368.723C188.266 368.274 189.37 368.342 190.246 368.904L219.651 387.786C221.589 389.031 221.46 391.905 219.418 392.97L205.57 400.197C204.618 400.694 203.473 400.644 202.568 400.065L172.545 380.89C170.563 379.624 170.742 376.673 172.863 375.656Z" fill="#DF2327"/>
                            <text id="09text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="190" y="385.545">09</tspan></text>
                            </g>
                            <g id='10' className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('10', 4, 100)} onMouseEnter={() => setTenant('10')}>
                            <path id="10s" d="M147.958 387.835L163.177 380.711C164.12 380.269 165.225 380.348 166.096 380.92L196.639 400.98C198.573 402.25 198.402 405.14 196.331 406.172L182.148 413.245C181.208 413.714 180.091 413.656 179.204 413.094L147.625 393.086C145.623 391.818 145.812 388.839 147.958 387.835Z" fill="#DF2327"/>
                            <text id="10text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="166" y="397.545">10</tspan></text>
                            </g>
                            <path id="aquaShadow" d="M229 408.298V402.787C229 401.436 229.903 400.252 231.205 399.894L231.972 399.684L254.495 395.919C255.941 395.677 257 394.426 257 392.96V387.624C257 386.351 257.803 385.217 259.003 384.794L270.189 380.853C270.601 380.708 271.039 380.655 271.473 380.696L281.712 381.683C283.475 381.853 285 380.468 285 378.697V373.518C285 372.062 286.046 370.816 287.479 370.563L290.188 370.086C290.511 370.029 290.841 370.026 291.166 370.076L318.953 374.367C319.227 374.409 319.493 374.489 319.745 374.605L353.75 390.198C354.817 390.687 355.5 391.752 355.5 392.925V397.222C355.5 398.318 354.902 399.327 353.94 399.854L335.817 409.768C335.184 410.114 334.426 410.15 333.763 409.864C332.619 409.372 331.29 409.859 330.734 410.974L330.377 411.692C330.105 412.239 329.672 412.689 329.136 412.983L307.598 424.812C306.947 425.17 306.166 425.208 305.483 424.914C304.344 424.424 303.018 424.877 302.418 425.962L301.694 427.271C301.416 427.772 301.002 428.183 300.498 428.456L280.702 439.186C279.771 439.691 278.643 439.667 277.733 439.124L230.461 410.873C229.555 410.332 229 409.354 229 408.298Z" fill="#0A89AA"/>
                            <g id="38" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('38', 4, 100)} onMouseEnter={() => setTenant('38')}>
                            <path id="38s" d="M286.767 370.529L303.666 361.769C304.588 361.291 305.692 361.324 306.584 361.857L353.499 389.868C355.49 391.057 355.437 393.96 353.402 395.075L336.797 404.173C335.862 404.685 334.725 404.663 333.811 404.114L286.603 375.764C284.591 374.556 284.683 371.609 286.767 370.529Z" fill="#0AADD7"/>
                            <text id="38text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="316" y="384.545">38</tspan></text>
                            </g>
                            <g id="39" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('39', 4, 100)} onMouseEnter={() => setTenant('39')}>
                            <path id="39s" d="M258.883 384.627L276.595 375.737C277.509 375.278 278.595 375.317 279.474 375.84L326.41 403.76C328.422 404.957 328.349 407.894 326.28 408.989L308.868 418.209C307.941 418.7 306.825 418.671 305.925 418.133L258.689 389.883C256.658 388.668 256.768 385.689 258.883 384.627Z" fill="#0AADD7"/>
                            <text id="39text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="288" y="398.545">39</tspan></text>
                            </g>
                            <g id="40" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('40', 4, 100)} onMouseEnter={() => setTenant('40')}>
                            <path id="40s" d="M230.985 399.621L249.044 390.718C249.952 390.27 251.026 390.311 251.898 390.827L298.55 418.426C300.532 419.599 300.508 422.476 298.505 423.616L281.759 433.142C280.825 433.673 279.679 433.664 278.754 433.12L230.79 404.897C228.734 403.687 228.845 400.676 230.985 399.621Z" fill="#0AADD7"/>
                            <text id="40text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="260" y="412.545">40</tspan></text>
                            </g>
                            <path id="yellowShadow" d="M486 594.194V583.726C486 582.518 486.724 581.429 487.836 580.961L506.864 572.954C507.51 572.682 508.232 572.645 508.903 572.85L514.047 574.418C515.975 575.006 517.922 573.564 517.922 571.549V564.434C517.922 563.235 518.636 562.15 519.738 561.677L550.307 548.552C551.122 548.202 552.051 548.231 552.843 548.63L614.352 579.668C615.362 580.178 616 581.214 616 582.346V596.81C616 597.859 615.452 598.832 614.554 599.376L583.637 618.103C582.774 618.626 581.677 618.561 580.881 617.941C579.585 616.931 577.682 617.469 577.106 619.007L575.994 621.979C575.767 622.586 575.349 623.103 574.803 623.453L550.665 638.914C549.639 639.571 548.319 639.543 547.322 638.842L487.275 596.648C486.476 596.087 486 595.171 486 594.194Z" fill="#D1B115"/>
                            <path id="yellowShadowTwo" d="M264 473.034V459.193C264 457.99 264.718 456.904 265.824 456.433L340.989 424.395C341.589 424.139 342.258 424.086 342.891 424.244L364.153 429.55C365.49 429.884 366.427 431.084 366.427 432.461V440.512C366.427 441.642 367.061 442.675 368.068 443.187L508.359 514.494C509.366 515.005 510 516.039 510 517.168V532.403C510 533.465 509.438 534.449 508.522 534.988L433.654 579.076C432.69 579.644 431.49 579.628 430.542 579.035L295.864 494.844C295.352 494.524 294.949 494.057 294.706 493.504L293.139 489.927C292.598 488.693 290.985 488.388 290.032 489.34C289.399 489.972 288.414 490.082 287.657 489.605L265.4 475.572C264.529 475.022 264 474.064 264 473.034Z" fill="#D1B115"/>
                            <path id="yellowShadowThree" d="M461 457.374V444.595C461 443.486 461.611 442.468 462.589 441.947L483.593 430.752C484.475 430.282 485.533 430.282 486.415 430.752L507.42 441.947C508.398 442.468 509.008 443.486 509.008 444.595V448.176C509.008 449.833 510.352 451.176 512.008 451.176H520.475C520.97 451.176 521.457 451.299 521.893 451.533L562.418 473.269C563.392 473.792 564 474.807 564 475.913V487.89C564 488.928 563.464 489.892 562.582 490.439L540.656 504.048C539.713 504.634 538.523 504.651 537.564 504.092L488.293 475.39C487.867 475.142 487.568 474.723 487.472 474.239L487.141 472.564C486.987 471.786 485.992 471.546 485.5 472.168C485.215 472.528 484.709 472.626 484.31 472.399L462.515 459.981C461.578 459.447 461 458.452 461 457.374Z" fill="#D1B115"/>
                            <path id="yellShadowFour" d="M614 548.863V537.55C614 536.268 614.815 535.128 616.027 534.712L643.156 525.413C643.925 525.149 644.769 525.209 645.494 525.579L678.365 542.377C679.369 542.89 680 543.922 680 545.048V556.283C680 557.323 679.462 558.288 678.577 558.835L655.574 573.052C654.63 573.635 653.441 573.65 652.483 573.089L615.486 551.453C614.565 550.915 614 549.929 614 548.863Z" fill="#D1B115"/>
                            <g id="16" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('16', 4, 100)} onMouseEnter={() => setTenant('16')}>
                            <path id="16s" d="M487.248 580.177L509.62 566.907C510.562 566.348 511.735 566.347 512.678 566.905L573.823 603.075C575.742 604.21 575.796 606.968 573.923 608.177L551.009 622.969C550.034 623.598 548.783 623.609 547.798 622.996L487.194 585.305C485.283 584.117 485.312 581.325 487.248 580.177Z" fill="#F1CA11"/>
                            <text id="16text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="526" y="596.545">16</tspan></text>
                            </g>
                            <g id="17" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('17', 4, 100)} onMouseEnter={() => setTenant('17')}>
                            <path id="17s" d="M519.509 561.526L550.901 543.852C551.837 543.325 552.984 543.339 553.907 543.889L613.716 579.506C615.659 580.664 615.672 583.473 613.74 584.648L583.45 603.061C582.5 603.639 581.309 603.644 580.354 603.074L519.443 566.717C517.464 565.535 517.5 562.657 519.509 561.526Z" fill="#F1CA11"/>
                            <text id="17text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="562" y="575.545">17</tspan></text>
                            </g>
                            <g id="18" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('18', 4, 100)} onMouseEnter={() => setTenant('18')}>
                            <path id="18s" d="M296.541 474.357L371.503 433.812C372.433 433.309 373.561 433.333 374.469 433.876L508.642 514.078C510.602 515.249 510.587 518.092 508.616 519.243L433.559 563.087C432.598 563.649 431.405 563.632 430.46 563.043L296.382 479.542C294.428 478.325 294.516 475.452 296.541 474.357Z" fill="#F1CA11"/>
                            <text id="18text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="394" y="493.545">18</tspan></text>
                            </g>
                            <g id="19" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('19', 4, 100)} onMouseEnter={() => setTenant('19')}>
                            <path id="19s" d="M265.696 455.043L340.3 415.779C341.22 415.295 342.326 415.322 343.221 415.85L364.388 428.332C366.407 429.522 366.342 432.465 364.273 433.565L289.724 473.2C288.791 473.696 287.666 473.665 286.762 473.117L265.539 460.264C263.543 459.055 263.631 456.13 265.696 455.043Z" fill="#F1CA11"/>
                            <text id="19text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="311" y="445.545">19</tspan></text>
                            </g>
                            <g id="20" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('20', 4, 100)} onMouseEnter={() => setTenant('20')}>
                            <path id="20s" d="M615.471 534.242L638.859 520.861C639.79 520.328 640.935 520.333 641.862 520.875L677.698 541.804C679.65 542.944 679.688 545.751 677.768 546.943L655.059 561.04C654.108 561.63 652.909 561.642 651.947 561.072L615.431 539.427C613.453 538.254 613.475 535.384 615.471 534.242Z" fill="#F1CA11"/>
                            <text id="20text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="643" y="542.545">20</tspan></text>
                            </g>
                            <g id="21" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('21', 4, 100)} onMouseEnter={() => setTenant('21')}>
                            <path id="21s" d="M491.566 458.198L513.493 445.837C514.414 445.318 515.54 445.322 516.457 445.847L562.48 472.202C564.487 473.351 564.494 476.242 562.493 477.401L540.528 490.127C539.597 490.667 538.448 490.666 537.517 490.125L491.532 463.405C489.526 462.24 489.545 459.337 491.566 458.198Z" fill="#F1CA11"/>
                            <text id="21text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="522" y="467.545">21</tspan></text>
                            </g>
                            <g id='22' className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('22', 4, 100)} onMouseEnter={() => setTenant('22')}>
                            <path id="22s" d="M462.833 441.621L484.836 429.802C485.762 429.304 486.881 429.328 487.785 429.864L507.436 441.512C509.443 442.702 509.383 445.627 507.329 446.734L486.004 458.221C485.103 458.706 484.016 458.699 483.122 458.201L462.793 446.885C460.721 445.732 460.743 442.744 462.833 441.621Z" fill="#F1CA11"/>
                            <text id="22text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="481" y="445.545">22</tspan></text>
                            </g>
                            <path id="orangeShadow" d="M77 432.144V418.929C77 417.775 77.6625 416.723 78.7036 416.224L136.135 388.703C137.05 388.265 138.125 388.319 138.992 388.847L185.997 417.48L201.277 424.993C202.327 425.509 202.981 426.589 202.952 427.759L202.607 441.685C202.581 442.769 201.971 443.754 201.013 444.262L142.661 475.168C141.692 475.681 140.521 475.625 139.606 475.022L78.3491 434.649C77.5069 434.094 77 433.153 77 432.144Z" fill="#BD6218"/>
                            <path id="orangeShadowTwo" d="M179 499.095V484.448C179 483.196 179.778 482.075 180.952 481.637L226.938 464.492C227.773 464.18 228.704 464.257 229.478 464.7L279.084 493.136C280.016 493.67 280.592 494.663 280.592 495.738V502.547C280.592 503.817 281.391 504.949 282.588 505.374L305.22 513.411L345.321 533.976C346.347 534.502 346.981 535.57 346.951 536.722L346.603 550.224C346.576 551.26 346.017 552.209 345.123 552.733L301.973 578.066C300.997 578.639 299.782 578.614 298.831 578.002L241.751 541.281C241.006 540.801 240.524 540.005 240.443 539.123C240.28 537.342 238.55 536.14 236.824 536.608L236.582 536.673C235.762 536.896 234.885 536.76 234.171 536.299L180.374 501.616C179.518 501.064 179 500.114 179 499.095Z" fill="#BD6218"/>
                            <path id="orangeShadowThree" d="M335 601.012V585.693C335 584.346 335.897 583.165 337.194 582.803L385.56 569.31C386.275 569.111 387.04 569.184 387.705 569.515L441.061 596.128C442.079 596.636 442.722 597.675 442.722 598.813V607.055C442.722 608.875 444.33 610.276 446.133 610.027L498.684 602.769C499.311 602.682 499.949 602.796 500.507 603.094L541.413 624.94C542.39 625.461 543 626.479 543 627.586V642.04C543 643.071 542.471 644.03 541.598 644.579L471.071 688.969C470.074 689.597 468.802 689.583 467.819 688.934L404.074 646.821C403.577 646.493 403.189 646.024 402.959 645.475L402.115 643.454C401.544 642.086 400.06 641.341 398.621 641.699L397.138 642.07C396.328 642.271 395.47 642.127 394.771 641.67L336.36 603.523C335.511 602.969 335 602.025 335 601.012Z" fill="#BD6218"/>
                            <g id="11" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('11', 4, 100)} onMouseEnter={() => setTenant('11')}>
                            <path id="11s" d="M78.7478 416.082L137.404 386.75C138.336 386.284 139.443 386.335 140.328 386.885L201.498 424.871C203.479 426.101 203.36 429.022 201.286 430.088L142.623 460.216C141.677 460.702 140.545 460.65 139.646 460.081L78.4831 421.299C76.5119 420.049 76.6603 417.126 78.7478 416.082Z" fill="#F47F20"/>
                            <text id="11text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="137" y="423.545">11</tspan></text>
                            </g>
                            <g id="12" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('12', 4, 100)} onMouseEnter={() => setTenant('12')}>
                            <path id="12s" d="M181.542 481.218L223.635 458.823C224.591 458.315 225.746 458.361 226.659 458.943L278.744 492.213C280.663 493.438 280.571 496.27 278.577 497.368L237.252 520.141C236.292 520.671 235.119 520.634 234.193 520.045L181.34 486.397C179.401 485.163 179.513 482.297 181.542 481.218Z" fill="#F47F20"/>
                            <text id="12text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="227" y="489.545">12</tspan></text>
                            </g>
                            <g id="13" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('13', 4, 100)} onMouseEnter={() => setTenant('13')}>
                            <path id="13s" d="M245.354 521.41L286.682 498.841C287.634 498.322 288.792 498.356 289.711 498.931L344.804 533.401C346.714 534.596 346.674 537.391 344.732 538.532L302.96 563.049C301.969 563.631 300.733 563.596 299.777 562.959L245.129 526.54C243.252 525.289 243.375 522.491 245.354 521.41Z" fill="#F47F20"/>
                            <text id="13text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="292" y="530.545">13</tspan></text>
                            </g>
                            <g id="14" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('14', 4, 100)} onMouseEnter={() => setTenant('14')}>
                            <path id="14s" d="M336.339 582.998L378.825 558.875C379.776 558.335 380.944 558.355 381.876 558.927L440.698 595.027C442.638 596.217 442.598 599.049 440.625 600.184L397.329 625.095C396.361 625.651 395.165 625.625 394.223 625.026L336.21 588.139C334.301 586.925 334.371 584.115 336.339 582.998Z" fill="#F47F20"/>
                            <text id="14text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="385" y="592.545">14</tspan></text>
                            </g>
                            <g id="15" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('15', 4, 100)} onMouseEnter={() => setTenant('15')}>
                            <path id="15s" d="M407.231 627.901L477.466 586.91C478.425 586.35 479.615 586.366 480.559 586.951L540.853 624.32C542.754 625.498 542.744 628.266 540.835 629.431L471.015 672.022C470.035 672.62 468.799 672.606 467.832 671.986L407.123 633.016C405.237 631.806 405.296 629.03 407.231 627.901Z" fill="#F47F20"/>
                            <text id="15text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="471" y="630.545">15</tspan></text>
                            </g>
                            <path id="navyShadowFour" d="M557 461.535V448.529C557 447.382 557.654 446.336 558.684 445.833L636.74 407.73L783.047 350.355C783.635 350.124 784.281 350.085 784.893 350.243L901.751 380.47C903.075 380.813 904 382.007 904 383.375V398.173C904 399.22 903.455 400.19 902.561 400.735L683.819 534.077C682.885 534.646 681.716 534.663 680.767 534.119L558.51 464.138C557.576 463.604 557 462.611 557 461.535Z" fill="#17526A"/>
                            <path id="navyShadow" d="M510 427.707V422.658C510 421.251 510.978 420.033 512.351 419.729L539.258 413.771C540.632 413.467 541.61 412.249 541.61 410.842V404C541.61 402.343 542.953 401 544.61 401H574.442C574.795 401 575.145 401.062 575.476 401.184L598.034 409.466C599.215 409.899 600 411.024 600 412.282V417.619C600 418.704 599.415 419.704 598.469 420.235L576.564 432.539C576.119 432.788 575.581 432.802 575.125 432.574C574.187 432.107 573.066 432.695 572.917 433.732L572.896 433.883C572.823 434.39 572.519 434.835 572.073 435.086L547.052 449.161C546.128 449.681 544.998 449.674 544.08 449.143L511.498 430.304C510.571 429.768 510 428.778 510 427.707Z" fill="#17526A"/>
                            <path id="navyShadowTwo" d="M636 357.207V351.565C636 350.321 636.767 349.207 637.929 348.763L659.649 340.462C660.42 340.167 661.279 340.203 662.022 340.562L692.303 355.159C693.34 355.659 694 356.71 694 357.861V363.707C694 364.799 693.406 365.805 692.45 366.333L672.755 377.21C671.862 377.702 670.781 377.708 669.883 377.225L637.579 359.849C636.606 359.326 636 358.311 636 357.207Z" fill="#17526A"/>
                            <path id="navyShadowThree" d="M480 357.248V347.51C480 346.294 480.734 345.198 481.859 344.736L559.641 312.764C560.766 312.302 561.5 311.206 561.5 309.99V305.137C561.5 303.858 562.311 302.72 563.52 302.302L580.615 296.392C581.342 296.14 582.138 296.178 582.839 296.497L632.181 318.972C633.283 319.474 633.975 320.589 633.936 321.799L633.616 331.741C633.582 332.808 632.983 333.777 632.044 334.284L532.32 388.186C531.386 388.69 530.255 388.664 529.346 388.116L507.609 375.025C507.009 374.663 506.597 374.057 506.482 373.366L506.261 372.034C506.052 370.776 504.548 370.23 503.581 371.062C503.059 371.511 502.311 371.585 501.711 371.246L481.526 359.861C480.583 359.329 480 358.33 480 357.248Z" fill="#17526A"/>
                            <g id="23" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('23', 4, 100)} onMouseEnter={() => setTenant('23')}>
                            <path id="23s" d="M558.614 444.337L778.724 319.786C779.593 319.295 780.648 319.267 781.541 319.713L902.129 379.888C904.244 380.943 904.365 383.915 902.344 385.139L682.829 518.09C681.9 518.652 680.741 518.669 679.797 518.135L558.614 449.559C556.584 448.41 556.584 445.485 558.614 444.337Z" fill="#1D6684"/>
                            <text id="23text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="730" y="412.545">23</tspan></text>
                            </g>
                            <g id="24" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('24', 4, 100)} onMouseEnter={() => setTenant('24')}>
                            <path id="24s" d="M511.649 419.303L533.9 406.838C534.828 406.319 535.961 406.329 536.879 406.865L569.442 425.874C571.452 427.047 571.418 429.963 569.382 431.09L547.515 443.187C546.603 443.692 545.493 443.687 544.585 443.173L511.638 424.531C509.603 423.38 509.609 420.446 511.649 419.303Z" fill="#1D6684"/>
                            <text id="24text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="536" y="426.545">24</tspan></text>
                            </g>
                            <g id="25" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('25', 4, 100)} onMouseEnter={() => setTenant('25')}>
                            <path id="25s" d="M543.613 401.004L563.99 389.82C564.916 389.311 566.041 389.328 566.952 389.862L598.547 408.41C600.533 409.575 600.52 412.45 598.524 413.598L578.476 425.127C577.538 425.667 576.383 425.659 575.452 425.109L543.528 406.216C541.528 405.032 541.575 402.122 543.613 401.004Z" fill="#1D6684"/>
                            <text id="25text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="566" y="409.545">25</tspan></text>
                            </g>
                            <g id="26" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('26', 4, 100)} onMouseEnter={() => setTenant('26')}>
                            <path id="26s" d="M637.781 347.741L657.149 336.818C658.051 336.309 659.153 336.302 660.062 336.799L692.229 354.391C694.301 355.524 694.312 358.496 692.248 359.644L673.264 370.208C672.377 370.702 671.3 370.713 670.402 370.238L637.851 353.006C635.755 351.896 635.715 348.906 637.781 347.741Z" fill="#1D6684"/>
                            <text id="26text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="661" y="355.545">26</tspan></text>
                            </g>
                            <g id="27" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('27', 4, 100)} onMouseEnter={() => setTenant('27')}>
                            <path id="27s" d="M563.191 301.641L579.714 292.756C580.593 292.283 581.65 292.279 582.533 292.744L632.058 318.836C634.174 319.951 634.198 322.973 632.1 324.121L533.314 378.193C532.398 378.694 531.288 378.684 530.382 378.165L509.704 366.317C507.658 365.144 507.702 362.178 509.782 361.067L582.304 322.339C584.424 321.207 584.418 318.166 582.295 317.042L563.208 306.934C561.088 305.811 561.078 302.777 563.191 301.641Z" fill="#1D6684"/>
                            <text id="27text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="568" y="341.545">27</tspan></text>
                            </g>
                            <g id="28" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('28', 4, 100)} onMouseEnter={() => setTenant('28')}>
                            <path id="28s" d="M481.866 344.849L553.138 306.77C554.036 306.29 555.117 306.299 556.007 306.793L575.236 317.466C577.303 318.613 577.293 321.589 575.218 322.722L504.745 361.21C503.844 361.702 502.753 361.699 501.855 361.202L481.827 350.12C479.747 348.969 479.769 345.97 481.866 344.849Z" fill="#1D6684"/>
                            <text id="28text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="526" y="335.545">28</tspan></text>
                            </g>
                            <path id="toscaShadowTwo" d="M444.5 298.698V294.253C444.5 292.696 445.692 291.398 447.243 291.264L471.51 289.181C473.062 289.048 474.254 287.749 474.254 286.192V278.793C474.254 277.318 475.326 276.062 476.782 275.831L501.471 271.902C502.928 271.671 504 270.414 504 268.94V263.115C504 261.847 504.798 260.716 505.992 260.289L525.327 253.394C526.037 253.141 526.816 253.164 527.509 253.459L555.174 265.223C556.281 265.694 557 266.781 557 267.984V272.632C557 273.776 556.35 274.82 555.324 275.324L535.593 285.03C535.051 285.296 534.442 285.393 533.845 285.307L533.71 285.288C532.492 285.114 531.291 285.701 530.681 286.769L530.36 287.33C530.085 287.813 529.68 288.209 529.192 288.476L506.811 300.68C506.174 301.028 505.433 301.132 504.724 300.975L504.418 300.907C502.96 300.583 501.487 301.382 500.963 302.779C500.704 303.468 500.201 304.038 499.55 304.38L476.904 316.263C476.026 316.724 474.976 316.721 474.1 316.255L446.09 301.347C445.112 300.826 444.5 299.807 444.5 298.698Z" fill="#73AE99"/>
                            <path id="toscaShadowThree" d="M564 259.318V249.702C564 248.415 564.821 247.271 566.041 246.86L594.447 237.274C594.978 237.095 595.548 237.068 596.093 237.196L622.687 243.456C624.042 243.775 625 244.984 625 246.376V253.999C625 255.211 625.729 256.303 626.848 256.769L760.152 312.231C761.271 312.697 762 313.789 762 315.001V325.257C762 326.335 761.422 327.329 760.485 327.863L730.076 345.193C729.192 345.696 728.114 345.718 727.211 345.251L598.942 278.854C598.274 278.508 597.767 277.915 597.529 277.202L597.418 276.871C596.96 275.498 595.454 274.78 594.099 275.287C593.435 275.536 592.697 275.497 592.062 275.181L565.66 262.002C564.643 261.494 564 260.455 564 259.318Z" fill="#73AE99"/>
                            <g id="29" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('29', 4, 100)} onMouseEnter={() => setTenant('29')}>
                            <path id="29s" d="M601.073 264.581L631.067 248.723C631.925 248.269 632.948 248.258 633.815 248.694L760.108 312.092C762.225 313.154 762.333 316.137 760.298 317.35L730.437 335.146C729.547 335.677 728.445 335.711 727.524 335.235L601.098 269.898C598.946 268.786 598.932 265.714 601.073 264.581Z" fill="#91D2BB"/>
                            <text id="29text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="673" y="290.545">29</tspan></text>
                            </g>
                            <g id="30" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('30', 4, 100)} onMouseEnter={() => setTenant('30')}>
                            <path id="30s" d="M566.153 246.521L595.944 230.743C596.821 230.278 597.872 230.277 598.749 230.741L622.987 243.54C625.117 244.665 625.12 247.715 622.992 248.844L593.894 264.276C593.038 264.73 592.015 264.743 591.148 264.31L566.216 251.856C564.033 250.765 563.996 247.663 566.153 246.521Z" fill="#91D2BB"/>
                            <text id="30text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="591" y="248.545">30</tspan></text>
                            </g>
                            <g id="31" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('31', 4, 100)} onMouseEnter={() => setTenant('31')}>
                            <path id="31s" d="M505.989 259.984L525.576 249.759C526.482 249.286 527.566 249.307 528.453 249.814L555.238 265.127C557.297 266.304 557.24 269.292 555.139 270.39L536.256 280.259C535.37 280.722 534.311 280.713 533.433 280.235L505.944 265.279C503.835 264.132 503.861 261.095 505.989 259.984Z" fill="#91D2BB"/>
                            <text id="31text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="526" y="266.545">31</tspan></text>
                            </g>
                            <g id="32" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('32', 4, 100)} onMouseEnter={() => setTenant('32')}>
                            <path id="32s" d="M476.227 275.578L496.327 265.684C497.198 265.255 498.223 265.274 499.077 265.735L526.208 280.385C528.288 281.508 528.313 284.483 526.252 285.64L507.475 296.192C506.579 296.695 505.488 296.705 504.584 296.218L476.131 280.911C473.983 279.755 474.039 276.655 476.227 275.578Z" fill="#91D2BB"/>
                            <text id="32text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="496" y="281.545">32</tspan></text>
                            </g>
                            <g id="33" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('33', 4, 100)} onMouseEnter={() => setTenant('33')}>
                            <path id="33s" d="M446.171 290.753L466.329 280.692C467.199 280.258 468.225 280.272 469.082 280.73L496.162 295.194C498.254 296.311 498.283 299.299 496.214 300.457L477.037 311.194C476.141 311.696 475.051 311.705 474.147 311.217L446.086 296.077C443.947 294.923 443.996 291.838 446.171 290.753Z" fill="#91D2BB"/>
                            <text id="33text" fill="black" font-family="Inter" font-size="7" font-weight="500" letter-spacing="0em"><tspan x="467" y="296.545">33</tspan></text>
                            </g>
                        </g>
                        <defs>
                        <filter id="filter0_d_1_2" x="43.3502" y="185.089" width="989.805" height="533.862" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="1"/>
                        <feGaussianBlur stdDeviation="1.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2" result="shape"/>
                        </filter>
                        </defs>
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
        top: '211.545px',
        left: '487px',
        image: '/images/default-image.png',
        photos: ''
    },
    {
        id: '02',
        name: 'Rifan Index Trading',
        top: '240.545px',
        left: '432px',
        image: '/images/image-2.png',
    },
    {
        id: '03',
        name: 'A&W Restaurant',
        top: '260.545px',
        left: '391px',
        image: '/images/default-image.png',

    },
    {
        id: '04',
        name: 'Hoka-Hoka Bento',
        top: '289.545px',
        left: '332px',
        image: '/images/image-2.png',
    },
    {
        id: '05',
        name: 'Mie Pasar Baru',
        top: '301.545px',
        left: '308px',
        image: '/images/default-image.png',

    },
    {
        id: '06',
        name: 'Butchery',
        top: '329.545px',
        left: '314px',
        image: '/images/image-2.png',
    },
    {
        id: '07',
        name: 'Mangos',
        top: '325.545px',
        left: '262px',
        image: '/images/default-image.png',

    },
    {
        id: '08',
        name: 'blank',
        top: '343.545px',
        left: '226px',
        image: '/images/image-2.png',

    },
    {
        id: '09',
        name: 'Happy Puppy',
        top: '360.545px',
        left: '188px',
        image: '/images/default-image.png',

    },
    {
        id: '10',
        name: 'Natasha',
        top: '372.545px',
        left: '164px',
        image: '/images/image-2.png',

    },
    {
        id: '11',
        name: 'Pizza Hut',
        top: '398.545px',
        left: '135px',
        image: '/images/default-image.png',

    },
    {
        id: '12',
        name: 'Excelso',
        top: '464.545px',
        left: '225px',
        image: '/images/image-2.png',

    },
    {
        id: '13',
        name: 'Ramenya',
        top: '505.545px',
        left: '290px',
        image: '/images/default-image.png',

    },
    {
        id: '14',
        name: 'JCO Donut',
        top: '567.545px',
        left: '383px',
        image: '/images/image-2.png',

    },
    {
        id: '15',
        name: 'KFC',
        top: '602.545px',
        left: '469px',
        image: '/images/default-image.png',

    },
    {
        id: '16',
        name: 'Bread Talk',
        top: '571.545px',
        left: '524px',
        image: '/images/image-2.png',

    },
    {
        id: '17',
        name: 'Solaria',
        top: '550.545px',
        left: '560px',
        image: '/images/default-image.png',

    },
    {
        id: '18',
        name: 'Main Atrium',
        top: '468.545px',
        left: '392px',
        image: '/images/image-2.png',

    },
    {
        id: '19',
        name: 'Bread Talk',
        top: '420.545px',
        left: '309px',
        image: '/images/default-image.png',

    },
    {
        id: '20',
        name: 'Manzone',
        top: '517.545px',
        left: '641px',
        image: '/images/image-2.png',

    },
    {
        id: '21',
        name: 'Body Shop',
        top: '442.545px',
        left: '520px',
        image: '/images/default-image.png',

    },
    {
        id: '22',
        name: 'Nature Republic',
        top: '420.545px',
        left: '479px',
        image: '/images/image-2.png',

    },
    {
        id: '23',
        name: 'Matahari',
        top: '387.545px',
        left: '728px',
        image: '/images/default-image.png',

    },
    {
        id: '24',
        name: 'Bata',
        top: '401.545px',
        left: '534px',
        image: '/images/image-2.png',

    },
    {
        id: '25',
        name: 'Watch Club',
        top: '384.545px',
        left: '564px',
        image: '/images/default-image.png',

    },
    {
        id: '26',
        name: 'Optik Melawai',
        top: '330.545px',
        left: '659px',
        image: '/images/image-2.png',

    },
    {
        id: '27',
        name: 'Shigeru',
        top: '316.545px',
        left: '566px',
        image: '/images/default-image.png',

        
    },
    {
        id: '28',
        name: 'Chattime Cupbob',
        top: '310.545px',
        left: '524px',
        image: '/images/image-2.png',

    },
    {
        id: '29',
        name: 'Payless',
        top: '265.545px',
        left: '671px',
        image: '/images/default-image.png',

    },
    {
        id: '30',
        name: 'Converse',
        top: '223.545px',
        left: '589px',
        image: '/images/image-2.png',

    },
    {
        id: '31',
        name: 'Ichiban Sushi',
        top: '241.545px',
        left: '524px',
        image: '/images/default-image.png',

    },
    {
        id: '32',
        name: 'Op Tunggal',
        top: '256.545px',
        left: '494px',
        image: '/images/image-2.png',

    },
    {
        id: '33',
        name: 'A&W Restaurant',
        top: '271.545px',
        left: '465px',
        image: '/images/default-image.png',

    },
    {
        id: '34',
        name: 'Optik Seis',
        top: '296.545px',
        left: '435px',
        image: '/images/image-2.png'
    },
    {
        id: '35',
        name: 'Gosh',
        top: '308.545px',
        left: '411px',
        image: '/images/default-image.png',

    },
    {
        id: '36',
        name: 'Belagio',
        top: '320.545px',
        left: '388px',
        image: '/images/image-2.png',

    },
    {
        id: '37',
        name: 'Giordano',
        top: '334.545px',
        left: '362px',
        image: '/images/default-image.png',

    },
    {
        id: '38',
        name: 'Donini',
        top: '359.545px',
        left: '314px',
        image: '/images/image-2.png',

    },
    {
        id: '39',
        name: 'Rotili',
        top: '373.545px',
        left: '286px',
        image: '/images/default-image.png',

    },
    {
        id: '40',
        name: 'The Excecutive',
        top: '387.545px',
        left: '258px',
        image: '/images/image-2.png',

    },
]