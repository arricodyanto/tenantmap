import React, { useState } from 'react'
import { Box,  Button,  ButtonGroup,  Card, CardActionArea, CardActions, CardContent, CardMedia, Fab, Popover, Typography } from '@mui/material'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

export const SFMap = () => {
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
                    <Fab size="small" color="primary" aria-label="reset" onClick={() => zoomToElement('map-canvasss')}>
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
                                    <Popover id="mouse-over-popover" sx={{ pointerEvents: 'none', }} open={open} anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'center', }} transformOrigin={{ vertical: 'bottom', horizontal: 'center', }} onClose={handlePopoverClose} transitionDuration={0}>
                                        {/* <Typography>{item.name}</Typography> */}
                                        <Card className='w-32 p-2'>
                                            <CardActionArea>
                                                <CardMedia component="img" width="128" height="128" image={item.image} alt={item.name} />
                                                <Typography className='text-center pt-1' variant='body2'>{item.name}</Typography>
                                            </CardActionArea>
                                        </Card>
                                    </Popover>

                                    <Popover id={id} open={openEl} anchorEl={anchorClick} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center', }} transformOrigin={{ vertical: 'bottom', horizontal: 'center', }}>
                                        <CardContent id='popo' className='w-80'>
                                            <Typography sx={{ fontWeight: 'bold', fontSize: '16',}}>
                                                {item.name}
                                            </Typography>
                                        </CardContent>
                                        <CardActions className='float-right'>
                                            <Button sx={{ textTransform: 'none' }} variant="contained" size="small" disableElevation>Lihat Lokasi</Button>
                                        </CardActions>
                                    </Popover>
                                </>
                            )
                        } else {
                            return null
                        }
                })}

                <Box id='map-canvasss' className='w-[1080px]'>
                    <svg width="1040" height="900" viewBox="0 0 1040 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SF">
                        <path id="Vector 264" d="M452.681 699.738L114.612 477.324C101.823 468.91 102.842 449.835 116.455 442.831L562.369 213.411C566.546 211.263 571.488 211.194 575.723 213.227L619 234C629.743 228.944 642.204 229.054 652.857 234.298L959.455 385.225C973.479 392.129 974.518 411.729 961.304 420.077L517.705 700.337C497.792 712.918 472.359 712.684 452.681 699.738Z" fill="#F4F4F4"/>
                        <path id="Vector 258" d="M618 273L579 254L498 299L588 343.5L571.5 357.5L588 374.5L535.5 404.5L542 409L521.5 420.5L528 424.5L500 440L629 512.5L653 528.5L433 662.5L453.5 675.5L658.5 549.5H731L953 413C962.042 406.219 960.571 392.242 950.316 387.492L766.683 302.423C755.012 297.017 741.707 296.316 729.532 300.466L726.5 301.5L641.5 260.5L618 273Z" fill="#D9D9D9"/>
                        <path id="Vector 262" d="M629 255L645 245.5L768.5 303H727.5L629 255Z" fill="#D9D9D9"/>
                        <path id="Vector 263" d="M535.5 404.5L542.5 409L521.5 420.5L528.5 424.5L503 439L489.5 431" stroke="#888888" stroke-width="0.5"/>
                        <g id="line park">
                        <g id="Group 2">
                        <path id="Vector 249" d="M573 423L587.5 415L605.5 424.643L615.5 430L601.5 438" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 250" d="M606 425L592.5 433" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 251" d="M597 420L583 428" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        </g>
                        <g id="Group 3">
                        <path id="Vector 249_2" d="M606.5 441.5L620.5 433L638.5 442.643L648.5 448L635 456.5" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 250_2" d="M639 443L626 451.5" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 251_2" d="M630 438L617 446.5" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        </g>
                        <g id="Group 8">
                        <path id="Vector 249_3" d="M627 391.5L641 383L659 392.643L669 398L655.5 406.5" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 250_3" d="M659.5 393L646.5 401.5" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 251_3" d="M650.5 388L637.5 396.5" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        </g>
                        <g id="Group 9">
                        <path id="Vector 249_4" d="M661 410.5L675 402L693 411.643L703 417L689.5 425.5" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 250_4" d="M693.5 412L680.5 420.5" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 251_4" d="M684.5 407L671.5 415.5" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        </g>
                        <g id="Group 10">
                        <path id="Vector 249_5" d="M696 428.5L710 420L728 429.643L738 435L724.5 443.5" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 250_5" d="M728.5 430L715.5 438.5" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 251_5" d="M719.5 425L706.5 433.5" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        </g>
                        <g id="Group 13">
                        <path id="Vector 249_6" d="M715 378.5L729 370L747 379.643L757 385L743.5 393.5" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 250_6" d="M747.5 380L734.5 388.5" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 251_6" d="M738.5 375L725.5 383.5" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        </g>
                        <g id="Group 14">
                        <path id="Vector 249_7" d="M750 396.5L764 388L782 397.643L792 403L778.5 411.5" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 250_7" d="M782.5 398L769.5 406.5" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 251_7" d="M773.5 393L760.5 401.5" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        </g>
                        <g id="Group 17">
                        <path id="Vector 249_8" d="M734.702 330.479L748.482 321.627L766.721 330.811L776.853 335.913L763.573 344.752" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 250_8" d="M767.23 331.155L754.449 339.982" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 251_8" d="M758.106 326.385L745.325 335.212" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        </g>
                        <g id="Group 18">
                        <path id="Vector 249_9" d="M770.147 347.587L783.927 338.735L802.165 347.919L812.298 353.021L799.018 361.86" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 250_9" d="M802.674 348.263L789.894 357.09" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 251_9" d="M793.551 343.493L780.77 352.319" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        </g>
                        <g id="Group 19">
                        <path id="Vector 249_10" d="M637.215 280.561L650.996 271.709L669.234 280.893L679.367 285.995L666.086 294.834" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 250_10" d="M669.743 281.237L656.962 290.064" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 251_10" d="M660.619 276.467L647.839 285.294" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        </g>
                        <g id="Group 5">
                        <path id="Vector 249_11" d="M703 454L689 462.5L671 452.857L661 447.5L674.5 439" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 250_11" d="M670.5 452.5L683.5 444" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 251_11" d="M679.5 457.5L692.5 449" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        </g>
                        <g id="Group 6">
                        <path id="Vector 249_12" d="M670 435L656 443.5L638 433.857L628 428.5L641.5 420" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 250_12" d="M637.5 433.5L650.5 425" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 251_12" d="M646.5 438.5L659.5 430" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        </g>
                        <g id="Group 11">
                        <path id="Vector 249_13" d="M758 422L744 430.5L726 420.857L716 415.5L729.5 407" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 250_13" d="M725.5 420.5L738.5 412" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 251_13" d="M734.5 425.5L747.5 417" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        </g>
                        <g id="Group 34">
                        <path id="Vector 249_14" d="M821.943 420.612L836.45 428.215L853.808 417.459L863.451 411.483L849.444 403.849" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 250_14" d="M854.285 417.071L840.776 409.405" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 251_14" d="M845.617 422.627L832.108 414.961" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        </g>
                        <g id="Group 35">
                        <path id="Vector 249_15" d="M790.943 439.612L805.45 447.215L822.808 436.459L832.451 430.483L818.444 422.849" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 250_15" d="M823.285 436.071L809.776 428.405" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 251_15" d="M814.617 441.627L801.108 433.961" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        </g>
                        <g id="Group 12">
                        <path id="Vector 249_16" d="M725 403L711 411.5L693 401.857L683 396.5L696.5 388" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 250_16" d="M692.5 401.5L705.5 393" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 251_16" d="M701.5 406.5L714.5 398" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        </g>
                        <g id="Group 15">
                        <path id="Vector 249_17" d="M811 392L797 400.5L779 390.857L769 385.5L782.5 377" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 250_17" d="M778.5 390.5L791.5 382" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 251_17" d="M787.5 395.5L800.5 387" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        </g>
                        <g id="Group 16">
                        <path id="Vector 249_18" d="M778 373L764 381.5L746 371.857L736 366.5L749.5 358" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 250_18" d="M745.5 371.5L758.5 363" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 251_18" d="M754.5 376.5L767.5 368" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        </g>
                        <g id="Group 21">
                        <path id="Vector 249_19" d="M713.5 338.5L698.757 346.632L680.418 337.65L670.23 332.659L684 324" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 250_19" d="M679.905 337.311L694 328.5" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 251_19" d="M689.081 341.981L703 333.5" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        </g>
                        <g id="Group 27">
                        <path id="Vector 249_20" d="M648.276 345.149L663.019 337.017L681.358 346L691.546 350.99L677.776 359.649" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 250_20" d="M681.87 346.339L667.776 355.149" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 251_20" d="M672.695 341.669L658.776 350.149" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        </g>
                        <g id="Group 22">
                        <path id="Vector 249_21" d="M679.5 319.861L665.088 328.844L646.75 319.861L636.562 314.871L651 306" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 250_21" d="M646.237 319.522L660 311" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 251_21" d="M655.413 324.192L669.5 315.5" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        </g>
                        <g id="Group 28">
                        <path id="Vector 249_22" d="M614.307 328L628.719 319.017L647.057 328L657.246 332.99L642.807 341.861" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 250_22" d="M647.57 328.339L633.807 336.861" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 251_22" d="M638.394 323.669L624.307 332.361" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        </g>
                        <g id="Group 25">
                        <path id="Vector 249_23" d="M646.241 303.878L631.83 312.86L613.491 303.878L603.303 298.887L617.741 290.016" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 250_23" d="M612.978 303.539L626.741 295.016" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 251_23" d="M622.154 308.209L636.241 299.516" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        </g>
                        <g id="Group 29">
                        <path id="Vector 249_24" d="M582.307 312L596.719 303.017L615.057 312L625.246 316.99L610.807 325.861" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 250_24" d="M615.57 312.339L601.807 320.861" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 251_24" d="M606.394 307.669L592.307 316.361" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        </g>
                        <g id="Group 26">
                        <path id="Vector 249_25" d="M613.241 287.878L598.83 296.86L580.491 287.878L570.303 282.887L584.741 274.016" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 250_25" d="M579.978 287.539L593.741 279.016" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 251_25" d="M589.154 292.209L603.241 283.516" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        </g>
                        <g id="Group 31">
                        <path id="Vector 249_26" d="M629.443 352.366L614.831 361.019L596.701 351.622L586.629 346.402L601.265 337.861" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 250_26" d="M596.196 351.272L610.149 343.064" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 251_26" d="M605.263 356.149L619.544 347.779" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        </g>
                        <g id="Group 32">
                        <path id="Vector 249_27" d="M596.556 335.631L581.944 344.284L563.814 334.888L553.742 329.667L568.378 321.127" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 250_27" d="M563.309 334.537L577.262 326.33" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 251_27" d="M572.376 339.414L586.657 331.044" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        </g>
                        <g id="Group 33">
                        <path id="Vector 249_28" d="M563.928 318.886L549.316 327.539L531.186 318.142L521.114 312.922L535.75 304.381" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 250_28" d="M530.681 317.792L544.634 309.584" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 251_28" d="M539.748 322.669L554.029 314.299" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        </g>
                        <g id="Group 30">
                        <path id="Vector 249_29" d="M550.307 296L564.719 287.017L583.057 296L593.246 300.99L578.807 309.861" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 250_29" d="M583.57 296.339L569.807 304.861" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 251_29" d="M574.394 291.669L560.307 300.361" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        </g>
                        <g id="Group 7">
                        <path id="Vector 249_30" d="M637 417L623 425.5L605 415.857L595 410.5L608.5 402" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 250_30" d="M604.5 415.5L617.5 407" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 251_30" d="M613.5 420.5L626.5 412" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        </g>
                        <g id="Group 4">
                        <path id="Vector 249_31" d="M641 459.5L655 451L673 460.643L683 466L669.5 474.5" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 250_31" d="M673.5 461L660.5 469.5" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 251_31" d="M664.5 456L651.5 464.5" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        </g>
                        </g>
                        <text id="18text-5" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="875.082" y="387.909">18</tspan></text>
                        <path id="esca-10" d="M366.168 444.581L404.811 423.289C405.135 423.111 405.531 423.126 405.84 423.327L407.877 424.656C408.513 425.07 408.473 426.015 407.804 426.374L368.957 447.254C368.67 447.408 368.327 447.413 368.036 447.268L366.203 446.351C365.482 445.991 365.462 444.97 366.168 444.581Z" fill="#ECBB82"/>
                        <path id="esca-9" d="M362.705 441.36L401.349 420.068C401.672 419.89 402.068 419.905 402.377 420.106L404.414 421.435C405.05 421.849 405.01 422.794 404.341 423.153L365.494 444.033C365.207 444.187 364.864 444.192 364.573 444.047L362.74 443.13C362.019 442.77 361.999 441.749 362.705 441.36Z" fill="#ECBB82"/>
                        <path id="esca-6" d="M346.608 450.15L354.874 445.779L356.674 447.058C357.282 447.489 357.22 448.41 356.561 448.758L348.5 453L346.579 451.902C345.894 451.511 345.911 450.519 346.608 450.15Z" fill="#ECBB82"/>
                        <path id="esca-7" d="M350.645 452.56L358.912 448.188L360.712 449.467C361.319 449.899 361.258 450.82 360.598 451.167L352.537 455.41L350.616 454.312C349.932 453.921 349.948 452.928 350.645 452.56Z" fill="#ECBB82"/>
                        <path id="Vector 204" d="M178 428.805V421.509C178 420.057 179.04 418.813 180.47 418.557L214.53 412.443C215.96 412.187 217 410.943 217 409.491V401.917C217 400.506 217.983 399.286 219.361 398.985L253.639 391.515C255.017 391.214 256 389.994 256 388.583V381.786C256 380.436 256.902 379.252 258.204 378.893L308.296 365.107C309.598 364.748 310.5 363.564 310.5 362.214V353.753C310.5 352.001 311.996 350.621 313.742 350.763L325.758 351.737C327.504 351.879 329 350.499 329 348.747V343.959C329 342.133 330.617 340.731 332.424 340.989L343.076 342.511C344.883 342.769 346.5 341.367 346.5 339.541V334.823C346.5 333.046 348.037 331.658 349.806 331.839L362.694 333.161C364.463 333.342 366 331.954 366 330.177V324.842C366 323.466 366.937 322.266 368.272 321.932L379.249 319.188C379.742 319.065 380.257 319.068 380.748 319.199L424.771 330.907C426.085 331.257 427 332.447 427 333.806V341.226C427 342.32 426.404 343.328 425.446 343.855L408.042 353.427C407.402 353.779 406.618 353.746 406.01 353.34C404.974 352.649 403.565 353.087 403.103 354.243L402.415 355.963C402.147 356.632 401.648 357.182 401.008 357.513L388.65 363.905C387.933 364.276 387.077 364.258 386.375 363.857C385.12 363.14 383.521 363.698 382.984 365.04L382.424 366.441C382.151 367.123 381.637 367.682 380.98 368.01L370.297 373.351C369.523 373.739 368.587 373.587 367.974 372.974C367.003 372.003 365.366 372.269 364.751 373.497L363.435 376.129C363.152 376.695 362.698 377.157 362.136 377.449L351.74 382.855C350.961 383.26 350.035 383.268 349.25 382.875C347.785 382.143 346.009 382.85 345.449 384.39L344.902 385.896C344.643 386.606 344.127 387.192 343.455 387.538L295.036 412.467C294.396 412.796 293.629 412.753 293.031 412.354C291.984 411.656 290.561 412.098 290.094 413.266L289.416 414.96C289.148 415.631 288.646 416.182 288.004 416.513L257.057 432.456C256.416 432.786 255.64 432.7 255.087 432.239C254.098 431.415 252.589 431.869 252.22 433.102L251.823 434.424C251.616 435.113 251.144 435.691 250.51 436.031L218.504 453.193C217.572 453.694 216.444 453.665 215.538 453.119L179.452 431.375C178.551 430.832 178 429.857 178 428.805Z" fill="#BE191C"/>
                        <path id="esca-13" d="M165.039 435.375L179.709 444.502C180.009 444.689 180.386 444.703 180.7 444.54L184.157 442.739L169.223 433.028C169.089 432.946 168.919 432.947 168.785 433.03L168.464 433.232L168.463 433.232L165.039 435.375Z" fill="#ECBB82"/>
                        <path id="esca-14" d="M169.836 432.498L184.506 441.625C184.807 441.812 185.183 441.826 185.497 441.663L188.954 439.861L174.02 430.151C173.886 430.068 173.716 430.069 173.582 430.153L173.261 430.354L173.26 430.355L169.836 432.498Z" fill="#ECBB82"/>
                        <path id="Vector 203" d="M421.5 303.232V297.289C421.5 295.937 422.404 294.752 423.708 294.396L461.292 284.104C462.596 283.748 463.5 282.563 463.5 281.211V276.162C463.5 274.871 464.326 273.725 465.551 273.316L510.949 258.184C512.174 257.775 513 256.629 513 255.338V250.74C513 249.188 514.183 247.892 515.728 247.752L526.772 246.748C528.317 246.608 529.5 245.312 529.5 243.76V242.315C529.5 240.54 531.032 239.153 532.799 239.33L541.201 240.17C542.968 240.347 544.5 238.96 544.5 237.185V234.5C544.5 232.843 545.843 231.5 547.5 231.5H557.5C559.157 231.5 560.5 230.157 560.5 228.5V224.601C560.5 223.34 561.289 222.213 562.475 221.782L565.028 220.853C565.658 220.624 566.346 220.613 566.983 220.821L609.93 234.825C611.165 235.228 612 236.379 612 237.677V244.719C612 245.817 611.4 246.827 610.437 247.353L602.009 251.95C601.411 252.276 600.669 252.169 600.187 251.687C599.397 250.897 598.055 251.188 597.662 252.234L597.281 253.25C597.099 253.735 596.755 254.142 596.306 254.401L584.833 261.019C584.332 261.308 583.705 261.254 583.261 260.884C582.363 260.136 581 260.775 581 261.944V262.152C581 262.677 580.721 263.163 580.268 263.427L570.133 269.339C569.465 269.729 568.619 269.619 568.073 269.073C567.149 268.149 565.572 268.568 565.229 269.828L564.796 271.414C564.607 272.108 564.144 272.696 563.514 273.042L555.753 277.311C554.975 277.739 554.03 277.731 553.259 277.291C552.018 276.582 550.438 277.03 549.754 278.284L548.454 280.668C548.159 281.209 547.703 281.647 547.15 281.92L504.666 302.924C503.922 303.291 503.059 303.335 502.283 303.043L502.147 302.993C500.66 302.435 498.997 303.132 498.352 304.583L497.944 305.5C497.657 306.146 497.152 306.67 496.517 306.979L459.903 324.817C459.024 325.245 457.991 325.218 457.135 324.744L423.046 305.857C422.092 305.328 421.5 304.323 421.5 303.232Z" fill="#BE191C"/>
                        <path id="Vector 220" d="M728 480.719V478.683C728 477.637 728.544 476.668 729.436 476.123L735.508 472.412C736.43 471.848 737.584 471.824 738.529 472.349L740.4 473.389C741.079 473.766 741.5 474.482 741.5 475.258V475.633C741.5 476.99 742.888 477.905 744.135 477.371C744.68 477.137 745.303 477.173 745.817 477.467L747.486 478.421C748.134 478.791 748.602 479.409 748.783 480.133C749.17 481.68 750.791 482.57 752.304 482.065L752.797 481.901C753.566 481.645 754.406 481.711 755.126 482.084L765.748 487.592C766.811 488.143 767.445 489.274 767.359 490.469L767.108 493.982C767.04 494.936 766.521 495.801 765.711 496.309L743.059 510.522C742.103 511.122 740.89 511.134 739.921 510.553L730.457 504.874C729.553 504.332 729 503.355 729 502.301V499.699C729 498.645 729.553 497.668 730.457 497.126L735.536 494.079C737.145 493.113 737.2 490.8 735.638 489.759L735.179 489.453C734.755 489.17 734.5 488.694 734.5 488.183V485.58C734.5 485.181 734.018 484.982 733.737 485.263C733.596 485.404 733.38 485.435 733.206 485.34L729.563 483.353C728.6 482.827 728 481.817 728 480.719Z" fill="#0896BB"/>
                        <path id="Vector 221" d="M758.5 455.2V450.938C758.5 449.758 759.191 448.688 760.267 448.203L782.805 438.039C783.567 437.695 784.438 437.685 785.207 438.011L795.169 442.225C796.279 442.695 797 443.783 797 444.988V449.295C797 450.352 796.444 451.331 795.535 451.873L774.954 464.134C774.051 464.671 772.934 464.698 772.007 464.204L760.088 457.847C759.111 457.326 758.5 456.308 758.5 455.2Z" fill="#1F234D"/>
                        <path id="Vector 222" d="M834 375.129V372.041C834 370.575 835.06 369.323 836.507 369.082L845.086 367.652C845.681 367.553 846.293 367.636 846.841 367.89L864.761 376.194C865.822 376.686 866.5 377.748 866.5 378.916V382.337C866.5 383.372 865.967 384.333 865.09 384.881L859.913 388.117C859.034 388.666 857.934 388.723 857.003 388.267L835.68 377.823C834.652 377.319 834 376.274 834 375.129Z" fill="#1F234D"/>
                        <path id="man-8"className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('man-8', 4, 100)} onMouseEnter={() => setTenant('man-8')} d="M864.987 380.747L859.442 384.122C858.547 384.667 857.432 384.705 856.501 384.223L835.838 373.509C833.739 372.42 833.665 369.445 835.707 368.254L841.561 364.84C842.456 364.317 843.557 364.294 844.473 364.778L864.828 375.532C866.887 376.62 866.976 379.536 864.987 380.747Z" fill="#343B79"/>
                        <g id="27" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('27', 4, 100)} onMouseEnter={() => setTenant('27')}>
                        <path id="27s" d="M751.994 481.494L730.871 495.444C729.054 496.643 729.08 499.317 730.919 500.482L740.383 506.476C741.369 507.1 742.628 507.096 743.61 506.465L765.745 492.235C767.662 491.003 767.56 488.169 765.56 487.078L755.084 481.364C754.109 480.832 752.921 480.883 751.994 481.494Z" fill="#0AADD7"/>
                        <path id="27s_2" d="M736.851 486.951L735.512 486.098C734.313 485.335 734.27 483.601 735.43 482.779L743.243 477.245C744.293 476.501 745.701 476.51 746.741 477.266L748.178 478.311C749.304 479.13 749.269 480.82 748.111 481.593L740.126 486.916C739.138 487.575 737.853 487.589 736.851 486.951Z" fill="#0AADD7"/>
                        <path id="27s_3" d="M739.611 472.57L737.229 471.08C736.185 470.428 734.849 470.479 733.859 471.209L729.737 474.246C727.984 475.538 728.148 478.208 730.046 479.276L732.374 480.586C733.37 481.146 734.597 481.092 735.539 480.447L739.715 477.589C741.501 476.368 741.446 473.716 739.611 472.57Z" fill="#0AADD7"/>
                        <text id="27text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="742.73" y="496.909">27</tspan></text>
                        </g>
                        <path id="Vector 219" d="M504 439.759V438.562C504 437.583 504.478 436.666 505.28 436.104L507.603 434.478C508.469 433.871 509.591 433.766 510.555 434.2L517.786 437.454C518.525 437.786 519 438.521 519 439.331C519 440.822 520.534 441.818 521.895 441.213L522.422 440.979C523.103 440.677 523.885 440.702 524.544 441.049L531.441 444.679C532.4 445.184 533 446.178 533 447.262C533 449.161 534.784 450.554 536.626 450.093L537.99 449.752C538.644 449.589 539.334 449.65 539.949 449.927L547.505 453.327C548.415 453.737 549 454.642 549 455.639V456.167C549 457.587 550.359 458.612 551.724 458.222C552.224 458.079 552.759 458.123 553.229 458.347L561.733 462.397C562.507 462.765 563 463.546 563 464.403V464.584C563 466.153 564.652 467.174 566.056 466.472C566.65 466.175 567.35 466.175 567.944 466.472L575.633 470.317C576.471 470.735 577 471.591 577 472.528C577 473.893 578.107 475 579.472 475H581.422C581.804 475 582.182 475.073 582.536 475.215L590.418 478.367C591.373 478.749 592 479.675 592 480.704C592 482.364 593.578 483.57 595.18 483.133L596.394 482.802C597.106 482.607 597.865 482.682 598.525 483.013L604.842 486.171C605.858 486.679 606.5 487.718 606.5 488.854V488.968C606.5 490.977 608.437 492.419 610.362 491.841L610.435 491.819C611.122 491.613 611.86 491.66 612.516 491.951L619.051 494.856C619.957 495.259 620.606 496.084 620.784 497.061L621.147 499.061C621.361 500.238 620.855 501.43 619.86 502.093L617.032 503.978C616.092 504.605 614.88 504.651 613.896 504.096L517.611 449.844C517.221 449.624 516.939 449.254 516.83 448.82L516.427 447.208C516.256 446.523 515.367 446.344 514.944 446.908C514.69 447.246 514.225 447.343 513.858 447.133L505.512 442.364C504.577 441.83 504 440.836 504 439.759Z" fill="#1F234D"/>
                        <path id="man-9" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('man-9', 4, 100)} onMouseEnter={() => setTenant('man-9')} d="M619.242 499.255L616.57 500.984C615.609 501.606 614.378 501.627 613.397 501.038L606.7 497.02C604.779 495.867 604.754 493.091 606.654 491.904L609.022 490.424C609.936 489.853 611.086 489.815 612.034 490.326L619.034 494.095C621.043 495.177 621.157 498.016 619.242 499.255Z" fill="#343B79"/>
                        <path id="man-10" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('man-10', 4, 100)} onMouseEnter={() => setTenant('man-10')} d="M604.742 490.755L602.07 492.484C601.109 493.106 599.878 493.127 598.897 492.538L592.2 488.52C590.279 487.367 590.254 484.591 592.154 483.404L594.522 481.924C595.436 481.353 596.586 481.315 597.534 481.826L604.534 485.595C606.543 486.677 606.657 489.516 604.742 490.755Z" fill="#343B79"/>
                        <path id="man-11" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('man-11', 4, 100)} onMouseEnter={() => setTenant('man-11')} d="M589.845 482.77L587.973 484.018C587.064 484.624 585.898 484.688 584.928 484.185L577.668 480.42C575.606 479.351 575.489 476.444 577.459 475.213L579.522 473.924C580.436 473.353 581.586 473.315 582.534 473.826L589.603 477.632C591.596 478.705 591.728 481.515 589.845 482.77Z" fill="#343B79"/>
                        <path id="man-12" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('man-12', 4, 100)} onMouseEnter={() => setTenant('man-12')} d="M575.845 474.77L573.973 476.018C573.064 476.624 571.898 476.688 570.928 476.185L563.668 472.42C561.606 471.351 561.489 468.444 563.459 467.213L565.522 465.924C566.436 465.353 567.586 465.315 568.534 465.826L575.603 469.632C577.596 470.705 577.728 473.515 575.845 474.77Z" fill="#343B79"/>
                        <path id="man-13"className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('man-13', 4, 100)} onMouseEnter={() => setTenant('man-13')} d="M561.845 466.77L559.973 468.018C559.064 468.624 557.898 468.688 556.928 468.185L549.668 464.42C547.606 463.351 547.489 460.444 549.459 459.213L551.522 457.924C552.436 457.353 553.586 457.315 554.534 457.826L561.603 461.632C563.596 462.705 563.728 465.515 561.845 466.77Z" fill="#343B79"/>
                        <path id="man-14" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('man-14', 4, 100)} onMouseEnter={() => setTenant('man-14')} d="M546.845 457.77L544.973 459.018C544.064 459.624 542.898 459.688 541.928 459.185L534.668 455.42C532.606 454.351 532.489 451.444 534.459 450.213L536.522 448.924C537.436 448.353 538.586 448.315 539.534 448.826L546.603 452.632C548.596 453.705 548.728 456.515 546.845 457.77Z" fill="#343B79"/>
                        <path id="man-15" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('man-15', 4, 100)} onMouseEnter={() => setTenant('man-15')} d="M531.845 449.77L529.973 451.018C529.064 451.624 527.898 451.688 526.928 451.185L519.668 447.42C517.606 446.351 517.489 443.444 519.459 442.213L521.522 440.924C522.436 440.353 523.586 440.315 524.534 440.826L531.603 444.632C533.596 445.705 533.728 448.515 531.845 449.77Z" fill="#343B79"/>
                        <path id="man-16"className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('man-16', 4, 100)} onMouseEnter={() => setTenant('man-16')} d="M517.845 441.77L515.973 443.018C515.064 443.624 513.898 443.688 512.928 443.185L505.668 439.42C503.606 438.351 503.489 435.444 505.459 434.213L507.522 432.924C508.436 432.353 509.586 432.315 510.534 432.826L517.603 436.632C519.596 437.705 519.728 440.515 517.845 441.77Z" fill="#343B79"/>
                        <path id="Vector 224" d="M414.5 493.235V489.194C414.5 487.887 415.345 486.731 416.59 486.335L445.41 477.165C446.655 476.769 447.5 475.613 447.5 474.306V470.743C447.5 469.413 448.375 468.242 449.651 467.865L475.849 460.135C477.125 459.758 478 458.587 478 457.257V453.546C478 452.312 478.756 451.204 479.905 450.753L502.694 441.816C503.221 441.61 503.795 441.556 504.351 441.662L511.561 443.035C512.976 443.305 514 444.542 514 445.983V451.819C514 452.863 513.457 453.832 512.566 454.378L490.559 467.852C489.938 468.232 489.137 468.137 488.622 467.622C487.84 466.84 486.517 467.086 486.068 468.096L485.361 469.688C485.126 470.216 484.732 470.658 484.234 470.951L460.45 484.941C459.857 485.29 459.129 485.315 458.515 485.007C457.438 484.469 456.132 484.982 455.709 486.109L455.379 486.989C455.135 487.641 454.662 488.182 454.048 488.511L429.444 501.725C428.544 502.208 427.46 502.2 426.567 501.704L416.043 495.857C415.091 495.328 414.5 494.324 414.5 493.235Z" fill="#81B9A5"/>
                        <g id="26"className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('26', 4, 100)} onMouseEnter={() => setTenant('26')}>
                        <path id="26s" d="M486.989 460.049L479.258 455.181C477.336 453.971 477.404 451.145 479.384 450.029L501.043 437.821C501.949 437.311 503.054 437.306 503.965 437.808L512.28 442.396C514.339 443.532 514.35 446.488 512.3 447.639L490.057 460.126C489.097 460.665 487.92 460.635 486.989 460.049Z" fill="#91D2BB"/>
                        <text id="26text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="491.504" y="451.909">26</tspan></text>
                        </g>
                        <g id="25"className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('25', 4, 100)} onMouseEnter={() => setTenant('25')}>
                        <path id="25s" d="M449.7 466.589L470.918 454.408C471.89 453.85 473.092 453.88 474.034 454.486L482.312 459.808C484.213 461.03 484.131 463.835 482.163 464.945L460.605 477.096C459.62 477.65 458.408 477.605 457.467 476.978L449.53 471.687C447.676 470.451 447.769 467.698 449.7 466.589Z" fill="#91D2BB"/>
                        <text id="25text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="460.566" y="468.909">25</tspan></text>
                        </g>
                        <g id="24"className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('24', 4, 100)} onMouseEnter={() => setTenant('24')}>
                        <path id="24s" d="M452.92 476.827L444.019 470.995C443.085 470.383 441.889 470.341 440.914 470.884L416.481 484.502C414.477 485.62 414.417 488.482 416.374 489.681L425.98 495.568C426.917 496.142 428.093 496.158 429.045 495.61L452.774 481.935C454.711 480.819 454.79 478.052 452.92 476.827Z" fill="#91D2BB"/>
                        <text id="24text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="429.492" y="485.909">24</tspan></text>
                        </g>
                        <g id="01"className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('01', 4, 100)} onMouseEnter={() => setTenant('01')}>
                        <path id="01s-1" d="M562.863 219.798L570.124 215.764C570.986 215.286 572.027 215.261 572.911 215.697L610.765 234.412C612.954 235.494 613.002 238.599 610.847 239.748L602.398 244.254C601.523 244.721 600.474 244.725 599.596 244.265L562.929 225.079C560.813 223.972 560.776 220.958 562.863 219.798Z" fill="#DF2327"/>
                        <path id="01s-2" d="M546.714 228.893L555.127 224.687C555.989 224.256 557.006 224.265 557.86 224.713L593.558 243.411C595.675 244.52 595.708 247.54 593.615 248.695L585.42 253.217C584.534 253.705 583.461 253.715 582.567 253.241L546.652 234.228C544.496 233.086 544.532 229.984 546.714 228.893Z" fill="#DF2327"/>
                        <path id="01s-3" d="M531.053 236.88L538.079 233.237C538.967 232.776 540.026 232.789 540.903 233.27L575.756 252.397C577.821 253.53 577.834 256.493 575.778 257.644L569.434 261.197C568.541 261.697 567.454 261.707 566.551 261.224L531.017 242.188C528.89 241.048 528.91 237.991 531.053 236.88Z" fill="#DF2327"/>
                        <path id="01s-4" d="M514.71 245.305L522.582 241.234C523.468 240.775 524.525 240.788 525.401 241.267L560.974 260.748C563.098 261.911 563.04 264.98 560.875 266.062L554.349 269.325C553.5 269.75 552.501 269.747 551.654 269.319L514.734 250.647C512.55 249.543 512.536 246.43 514.71 245.305Z" fill="#DF2327"/>
                        <text id="01text-1" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="583" y="231.909">01</tspan></text>
                        <text id="01text-2" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="567" y="240.909">01</tspan></text>
                        <text id="01text-3" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="551" y="249.909">01</tspan></text>
                        <text id="01text-4" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="534" y="257.909">01</tspan></text>
                        </g>
                        <g id="02"className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('02', 4, 100)} onMouseEnter={() => setTenant('02')}>
                        <path id="02s" d="M465.668 270.943L506.615 250.685C507.484 250.255 508.507 250.272 509.362 250.73L545.023 269.834C547.142 270.969 547.131 274.011 545.004 275.132L504.924 296.25C504.035 296.718 502.97 296.71 502.087 296.228L465.559 276.265C463.429 275.101 463.492 272.02 465.668 270.943Z" fill="#DF2327"/>
                        <text id="02text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="500" y="275.909">02</tspan></text>
                        </g>
                        <g id="03"className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('03', 4, 100)} onMouseEnter={() => setTenant('03')}>
                        <path id="03s" d="M423.169 291.883L456.081 275.218C456.969 274.769 458.021 274.789 458.891 275.271L494.05 294.757C496.155 295.923 496.099 298.97 493.952 300.057L461.886 316.298C461.017 316.738 459.988 316.729 459.127 316.273L423.12 297.211C420.97 296.072 420.998 292.982 423.169 291.883Z" fill="#DF2327"/>
                        <text id="03text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="453.34" y="296.909">03</tspan></text>
                        </g>
                        <g id="04"className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('04', 4, 100)} onMouseEnter={() => setTenant('04')}>
                        <path id="04s" d="M367.105 319.947L385.605 310.698C386.479 310.26 387.512 310.277 388.372 310.741L425.521 330.81C427.638 331.954 427.614 335.001 425.479 336.111L406.926 345.758C406.035 346.222 404.972 346.209 404.093 345.724L366.998 325.257C364.882 324.09 364.944 321.028 367.105 319.947Z" fill="#DF2327"/>
                        <text id="4text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="390.301" y="329.909">04</tspan></text>
                        </g>
                        <g id="05"className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('05', 4, 100)} onMouseEnter={() => setTenant('05')}>
                        <path id="05s" d="M348.718 329.054L358.124 324.645C358.989 324.24 359.995 324.27 360.834 324.728L398.533 345.291C400.646 346.443 400.609 349.489 398.47 350.591L388.452 355.752C387.547 356.218 386.467 356.193 385.584 355.686L348.496 334.372C346.392 333.162 346.52 330.084 348.718 329.054Z" fill="#DF2327"/>
                        <text id="5text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="368.438" y="342.909">05</tspan></text>
                        </g>
                        <g id="06"className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('06', 4, 100)} onMouseEnter={() => setTenant('06')}>
                        <path id="06s" d="M331.118 338.029L339.082 334.184C339.97 333.756 341.012 333.791 341.869 334.278L379.449 355.63C381.567 356.833 381.443 359.927 379.235 360.957L370.912 364.841C370.027 365.254 368.996 365.21 368.149 364.723L330.927 343.332C328.837 342.13 328.946 339.078 331.118 338.029Z" fill="#DF2327"/>
                        <text id="6text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="349.375" y="350.909">06</tspan></text>
                        </g>
                        <g id="07"className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('07', 4, 100)} onMouseEnter={() => setTenant('07')}>
                        <path id="07s" d="M312.496 348.083L321.546 343.703C322.454 343.264 323.521 343.31 324.388 343.826L360.428 365.279C362.436 366.474 362.367 369.404 360.306 370.504L351.499 375.201C350.569 375.697 349.447 375.668 348.543 375.126L312.259 353.356C310.214 352.129 310.349 349.121 312.496 348.083Z" fill="#DF2327"/>
                        <text id="7text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="330.68" y="362.909">07</tspan></text>
                        </g>
                        <g id="08"className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('08', 4, 100)} onMouseEnter={() => setTenant('08')}>
                        <path id="08s" d="M257.264 376.549L302.515 353.264C303.439 352.789 304.541 352.825 305.432 353.359L341.856 375.214C343.877 376.426 343.775 379.389 341.675 380.459L295.99 403.741C295.064 404.213 293.959 404.172 293.071 403.632L257.08 381.781C255.076 380.564 255.179 377.621 257.264 376.549Z" fill="#DF2327"/>
                        <text id="8text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="297.391" y="379.909">08</tspan></text>
                        </g>
                        <g id="09"className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('09', 4, 100)} onMouseEnter={() => setTenant('09')}>
                        <path id="09s" d="M219.176 396.528L247.98 381.303C248.922 380.806 250.056 380.844 250.961 381.405L286.989 403.708C288.973 404.936 288.857 407.859 286.782 408.926L257.993 423.732C257.066 424.209 255.956 424.17 255.064 423.628L219.021 401.745C217.03 400.536 217.116 397.617 219.176 396.528Z" fill="#DF2327"/>
                        <text id="9text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="248.375" y="403.909">09</tspan></text>
                        </g>
                        <g id="10"className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('10', 4, 100)} onMouseEnter={() => setTenant('10')}>
                        <path id="10s" d="M179.714 416.643L210.509 401.246C211.436 400.782 212.537 400.83 213.421 401.373L249.099 423.295C251.06 424.501 250.989 427.376 248.97 428.482L218.564 445.143C217.6 445.671 216.424 445.63 215.5 445.036L179.433 421.85C177.477 420.592 177.634 417.683 179.714 416.643Z" fill="#DF2327"/>
                        <text id="10text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="210.027" y="425.909">10</tspan></text>
                        </g>
                        <path id="Vector 208" d="M608.5 363.314V358.75C608.5 357.669 607.918 356.671 606.976 356.139L598.445 351.317C597.546 350.809 596.449 350.799 595.54 351.291L586.289 356.302C585.476 356.742 584.911 357.534 584.759 358.446L584.313 361.123C584.122 362.269 584.609 363.422 585.564 364.083L595.397 370.891C596.372 371.565 597.652 371.603 598.665 370.987L607.06 365.877C607.954 365.332 608.5 364.361 608.5 363.314Z" fill="#1F234D"/>
                        <path id="Vector 205" d="M229.5 451.877V449.024C229.5 447.801 230.243 446.7 231.377 446.242L254.717 436.816C255.229 436.609 255.788 436.548 256.333 436.639L268.148 438.608C269.525 438.837 270.562 439.987 270.649 441.38L270.879 445.062C270.953 446.241 270.327 447.354 269.282 447.904L244.062 461.178C243.098 461.685 241.935 461.63 241.023 461.034L230.858 454.388C230.011 453.834 229.5 452.89 229.5 451.877Z" fill="#1F234D"/>
                        <path id="toscaS" d="M248 462.844V456.701C248 455.391 248.85 454.232 250.099 453.839L269.633 447.689C271.923 446.969 272.481 443.985 270.607 442.485L263.626 436.901C262.914 436.331 262.5 435.469 262.5 434.558V427.378C262.5 426.229 263.156 425.181 264.19 424.68L504.278 308.094C505.055 307.716 505.956 307.692 506.752 308.027L589.246 342.761C590.317 343.212 591.031 344.241 591.079 345.401L591.412 353.378C591.465 354.65 590.71 355.816 589.528 356.289L588.464 356.715C585.949 357.72 585.949 361.28 588.464 362.285L589.614 362.746C590.753 363.201 591.5 364.304 591.5 365.531V372.764C591.5 373.838 590.926 374.83 589.995 375.365L572.958 385.162C572.052 385.682 570.941 385.695 570.024 385.194L518.928 357.28C518.037 356.793 516.961 356.79 516.068 357.271L342.495 450.695C341.568 451.194 340.446 451.171 339.54 450.632L323.952 441.364C323.051 440.827 321.934 440.801 321.009 441.295L263.036 472.182C262.086 472.688 260.938 472.646 260.027 472.073L249.402 465.382C248.529 464.833 248 463.875 248 462.844Z" fill="#81B9A5"/>
                        <path id="man2" d="M587.379 355.405L595.048 350.86C595.95 350.326 597.065 350.301 597.989 350.794L606.853 355.522C608.905 356.616 608.986 359.527 606.998 360.733L599.03 365.571C598.087 366.143 596.907 366.152 595.956 365.595L587.391 360.574C585.419 359.418 585.413 356.57 587.379 355.405Z" fill="#343B79"/>
                        <path id="man1" d="M254.562 431.793L231.286 444.635C229.325 445.717 229.198 448.489 231.053 449.746L240.982 456.472C241.914 457.103 243.121 457.16 244.107 456.619L268.679 443.144C270.761 442.002 270.754 439.009 268.668 437.877L257.443 431.783C256.544 431.295 255.458 431.299 254.562 431.793Z" fill="#343B79"/>
                        <path id="Vector 190" d="M641.847 518.195L724.468 468.818C724.794 468.623 725.202 468.63 725.522 468.835L730.73 472.183C731.332 472.571 731.344 473.447 730.752 473.851L722.351 479.579C721.733 480 721.779 480.925 722.435 481.283L730.498 485.681C731.17 486.047 731.198 487.001 730.549 487.407L729.418 488.114C728.777 488.514 728.796 489.455 729.452 489.83L733.611 492.207C734.253 492.573 734.289 493.485 733.679 493.901L724.522 500.144C724.203 500.362 723.788 500.376 723.455 500.182L712.515 493.8C712.198 493.615 711.805 493.619 711.491 493.81L655.049 528.166C654.715 528.369 654.292 528.359 653.968 528.139L641.798 519.881C641.193 519.47 641.219 518.57 641.847 518.195Z" fill="#2E2D2D"/>
                        <path id="man7" d="M771.946 459.612L760.434 453.034C758.446 451.898 758.412 449.044 760.371 447.861L781.029 435.388C781.94 434.838 783.075 434.812 784.011 435.32L795.47 441.541C797.492 442.638 797.577 445.509 795.625 446.724L775.02 459.554C774.084 460.137 772.903 460.159 771.946 459.612Z" fill="#343B79"/>
                        <path id="Vector 223" d="M863.5 390.146V387.904C863.5 386.742 864.171 385.684 865.223 385.189L879.293 378.568C880.061 378.206 880.947 378.187 881.73 378.516L894.16 383.728C895.275 384.196 896 385.286 896 386.495V388.865C896 389.884 895.483 390.834 894.626 391.386L881.938 399.572C881.047 400.147 879.918 400.209 878.97 399.735L865.158 392.829C864.142 392.321 863.5 391.282 863.5 390.146Z" fill="#3BA860"/>
                        <path id="18s-5" d="M877.574 376.348L865.054 383.792C863.05 384.984 863.112 387.907 865.165 389.012L878.47 396.176C879.416 396.686 880.563 396.65 881.476 396.083L893.998 388.298C895.979 387.067 895.859 384.145 893.783 383.081L880.476 376.257C879.558 375.786 878.461 375.82 877.574 376.348Z" fill="#46C973"/>
                        <g id="29"className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('29', 4, 100)} onMouseEnter={() => setTenant('29')}>
                        <path id="29s" d="M259.53 463.581L249.288 457.18C247.356 455.973 247.422 453.138 249.407 452.021L272.606 438.972C274.588 437.857 274.657 435.027 272.732 433.817L263.935 428.288C261.972 427.054 262.091 424.154 264.149 423.086L503.621 298.716C504.486 298.267 505.515 298.266 506.381 298.714L589.028 341.43C591.155 342.53 591.201 345.555 589.108 346.718L580.606 351.441C578.573 352.57 578.543 355.483 580.551 356.655L589.363 361.795C591.39 362.978 591.336 365.925 589.267 367.032L573.935 375.232C573.04 375.711 571.963 375.705 571.074 375.215L519.422 346.783C518.535 346.294 517.461 346.287 516.567 346.763L340.055 440.673C339.095 441.183 337.934 441.135 337.02 440.545L324.481 432.455C323.567 431.865 322.405 431.817 321.445 432.328L262.53 463.686C261.583 464.19 260.44 464.15 259.53 463.581Z" fill="#91D2BB"/>
                        <text id="29text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="412.504" y="373.909">29</tspan></text>
                        </g>
                        <path id="toscaS-2" d="M358 462V452L416 426.5L405.5 420.5V409.5L500 382.5L567 376V387L395.5 483.5L358 462Z" fill="#81B9A5"/>
                        <g id="28"className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('29', 4, 100)} onMouseEnter={() => setTenant('29')}>
                        <path id="28s" d="M396.994 474.159L565.771 379.162C567.827 378.005 567.804 375.037 565.731 373.911L519.412 348.766C518.53 348.288 517.467 348.282 516.58 348.75L407.042 406.601C405.012 407.674 404.889 410.536 406.821 411.778L412.243 415.263C414.16 416.495 414.057 419.331 412.055 420.421L359.685 448.948C357.63 450.067 357.591 453.003 359.614 454.177L394.017 474.14C394.936 474.673 396.068 474.68 396.994 474.159Z" fill="#91D2BB"/>
                        <text id="28text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="477.52" y="398.909">28</tspan></text>
                        </g>
                        <path id="orangeS" d="M141 467.291V460.554C141 459.58 141.474 458.666 142.27 458.104L148.592 453.641C149.178 453.227 149.892 453.037 150.606 453.105L238.582 461.46C238.859 461.487 239.132 461.552 239.391 461.653L248.593 465.254C249.743 465.704 250.5 466.813 250.5 468.048V475.146C250.5 476.282 249.858 477.321 248.842 477.829L239.878 482.311C238.002 483.249 238.283 486.009 240.309 486.549C241.306 486.815 242 487.718 242 488.75V492.862C242 494.142 242.811 495.28 244.02 495.698L267.48 503.802C268.689 504.22 269.5 505.358 269.5 506.638V510.587C269.5 511.754 270.176 512.815 271.234 513.307L318.344 535.23C319.361 535.703 320.029 536.704 320.076 537.825L320.432 546.361C320.473 547.358 319.926 548.287 319.033 548.733C317.165 549.667 317.165 552.333 319.033 553.267L350.842 569.171C351.858 569.679 352.5 570.718 352.5 571.854V576.481C352.5 577.701 353.24 578.801 354.371 579.26L382.629 590.74C383.76 591.199 384.5 592.299 384.5 593.519V599.806C384.5 600.857 383.95 601.832 383.049 602.375L352.06 621.06C351.101 621.638 349.901 621.634 348.946 621.05L324.571 606.155C323.887 605.737 323.405 605.056 323.237 604.272L322.678 601.664C322.4 600.367 320.757 599.95 319.894 600.957C319.38 601.557 318.504 601.693 317.832 601.276L280.705 578.247C279.942 577.774 279.431 576.984 279.313 576.094L279.003 573.772C278.788 572.158 276.861 571.434 275.636 572.506C274.961 573.097 273.979 573.177 273.217 572.705L229.535 545.641C228.871 545.23 228.394 544.576 228.205 543.819L227.72 541.879C227.336 540.345 225.702 539.487 224.222 540.042C223.451 540.331 222.591 540.245 221.893 539.81L144.914 491.881C144.035 491.333 143.5 490.37 143.5 489.334V483.101C143.5 481.84 144.289 480.713 145.475 480.282L148.54 479.167C150.92 478.302 151.223 475.058 149.044 473.767L142.471 469.871C141.559 469.331 141 468.35 141 467.291Z" fill="#DC721C"/>
                        <g id="11"className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('11', 4, 100)} onMouseEnter={() => setTenant('11')}>
                        <path id="11s" d="M142.55 455.588L177.946 436.824C178.906 436.315 180.065 436.365 180.978 436.953L209.062 455.072C209.953 455.647 211.082 455.709 212.03 455.235L222.979 449.761C223.922 449.289 225.044 449.347 225.934 449.915L249.083 464.682C251.038 465.929 250.899 468.828 248.833 469.883L234.963 476.966C232.835 478.052 232.77 481.069 234.848 482.247L240.276 485.323C242.329 486.486 242.297 489.456 240.219 490.574L214.05 504.665C213.093 505.181 211.932 505.138 211.015 504.553L142.342 460.768C140.403 459.532 140.518 456.665 142.55 455.588Z" fill="#F47F20"/>
                        <text id="11text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="191.719" y="470.909">11</tspan></text>
                        </g>
                        <g id="12"className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('12', 4, 100)} onMouseEnter={() => setTenant('12')}>
                        <path id="12s" d="M145.459 477.676L155.021 473.193C155.943 472.761 157.021 472.826 157.885 473.365L211.022 506.576C211.936 507.147 213.086 507.185 214.034 506.674L243.531 490.791C244.444 490.299 245.547 490.314 246.447 490.831L267.398 502.858C269.422 504.02 269.403 506.946 267.364 508.081L225.057 531.633C224.097 532.168 222.922 532.135 221.994 531.547L145.128 482.927C143.126 481.661 143.313 478.681 145.459 477.676Z" fill="#F47F20"/>
                        <text id="12text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="228.156" y="511.909">12</tspan></text>
                        </g>
                        <g id="13"className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('13', 4, 100)} onMouseEnter={() => setTenant('13')}>
                        <path id="13s" d="M273.479 563.538L230.299 536.22C228.368 534.998 228.457 532.153 230.46 531.054L271.003 508.821C271.931 508.312 273.059 508.33 273.97 508.867L318.039 534.868C320.025 536.04 320.001 538.92 317.997 540.06L276.565 563.61C275.602 564.158 274.415 564.13 273.479 563.538Z" fill="#F47F20"/>
                        <text id="13text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="269.031" y="538.909">13</tspan></text>
                        </g>
                        <g id="14"className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('14', 4, 100)} onMouseEnter={() => setTenant('14')}>
                        <path id="14s" d="M282.369 563.538L311.946 546.875C312.904 546.336 314.08 546.363 315.011 546.947L350.695 569.303C352.63 570.515 352.555 573.358 350.559 574.467L320.558 591.134C319.598 591.668 318.423 591.634 317.495 591.045L282.235 568.686C280.32 567.471 280.393 564.652 282.369 563.538Z" fill="#F47F20"/>
                        <text id="14text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="311.992" y="571.909">14</tspan></text>
                        </g>
                        <g id="15"className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('15', 4, 100)} onMouseEnter={() => setTenant('15')}>
                        <path id="15s" d="M324.954 591.025L354.977 574.346C355.919 573.823 357.069 573.845 357.99 574.404L382.637 589.353C384.593 590.54 384.554 593.393 382.565 594.525L352.553 611.615C351.596 612.16 350.418 612.137 349.483 611.555L324.825 596.194C322.884 594.985 322.955 592.136 324.954 591.025Z" fill="#F47F20"/>
                        <text id="15text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="349.129" y="594.909">15</tspan></text>
                        </g>
                        <path id="yellowS" d="M355.5 623.84V616.079C355.5 614.828 356.276 613.709 357.447 613.27L366.691 609.803C367.22 609.605 367.793 609.56 368.346 609.673L408.035 617.802C408.662 617.931 409.313 617.855 409.894 617.587L453.385 597.515C454.1 597.185 454.915 597.149 455.656 597.415L471.906 603.248C473.15 603.695 473.955 604.902 473.889 606.222L473.58 612.408C473.53 613.403 472.989 614.309 472.136 614.825L457.075 623.931C455.076 625.14 455.41 628.137 457.626 628.875C458.745 629.248 459.5 630.296 459.5 631.475V638.313C459.5 639.36 458.953 640.332 458.058 640.876L435.578 654.541C434.61 655.129 433.394 655.122 432.433 654.523L401.17 635.041C400.156 634.409 398.864 634.439 397.88 635.117L386.625 642.879C385.639 643.559 384.343 643.588 383.328 642.951L356.906 626.382C356.031 625.833 355.5 624.873 355.5 623.84Z" fill="#D9B50C"/>
                        <path id="17s" d="M458.5 591.324V586.346C458.5 585.214 459.138 584.178 460.148 583.668L510.589 558.212C511.472 557.766 512.518 557.785 513.385 558.261L545.652 575.985C546.761 576.594 547.368 577.833 547.171 579.082L546.213 585.154C546.077 586.009 545.579 586.765 544.846 587.226L499.08 616.006C498.113 616.615 496.884 616.621 495.911 616.022L459.928 593.879C459.04 593.333 458.5 592.365 458.5 591.324Z" fill="#D9B50C"/>
                        <g id="16"className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('16', 4, 100)} onMouseEnter={() => setTenant('16')}>
                        <path id="16s" d="M357.294 612.555L387.46 595.377C388.41 594.836 389.579 594.854 390.511 595.425L411.974 608.566C412.914 609.141 414.094 609.155 415.047 608.601L448.9 588.93C449.881 588.36 451.099 588.392 452.049 589.013L472.573 602.432C474.406 603.631 474.378 606.326 472.521 607.487L452.479 620.013C450.622 621.174 450.594 623.869 452.427 625.068L457.643 628.478C459.458 629.665 459.453 632.327 457.633 633.506L436.118 647.451C435.133 648.09 433.864 648.095 432.874 647.463L401.635 627.543C400.64 626.908 399.365 626.916 398.378 627.563L387.133 634.93C386.14 635.581 384.857 635.585 383.861 634.941L357.15 617.682C355.26 616.46 355.338 613.669 357.294 612.555Z" fill="#F1CA11"/>
                        <text id="16text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="410.066" y="625.909">16</tspan></text>
                        </g>
                        <g id="17"className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('17', 4, 100)} onMouseEnter={() => setTenant('17')}>
                        <path id="17s_2" d="M495.42 609.498L460.183 587.152C458.279 585.945 458.337 583.149 460.288 582.022L508.928 553.908C509.895 553.35 511.091 553.374 512.034 553.971L545.931 575.425C547.808 576.612 547.788 579.356 545.895 580.517L498.595 609.522C497.619 610.121 496.387 610.111 495.42 609.498Z" fill="#F1CA11"/>
                        <text id="17text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="499.293" y="584.909">17</tspan></text>
                        </g>
                        <path id="yellowS-3" d="M461.5 521.681V519.308C461.5 518.196 462.115 517.175 463.099 516.655L487.068 503.993C487.671 503.674 488.365 503.57 489.036 503.699L498.567 505.532C499.979 505.804 501 507.04 501 508.478V510.108C501 511.508 501.967 512.721 503.332 513.033L516.168 515.967C517.533 516.279 518.5 517.492 518.5 518.892V519.658C518.5 521.609 520.334 523.041 522.228 522.568L525.468 521.758C526.136 521.591 526.84 521.659 527.464 521.95L532.269 524.192C533.325 524.685 534 525.745 534 526.911V529.027C534 530.463 535.018 531.698 536.427 531.972L549.573 534.528C550.982 534.802 552 536.037 552 537.473V542.807C552 543.858 551.45 544.832 550.551 545.375L526.983 559.605C526.065 560.159 524.922 560.181 523.983 559.663L511.682 552.876C511.235 552.63 510.858 552.273 510.587 551.84L509.202 549.623C508.843 549.048 508.043 548.957 507.564 549.436C507.23 549.77 506.716 549.841 506.304 549.61L495.211 543.398C494.752 543.141 494.399 542.73 494.214 542.237L493.66 540.759C493.351 539.935 492.294 539.706 491.672 540.328C491.277 540.723 490.665 540.796 490.188 540.507L477.991 533.101C477.359 532.718 476.918 532.088 476.773 531.364L476.506 530.032C476.265 528.825 474.876 528.25 473.852 528.932C473.326 529.282 472.652 529.319 472.093 529.027L463.112 524.341C462.121 523.824 461.5 522.799 461.5 521.681Z" fill="#D9B50C"/>
                        <path id="greenS" d="M528.5 560.817V558.404C528.5 557.242 529.171 556.184 530.223 555.689L545.027 548.722C545.34 548.575 545.676 548.483 546.02 548.45L552.716 547.813C554.477 547.645 556 549.03 556 550.799V552C556 554.265 558.413 555.713 560.412 554.647L562.194 553.696C563.017 553.257 563.998 553.226 564.847 553.612L567.241 554.701C568.312 555.187 569 556.255 569 557.432V560.816C569 561.862 568.455 562.832 567.562 563.377L550.109 574.019C549.125 574.619 547.885 574.602 546.918 573.976L540.473 569.806C540.167 569.608 539.937 569.311 539.822 568.965L539.451 567.854C539.244 567.232 538.455 567.045 537.991 567.509C537.703 567.797 537.255 567.85 536.908 567.638L529.936 563.377C529.044 562.832 528.5 561.863 528.5 560.817Z" fill="#3EB566"/>
                        <path id="yellowS-4" d="M433.5 504.795V499.764C433.5 498.675 434.09 497.672 435.042 497.142L521.051 449.306C521.953 448.804 523.049 448.802 523.953 449.299L611.945 497.645C612.904 498.172 613.5 499.18 613.5 500.275V505.312C613.5 506.36 612.953 507.332 612.057 507.876L559.044 540.063C558.094 540.639 556.903 540.644 555.949 540.074L492.019 501.907C491.082 501.347 489.915 501.341 488.972 501.89L458.527 519.611C457.585 520.16 456.419 520.154 455.482 519.596L434.965 507.373C434.056 506.831 433.5 505.852 433.5 504.795Z" fill="#D9B50C"/>
                        <g id="18-1"className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('18-1', 4, 100)} onMouseEnter={() => setTenant('18-1')}>
                        <path id="18s-1" d="M546.899 569.989L543.001 567.527C541.141 566.352 541.136 563.641 542.992 562.459L559.535 551.932C560.441 551.355 561.587 551.307 562.538 551.806L566.885 554.083C568.934 555.156 569.049 558.045 567.093 559.278L550.101 569.99C549.123 570.607 547.877 570.607 546.899 569.989Z" fill="#46C973"/>
                        <path id="18s-2" d="M530.149 554.954L546.424 544.967C547.39 544.374 548.608 544.377 549.572 544.973L554.361 547.938C556.26 549.114 556.255 551.878 554.351 553.046L538.076 563.033C537.11 563.626 535.892 563.623 534.928 563.027L530.139 560.062C528.24 558.886 528.245 556.122 530.149 554.954Z" fill="#46C973"/>
                        <text id="18text-1" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="551.082" y="563.909">18</tspan></text>
                        <text id="18text-2" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="538.082" y="555.909">18</tspan></text>
                        </g>
                        <g id="20"className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('20', 4, 100)} onMouseEnter={() => setTenant('20')}>
                        <path id="20s" d="M496.911 534.368L521.968 519.414C522.912 518.851 524.089 518.849 525.035 519.41L532.695 523.949C534.644 525.104 534.659 527.92 532.722 529.095L508.01 544.084C507.078 544.649 505.913 544.664 504.966 544.124L496.96 539.549C494.966 538.409 494.939 535.544 496.911 534.368Z" fill="#F1CA11"/>
                        <text id="20text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="509.465" y="533.909">20</tspan></text>
                        </g>
                        <g id="19"className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('19', 4, 100)} onMouseEnter={() => setTenant('19')}>
                        <path id="19s" d="M512.711 543.43L536.466 528.936C537.41 528.36 538.595 528.35 539.549 528.911L550.648 535.44C552.61 536.594 552.622 539.427 550.67 540.598L526.551 555.069C525.597 555.642 524.404 555.639 523.453 555.062L512.719 548.557C510.796 547.391 510.791 544.602 512.711 543.43Z" fill="#F1CA11"/>
                        <text id="19text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="527.066" y="543.909">19</tspan></text>
                        </g>
                        <g id="21"className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('21', 4, 100)} onMouseEnter={() => setTenant('21')}>
                        <path id="21s" d="M479.833 523.472L503.95 509.404C504.905 508.847 506.088 508.86 507.03 509.438L516.723 515.379C518.657 516.564 518.626 519.385 516.667 520.528L492.55 534.596C491.595 535.153 490.412 535.14 489.47 534.562L479.777 528.621C477.843 527.436 477.874 524.615 479.833 523.472Z" fill="#F1CA11"/>
                        <text id="21text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="494.156" y="524.909">21</tspan></text>
                        </g>
                        <g id="22"className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('22', 4, 100)} onMouseEnter={() => setTenant('22')}>
                        <path id="22s" d="M463.369 514.422L488 499.886C488.927 499.338 490.077 499.33 491.013 499.864L498.978 504.416C500.986 505.563 500.996 508.454 498.996 509.615L474.022 524.116C473.082 524.662 471.921 524.657 470.986 524.103L463.364 519.586C461.401 518.423 461.404 515.581 463.369 514.422Z" fill="#F1CA11"/>
                        <text id="22text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="476.594" y="513.909">22</tspan></text>
                        </g>
                        <g id="23"className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('23', 4, 100)} onMouseEnter={() => setTenant('23')}>
                        <path id="23s" d="M435.434 495.466L520.512 446.851C521.434 446.323 522.566 446.323 523.488 446.851L612.027 497.444C614.023 498.585 614.047 501.455 612.069 502.629L559.039 534.087C558.091 534.649 556.911 534.646 555.965 534.079L491.543 495.426C490.593 494.856 489.407 494.856 488.457 495.426L459.048 513.071C458.096 513.643 456.905 513.641 455.954 513.067L435.371 500.639C433.412 499.456 433.446 496.602 435.434 495.466Z" fill="#F1CA11"/>
                        <text id="23text" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="529.469" y="490.909">23</tspan></text>
                        </g>
                        <path id="greenS-2" d="M578.5 531.362V527.459C578.5 526.029 579.509 524.798 580.912 524.518L584.932 523.714C585.622 523.576 586.339 523.685 586.957 524.022L587.117 524.109C589.092 525.186 591.5 523.757 591.5 521.507C591.5 520.295 592.238 519.205 593.363 518.755L595.415 517.934C596.113 517.655 596.89 517.648 597.593 517.915L609.064 522.266C610.229 522.708 611 523.824 611 525.071V529.208C611 530.312 610.394 531.326 609.422 531.85L605.152 534.149C604.765 534.357 604.287 534.287 603.976 533.976C603.496 533.496 602.686 533.627 602.382 534.235L601.352 536.297C601.122 536.756 600.765 537.138 600.322 537.399L594.091 541.064C593.115 541.638 591.9 541.614 590.947 541.002L579.878 533.886C579.019 533.334 578.5 532.383 578.5 531.362Z" fill="#3EB566"/>
                        <g id="18-2"className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('18-2', 4, 100)} onMouseEnter={() => setTenant('18-2')}>
                        <path id="18-3" d="M580.181 524.529L585.391 521.451C586.376 520.869 587.606 520.898 588.563 521.526L598.727 528.196C600.642 529.453 600.5 532.305 598.469 533.364L593.047 536.193C592.091 536.692 590.94 536.639 590.033 536.054L580.081 529.633C578.207 528.424 578.261 525.664 580.181 524.529Z" fill="#46C973"/>
                        <path id="18-4" d="M593.375 517.07L596.401 515.388C597.383 514.843 598.587 514.892 599.522 515.515L609.017 521.845C610.859 523.073 610.782 525.804 608.874 526.927L606.094 528.563C605.117 529.137 603.899 529.112 602.946 528.498L593.205 522.213C591.301 520.985 591.394 518.17 593.375 517.07Z" fill="#46C973"/>
                        <text id="18text-3" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="585.082" y="531.909">18</tspan></text>
                        <text id="18text-4" fill="black" font-family="Inter" font-size="8" font-weight="500" letter-spacing="0em"><tspan x="597.082" y="524.909">18</tspan></text>
                        </g>
                        <path id="manS-3" d="M560.5 542.77V537.784C560.5 536.435 561.401 535.251 562.702 534.892L573.871 531.811C574.597 531.611 575.372 531.691 576.041 532.035L590.872 539.663C591.872 540.177 592.5 541.207 592.5 542.331V545.824C592.5 546.865 591.96 547.833 591.072 548.379L581.025 554.561C580.086 555.14 578.905 555.155 577.95 554.603L561.997 545.367C561.07 544.83 560.5 543.841 560.5 542.77Z" fill="#1F234D"/>
                        <g id="man-3" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('man-3', 4, 100)} onMouseEnter={() => setTenant('man-3')}>
                            <path id="man3" d="M562.13 534.436L570.944 528.966C571.9 528.373 573.106 528.364 574.07 528.942L590.713 538.928C592.655 540.093 592.655 542.907 590.713 544.072L581.561 549.563C580.602 550.139 579.402 550.133 578.448 549.548L562.143 539.542C560.241 538.375 560.234 535.613 562.13 534.436Z" fill="#343B79"/>
                        </g>
                        <path id="Vector 217" d="M606.5 517.914V514.5L606.871 509.671C606.951 508.633 607.564 507.71 608.491 507.233L624.045 499.234C624.346 499.079 624.671 498.976 625.007 498.93L636.41 497.357C637.894 497.153 639 495.884 639 494.385V491.716C639 490.399 639.859 489.236 641.118 488.848L644.33 487.86C645.08 487.629 645.891 487.702 646.588 488.062L659.376 494.662C660.373 495.177 661 496.205 661 497.328V499.277C661 500.344 660.433 501.331 659.512 501.868L655.752 504.061C655.277 504.338 654.702 504.381 654.192 504.177C653.263 503.805 652.211 504.27 651.86 505.206L651.376 506.499C651.133 507.146 650.673 507.69 650.076 508.038L619.136 526.048C618.136 526.63 616.892 526.585 615.936 525.934L607.81 520.393C606.99 519.834 606.5 518.906 606.5 517.914Z" fill="#1F234D"/>
                        <path id="man4" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('man4', 4, 100)} onMouseEnter={() => setTenant('man4')} d="M607 513.472V508.725C607 507.657 607.568 506.67 608.491 506.132L632.961 491.895C633.91 491.343 635.084 491.354 636.023 491.922L649.159 499.873C651.111 501.054 651.082 503.896 649.106 505.037L619.688 522.025C618.662 522.618 617.382 522.551 616.423 521.853L608.235 515.899C607.459 515.334 607 514.432 607 513.472Z" fill="#343B79"/>
                        <path id="man5" className="hover:brightness-110 hover:-translate-y-[1px] transition-all ease-in-out hover:cursor-pointer" aria-describedby={id} onClick={() => zoomToElement('man5', 4, 100)} onMouseEnter={() => setTenant('man5')} d="M640.581 487.449L642.935 485.978C643.895 485.378 645.11 485.369 646.079 485.955L659.199 493.897C661.142 495.073 661.124 497.898 659.167 499.049L656.564 500.58C655.602 501.146 654.406 501.131 653.459 500.542L640.588 492.541C638.702 491.369 638.699 488.626 640.581 487.449Z" fill="#343B79"/>
                        <path id="Vector 134" d="M464.048 536.737L341.245 463.592L339.755 464.318C333.825 467.204 326.854 466.981 321.12 463.723L319.266 462.669C313.089 459.158 305.512 459.188 299.363 462.749L280.335 473.765C274.068 477.394 273.616 486.274 279.483 490.52L280.36 491.155C282.07 492.393 282 494.964 280.225 496.107L275.145 499.38L396.381 575.035L399.979 572.932C404.671 570.19 410.522 570.388 415.017 573.442C421.806 578.054 430.649 578.322 437.704 574.131L461.132 560.213C465.279 557.749 465.486 551.819 461.519 549.072C457.486 546.28 457.781 540.225 462.067 537.839L464.048 536.737Z" fill="white" stroke="black" stroke-width="0.1"/>
                        <path id="esca-1" d="M271.358 488.074L320.079 458.992C320.373 458.816 320.737 458.804 321.043 458.958L324.679 460.798C325.384 461.154 325.417 462.148 324.738 462.551L275.38 491.818C275.047 492.015 274.63 492.003 274.31 491.787L271.311 489.762C270.704 489.352 270.729 488.45 271.358 488.074Z" fill="#ECBB82"/>
                        <path id="esca-2" d="M414.301 574.768L464.167 545.301C464.481 545.115 464.871 545.115 465.185 545.301L468.542 547.286C469.198 547.674 469.197 548.622 468.542 549.008L418.267 578.664C417.922 578.868 417.488 578.846 417.166 578.608L414.217 576.434C413.64 576.009 413.684 575.133 414.301 574.768Z" fill="#ECBB82"/>
                        <path id="boothS" d="M271.5 473.813V471.828C271.5 471.023 271.982 470.297 272.724 469.985L279.97 466.934C280.61 466.664 281.344 466.746 281.909 467.149L283.662 468.402C284.188 468.777 284.5 469.383 284.5 470.029V471.93C284.5 472.598 284.166 473.223 283.609 473.594L278.006 477.329C277.387 477.742 276.591 477.777 275.939 477.421L272.542 475.569C271.9 475.218 271.5 474.545 271.5 473.813Z" fill="#0698BD"/>
                        <path id="boothS-2" d="M285.5 465.93V463.736C285.5 462.979 285.928 462.286 286.606 461.947L297.312 456.594C298.032 456.234 298.897 456.341 299.508 456.864L301.302 458.401C301.745 458.781 302 459.336 302 459.92V461.851C302 462.563 301.622 463.22 301.008 463.579L291.078 469.371C290.418 469.756 289.597 469.731 288.961 469.307L286.391 467.594C285.834 467.223 285.5 466.598 285.5 465.93Z" fill="#0698BD"/>
                        <path id="booth1" d="M275.412 475.247L272.549 473.264C271.354 472.437 271.412 470.653 272.658 469.905L278.847 466.192C279.544 465.774 280.425 465.819 281.076 466.307L283.678 468.259C284.799 469.099 284.731 470.802 283.546 471.55L277.619 475.294C276.94 475.722 276.072 475.704 275.412 475.247Z" fill="#0AADD7"/>
                        <path id="Vector 229" d="M327.5 462.392V461.236C327.5 460.479 327.928 459.786 328.606 459.447L332.72 457.39C333.217 457.141 333.796 457.111 334.317 457.306L336.202 458.013C336.983 458.306 337.5 459.052 337.5 459.886V461.351C337.5 462.063 337.122 462.72 336.508 463.079L332.543 465.391C331.902 465.766 331.106 465.753 330.476 465.36L328.44 464.088C327.855 463.722 327.5 463.081 327.5 462.392Z" fill="#0698BD"/>
                        <path id="booth3" d="M330.241 463.324L328.772 462.371C327.511 461.553 327.571 459.688 328.881 458.951L333.026 456.619C333.697 456.241 334.526 456.282 335.157 456.726L336.469 457.649C337.656 458.484 337.587 460.266 336.338 461.005L332.349 463.368C331.695 463.755 330.878 463.738 330.241 463.324Z" fill="#0AADD7"/>
                        <path id="booth2" d="M288.93 466.698L286.435 464.826C285.284 463.963 285.394 462.204 286.643 461.49L296.806 455.682C297.525 455.271 298.423 455.346 299.065 455.871L301.287 457.689C302.362 458.569 302.235 460.25 301.04 460.958L291.15 466.818C290.454 467.231 289.578 467.183 288.93 466.698Z" fill="#0AADD7"/>
                        <path id="boothS3" d="M449 537.905V534.641C449 533.934 449.374 533.279 449.983 532.919L459.022 527.578C459.629 527.22 460.379 527.207 460.997 527.544L469.871 532.384C470.559 532.759 470.964 533.501 470.908 534.283L470.564 539.111C470.523 539.677 470.244 540.199 469.796 540.547L462.616 546.132C461.947 546.652 461.023 546.695 460.31 546.238L449.922 539.59C449.347 539.222 449 538.587 449 537.905Z" fill="#0698BD"/>
                        <path id="Vector 236" d="M436 579.592V576.5C436 575.871 436.296 575.278 436.8 574.9L443.315 570.013C443.753 569.686 444.305 569.551 444.844 569.641L447.671 570.112C448.89 570.315 450 569.375 450 568.139V567.172C450 566.448 450.391 565.781 451.023 565.427L461.47 559.577C462.105 559.221 462.884 559.239 463.503 559.624L466.556 561.522C467.143 561.887 467.5 562.529 467.5 563.221V565.93C467.5 566.598 467.166 567.223 466.609 567.594L456.156 574.563C455.774 574.817 455.267 574.767 454.943 574.443C454.479 573.979 453.697 574.106 453.404 574.693L452.76 575.98C452.59 576.319 452.327 576.604 452.001 576.799L441.249 583.25C440.505 583.697 439.557 583.612 438.903 583.041L436.683 581.098C436.249 580.718 436 580.169 436 579.592Z" fill="#0698BD"/>
                        <path id="boothS-5" d="M418 582.5V581.72C418 581.574 418.016 581.428 418.048 581.286L418.652 578.566C418.855 577.651 419.667 577 420.604 577H427.249C428.251 577 429.099 577.742 429.231 578.736L429.698 582.236C429.858 583.435 428.925 584.5 427.716 584.5H420C418.895 584.5 418 583.605 418 582.5Z" fill="#0698BD"/>
                        <path id="booth4" d="M450.121 531.711L457.354 526.338C457.995 525.861 458.859 525.812 459.55 526.213L469.539 532.003C470.735 532.697 470.884 534.366 469.828 535.26L462.647 541.338C461.975 541.907 461.009 541.969 460.269 541.491L450.228 534.996C449.056 534.238 449.001 532.544 450.121 531.711Z" fill="#0AADD7"/>
                        <path id="booth5" d="M418 578.5V580.5C418 581.605 418.895 582.5 420 582.5H427.5C428.605 582.5 429.5 581.605 429.5 580.5V578.5C429.5 577.395 428.605 576.5 427.5 576.5H420C418.895 576.5 418 577.395 418 578.5Z" fill="#0AADD7"/>
                        <path id="booth6" d="M453.883 570.383L451.29 567.79C450.377 566.877 450.556 565.35 451.656 564.673L461.155 558.828C461.943 558.343 462.962 558.462 463.617 559.117L466.21 561.71C467.123 562.623 466.944 564.15 465.844 564.827L456.345 570.672C455.557 571.157 454.538 571.038 453.883 570.383Z" fill="#0AADD7"/>
                        <path id="booth7" d="M439.383 579.383L436.79 576.79C435.877 575.877 436.056 574.35 437.156 573.673L446.655 567.828C447.443 567.343 448.462 567.462 449.117 568.117L451.71 570.71C452.623 571.623 452.444 573.15 451.344 573.827L441.845 579.672C441.057 580.157 440.038 580.038 439.383 579.383Z" fill="#0AADD7"/>
                        <path id="esca-5" d="M713.306 520.725L731.19 509.927C731.493 509.744 731.869 509.734 732.181 509.902L736.41 512.178L718.3 523.614C718.136 523.711 717.933 523.707 717.773 523.604L717.497 523.426L713.306 520.725Z" fill="#ECBB82"/>
                        <path id="esca-6_2" d="M719.028 524.262L736.911 513.463C737.214 513.28 737.591 513.271 737.902 513.438L742.132 515.714L724.021 527.15C723.858 527.247 723.654 527.243 723.495 527.141L723.219 526.963L719.028 524.262Z" fill="#ECBB82"/>
                        <path id="esca-12" d="M628.107 262.25L609.836 252.121C609.526 251.949 609.15 251.954 608.845 252.133L604.702 254.564L623.224 265.322C623.391 265.412 623.594 265.401 623.75 265.292L624.019 265.105L628.107 262.25Z" fill="#ECBB82"/>
                        <path id="esca-11" d="M622.52 265.996L604.249 255.867C603.94 255.695 603.563 255.7 603.258 255.879L599.116 258.31L617.637 269.068C617.804 269.158 618.007 269.147 618.163 269.038L618.432 268.85L622.52 265.996Z" fill="#ECBB82"/>
                        <path id="esca-2_2" d="M467.028 626.262L484.911 615.463C485.214 615.28 485.591 615.271 485.902 615.438L490.132 617.714L472.021 629.15C471.858 629.247 471.654 629.243 471.495 629.141L471.219 628.963L467.028 626.262Z" fill="#ECBB82"/>
                        <path id="esca-3" d="M472.749 629.798L490.633 618.999C490.936 618.817 491.312 618.807 491.624 618.975L495.853 621.251L477.742 632.687C477.579 632.784 477.375 632.78 477.216 632.677L476.94 632.499L472.749 629.798Z" fill="#ECBB82"/>
                        <path id="Arrow 1" d="M502.759 430.934C502.722 431.067 502.801 431.205 502.934 431.241L505.105 431.833C505.238 431.87 505.376 431.791 505.412 431.658C505.448 431.525 505.37 431.387 505.236 431.351L503.307 430.825L503.833 428.895C503.87 428.762 503.791 428.624 503.658 428.588C503.525 428.552 503.387 428.63 503.351 428.764L502.759 430.934ZM516.876 422.783L502.876 430.783L503.124 431.217L517.124 423.217L516.876 422.783Z" fill="#A3A3A3"/>
                        <g id="Group 20">
                        <path id="Vector 249_32" d="M672.66 297.669L686.44 288.817L704.679 298.001L714.811 303.103L701.531 311.942" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 250_32" d="M705.187 298.345L692.407 307.172" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        <path id="Vector 251_32" d="M696.064 293.575L683.283 302.401" stroke="#575757" stroke-width="0.5" stroke-dasharray="1 1"/>
                        </g>
                        <line id="Line 38" x1="653.875" y1="376.783" x2="712.875" y2="342.783" stroke="#575757" stroke-width="0.5"/>
                        <line id="Line 39" x1="654.875" y1="377.783" x2="713.875" y2="343.783" stroke="#575757" stroke-width="0.5"/>
                        <line id="Line 40" x1="681.875" y1="391.783" x2="740.875" y2="357.783" stroke="#575757" stroke-width="0.5"/>
                        <line id="Line 41" x1="682.875" y1="392.783" x2="741.875" y2="358.783" stroke="#575757" stroke-width="0.5"/>
                        <path id="Line 44" d="M778.5 467.5L874.467 408.135" stroke="#575757" stroke-width="0.5"/>
                        <path id="Line 45" d="M780 468L875.49 409.112" stroke="#575757" stroke-width="0.5"/>
                        <line id="Line 42" x1="666.875" y1="384.783" x2="725.875" y2="350.783" stroke="#575757" stroke-width="0.5"/>
                        <line id="Line 43" x1="667.875" y1="385.783" x2="726.875" y2="351.783" stroke="#575757" stroke-width="0.5"/>
                        <path id="Vector 252" d="M845.17 355L809 376.283L874.106 408L909 386.717L845.17 355Z" stroke="#575757" stroke-width="0.5"/>
                        <path id="Vector 253" d="M747 320.5V320.5C753.269 317.052 760.824 316.874 767.248 320.023L900.704 385.434C904.271 387.182 904.474 392.191 901.059 394.221L872 411.5" stroke="#575757" stroke-width="0.5"/>
                        <path id="Vector 254" d="M747 321.5V321.5C753.269 318.052 760.824 317.874 767.248 321.023L900.062 386.119C903.738 387.921 903.773 393.149 900.122 395V395L873.5 411" stroke="#575757" stroke-width="0.5"/>
                        <path id="Vector 255" d="M718.5 305.5L724.695 302.891C738.908 296.907 754.979 297.165 768.993 303.6L924.396 374.971C935.209 379.937 936.212 394.912 926.159 401.276L723.849 529.348C719.048 532.387 713.484 534 707.802 534H650.002C644.443 534 638.994 535.544 634.262 538.461L433 662.5" stroke="#575757" stroke-width="0.5"/>
                        <path id="Vector 256" d="M718.5 306.5L724.695 303.891C738.908 297.907 754.979 298.165 768.993 304.6L924.396 375.971C935.209 380.937 936.212 395.912 926.159 402.276L723.849 530.348C719.048 533.387 713.484 535 707.802 535H650.002C644.443 535 638.994 536.544 634.262 539.461L433 663.5" stroke="#575757" stroke-width="0.5"/>
                        <path id="Vector 257" d="M922 375L948.161 387.568C958.873 392.714 959.632 407.68 949.495 413.883L734.305 545.56C731.163 547.482 727.55 548.5 723.866 548.5H664.162C660.46 548.5 656.831 549.528 653.678 551.468L453 675M924.5 375L951 388C960 393 962 407.5 950.388 414.948L735.305 546.56C732.163 548.482 728.55 549.5 724.866 549.5H664.155C660.457 549.5 656.832 550.525 653.682 552.461L453.5 675.5" stroke="#575757" stroke-width="0.5"/>
                        <path id="Vector 259" d="M447.5 665.5L641.07 547.234C645.608 544.461 650.802 542.945 656.119 542.84L715.73 541.663C721.142 541.556 726.425 539.987 731.018 537.121L938.193 407.862C944.96 403.64 944.303 393.584 937.044 390.278L763.783 311.367C756.263 307.942 747.663 307.77 740.012 310.893L727.5 316L708.824 326.227C707.371 327.023 705.617 327.047 704.142 326.291L589.916 267.739C588.409 266.966 586.614 267.009 585.145 267.852L544.889 290.969C541.47 292.933 541.563 297.897 545.054 299.732L646.755 353.168C650.285 355.023 650.33 360.061 646.834 361.978L554.346 412.697C550.917 414.578 550.878 419.492 554.277 421.427L670.575 487.62C672.082 488.478 673.926 488.493 675.448 487.661L729.169 458.275C730.626 457.478 732.385 457.457 733.861 458.219L775.455 479.687C777.032 480.5 778.921 480.418 780.421 479.469L916.105 393.676C919.375 391.608 919.159 386.77 915.718 385.002L850.5 351.5" stroke="#A3A3A3" stroke-width="0.5"/>
                        <path id="Vector 260" d="M722.5 345.5L723.882 344.655C727.216 342.618 727.03 337.715 723.55 335.937L709 328.5" stroke="#A3A3A3" stroke-width="0.5"/>
                        <path id="Vector 261" d="M738 352L744.652 348.305C746.118 347.49 747.895 347.465 749.384 348.238L829.536 389.864C833.012 391.669 833.157 396.59 829.792 398.596L733.439 456.046C731.926 456.948 730.051 456.987 728.502 456.15L608.558 391.353C605.077 389.473 605.055 384.487 608.519 382.576L629.5 371" stroke="#A3A3A3" stroke-width="0.5"/>
                        <line id="Line 46" x1="675.872" y1="388.785" x2="732.872" y2="354.785" stroke="#A3A3A3" stroke-width="0.5"/>
                        <line id="Line 47" x1="661.876" y1="379.783" x2="719.876" y2="346.783" stroke="#A3A3A3" stroke-width="0.5"/>
                        <path id="Arrow 2" d="M704.242 372.064C704.277 371.93 704.197 371.793 704.064 371.758L701.888 371.186C701.754 371.15 701.617 371.23 701.582 371.364C701.547 371.497 701.627 371.634 701.76 371.669L703.695 372.178L703.186 374.112C703.15 374.246 703.23 374.383 703.364 374.418C703.497 374.453 703.634 374.373 703.669 374.24L704.242 372.064ZM692.126 379.216L704.126 372.216L703.874 371.784L691.874 378.784L692.126 379.216Z" fill="#A3A3A3"/>
                        <path id="Arrow 3" d="M687.759 364.934C687.722 365.067 687.801 365.205 687.934 365.241L690.105 365.833C690.238 365.87 690.376 365.791 690.412 365.658C690.448 365.525 690.37 365.387 690.236 365.351L688.307 364.825L688.833 362.895C688.87 362.762 688.791 362.624 688.658 362.588C688.525 362.552 688.387 362.63 688.351 362.764L687.759 364.934ZM694.876 360.783L687.876 364.783L688.124 365.217L695.124 361.217L694.876 360.783Z" fill="#A3A3A3"/>
                        <path id="Arrow 4" d="M636.921 406.763C636.79 406.806 636.719 406.948 636.763 407.079L637.474 409.214C637.518 409.345 637.66 409.415 637.791 409.372C637.922 409.328 637.992 409.186 637.949 409.055L637.316 407.158L639.214 406.526C639.345 406.482 639.415 406.34 639.372 406.209C639.328 406.078 639.186 406.008 639.055 406.051L636.921 406.763ZM651.112 413.776L637.112 406.776L636.888 407.224L650.888 414.224L651.112 413.776Z" fill="#A3A3A3"/>
                        <path id="Arrow 9" d="M574.24 402.069C574.278 401.936 574.201 401.798 574.069 401.76L571.905 401.141C571.772 401.104 571.634 401.18 571.596 401.313C571.558 401.446 571.635 401.584 571.768 401.622L573.691 402.172L573.141 404.095C573.104 404.228 573.18 404.366 573.313 404.404C573.446 404.442 573.584 404.365 573.622 404.232L574.24 402.069ZM565.121 407.219L574.121 402.219L573.879 401.781L564.879 406.781L565.121 407.219Z" fill="#A3A3A3"/>
                        <path id="Arrow 5" d="M701.761 472.927C701.721 473.059 701.795 473.199 701.927 473.239L704.08 473.894C704.212 473.934 704.351 473.86 704.392 473.728C704.432 473.596 704.357 473.456 704.225 473.416L702.312 472.834L702.894 470.92C702.934 470.788 702.86 470.649 702.728 470.608C702.596 470.568 702.456 470.643 702.416 470.775L701.761 472.927ZM716.882 464.779L701.882 472.779L702.118 473.221L717.118 465.221L716.882 464.779Z" fill="#A3A3A3"/>
                        <path id="Arrow 6" d="M701.761 472.927C701.721 473.059 701.795 473.199 701.927 473.239L704.08 473.894C704.212 473.934 704.351 473.86 704.392 473.728C704.432 473.596 704.357 473.456 704.225 473.416L702.312 472.834L702.894 470.92C702.934 470.788 702.86 470.649 702.728 470.608C702.596 470.568 702.456 470.643 702.416 470.775L701.761 472.927ZM716.882 464.779L701.882 472.779L702.118 473.221L717.118 465.221L716.882 464.779Z" fill="#A3A3A3"/>
                        <path id="Arrow 10" d="M618.756 560.947C618.726 561.082 618.812 561.215 618.947 561.244L621.146 561.722C621.28 561.752 621.414 561.666 621.443 561.531C621.472 561.396 621.387 561.263 621.252 561.234L619.297 560.809L619.722 558.854C619.752 558.72 619.666 558.586 619.531 558.557C619.396 558.528 619.263 558.613 619.234 558.748L618.756 560.947ZM632.865 551.79L618.865 560.79L619.135 561.21L633.135 552.21L632.865 551.79Z" fill="#A3A3A3"/>
                        <path id="Arrow 11" d="M449.758 663.936C449.723 664.07 449.803 664.207 449.936 664.242L452.112 664.814C452.246 664.85 452.383 664.77 452.418 664.636C452.453 664.503 452.373 664.366 452.24 664.331L450.305 663.822L450.814 661.888C450.85 661.754 450.77 661.617 450.636 661.582C450.503 661.547 450.366 661.627 450.331 661.76L449.758 663.936ZM461.874 656.784L449.874 663.784L450.126 664.216L462.126 657.216L461.874 656.784Z" fill="#A3A3A3"/>
                        <path id="Arrow 7" d="M764.757 436.939C764.724 437.073 764.805 437.209 764.939 437.243L767.122 437.788C767.256 437.822 767.392 437.74 767.425 437.606C767.459 437.472 767.377 437.337 767.243 437.303L765.303 436.818L765.788 434.878C765.822 434.744 765.74 434.608 765.606 434.575C765.472 434.541 765.337 434.623 765.303 434.757L764.757 436.939ZM779.871 427.786L764.871 436.786L765.129 437.214L780.129 428.214L779.871 427.786Z" fill="#A3A3A3"/>
                        <path id="Arrow 8" d="M666.579 307.237C666.71 307.194 666.781 307.052 666.737 306.921L666.025 304.786C665.982 304.656 665.84 304.585 665.709 304.628C665.578 304.672 665.507 304.814 665.551 304.945L666.183 306.842L664.286 307.474C664.155 307.518 664.084 307.66 664.128 307.791C664.172 307.922 664.313 307.992 664.444 307.949L666.579 307.237ZM610.431 333.76C610.298 333.798 610.221 333.936 610.259 334.069L610.877 336.232C610.915 336.365 611.054 336.442 611.187 336.404C611.319 336.366 611.396 336.228 611.358 336.095L610.809 334.172L612.732 333.622C612.865 333.584 612.941 333.446 612.904 333.313C612.866 333.181 612.727 333.104 612.594 333.142L610.431 333.76ZM923.255 416.948C923.227 417.083 923.313 417.215 923.448 417.244L925.648 417.716C925.783 417.745 925.915 417.659 925.944 417.524C925.973 417.389 925.887 417.256 925.752 417.227L923.797 416.808L924.216 414.852C924.245 414.717 924.159 414.584 924.024 414.555C923.889 414.527 923.756 414.613 923.727 414.748L923.255 416.948ZM807.579 331.737C807.71 331.694 807.781 331.552 807.737 331.421L807.025 329.286C806.982 329.155 806.84 329.085 806.709 329.128C806.578 329.172 806.507 329.314 806.551 329.445L807.184 331.342L805.286 331.974C805.155 332.018 805.084 332.16 805.128 332.291C805.172 332.422 805.313 332.492 805.444 332.449L807.579 331.737ZM899.256 404.448C899.227 404.583 899.313 404.716 899.448 404.744L901.648 405.216C901.783 405.245 901.916 405.159 901.945 405.024C901.973 404.889 901.887 404.756 901.752 404.727L899.797 404.308L900.216 402.352C900.245 402.217 900.159 402.084 900.024 402.055C899.889 402.027 899.756 402.113 899.727 402.248L899.256 404.448ZM660.388 304.224L666.388 307.224L666.612 306.776L660.612 303.776L660.388 304.224ZM615.121 336.282L610.621 333.782L610.378 334.219L614.878 336.719L615.121 336.282ZM931.864 411.29L923.364 416.79L923.636 417.21L932.136 411.71L931.864 411.29ZM801.388 328.724L807.388 331.724L807.612 331.276L801.612 328.276L801.388 328.724ZM907.864 398.79L899.364 404.29L899.636 404.71L908.136 399.21L907.864 398.79Z" fill="#A3A3A3"/>
                        <line id="Line 48" x1="644.106" y1="244.774" x2="770.106" y2="303.774" stroke="#575757" stroke-width="0.5"/>
                        <line id="Line 49" x1="644.106" y1="245.774" x2="770.106" y2="304.774" stroke="#575757" stroke-width="0.5"/>
                        <path id="Line 50" d="M732.301 296.787C732.431 296.743 732.501 296.6 732.456 296.47L731.726 294.341C731.682 294.211 731.54 294.141 731.409 294.186C731.278 294.231 731.209 294.373 731.254 294.504L731.902 296.395L730.01 297.044C729.88 297.089 729.81 297.231 729.855 297.362C729.9 297.492 730.042 297.562 730.172 297.517L732.301 296.787ZM638.11 250.775L732.11 296.775L732.33 296.326L638.33 250.326L638.11 250.775Z" fill="#A3A3A3"/>
                        <path id="Line 51" d="M629.115 253.778L724 300.5" stroke="#575757" stroke-width="0.5"/>
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
        top: '211.523px',
        left: '487px',
        image: '/images/default-image.png',
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