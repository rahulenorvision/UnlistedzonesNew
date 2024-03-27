import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import guide from '../../assets/images/guide.png';
import Navbar from '../../components/navbar/index';
import Footer from '../../components/Footer/Footer';

export default function Sebiguiude(){
    return(
        <>
        <Navbar/>
        <Box>
            <Typography variant='h3' sx={{margin:"1rem 0rem 0rem 30rem"}}>SEBI Guidelines</Typography>
            <Typography sx={{margin:"0rem 0rem 0rem 19rem"}}> SECURITIES AND EXCHANGE BOARD OF INDIA (DELISTING OF SECURITIES) GUIDELINES – 2003</Typography>
        </Box>
        <Box sx={{margin:"1rem 0.5rem 1rem 0.5rem"}}>
        <img style={{width:"83.3rem"}} src={guide}/>
        </Box>
        <Box sx={{margin:"1rem 1rem 1rem 1rem",textAlign:"left"}}>
            <Typography sx={{fontWeight: 600}}>3.1 These guidelines shall be called “Securities and Exchange Board of India (Delisting of Securities) Guidelines 2003”.</Typography>
            <Typography sx={{fontWeight: 600}}>These guidelines are being issued under section 11(1) of SEBI Act, 1992, read with sub-section (2) of Section 11A of SEBI Act, with the objective to protect the interest of investors in the securities market.</Typography>
            <Typography sx={{fontWeight: 600,margin:"1rem 0rem 1rem 0rem"}}>Definitions</Typography>
            <Typography>these Guidelines, unless the context otherwise requires:-</Typography>
            <Typography sx={{margin:"1rem 0rem 1rem 0rem"}}>(a) Act’ means the Securities and Exchange Board of India Act, 1992.</Typography>
            <Typography sx={{margin:"1rem 0rem 1rem 0rem"}}>(b) Authority’ means the Central Listing Authority established under the Securities and Exchange Board of India (Central Listing Authority) Regulations, 2003.</Typography>
            <Typography sx={{margin:"1rem 0rem 1rem 0rem"}}>
            (c ) ‘Board’ means the Securities and Exchange Board of India established under section 3 of the Act.
            </Typography>
            <Typography sx={{margin:"1rem 0rem 1rem 0rem"}}>
            (d) ‘compulsory delisting’ means delisting of the securities of a company by an exchange.
            </Typography>
            <Typography sx={{margin:"1rem 0rem 1rem 0rem"}}>
            (g) ‘promoter’ means a promoter as defined in clause (h) of sub-regulation (1) of Regulation 2 of the Securities and Exchange Board of India (Substantial Acquisition of Shares and Takeovers) Regulation, 1997 and includes a person who is desirous of getting the securities of the company delisted under these Guidelines.
            </Typography>
            <Typography sx={{margin:"1rem 0rem 1rem 0rem"}}>
            (h) ‘public shareholding’ means the shareholding in a company held by persons other than the promoter, the acquirer, or the persons acting in concert with him as defined in regulation 2(1)(j) of the Securities and Exchange Board of India (Substantial Acquisition of Shares and Takeovers) Regulation, 1997 and the term ‘public holders of securities’ shall be construed accordingly.
            </Typography>
            <Typography sx={{fontWeight: 600,margin:"1rem 0rem 1rem 0rem"}}>APPLICABILITY</Typography>
            <Typography sx={{margin:"1rem 0rem 1rem 0rem"}}>4.1 These guidelines shall be applicable to the delisting of securities of companies and specifically shall apply to:</Typography>
            <Typography sx={{margin:"1rem 0rem 1rem 0rem"}}>(a) Voluntary delisting being sought by the promoters of a company</Typography>
            <Typography sx={{margin:"1rem 0rem 1rem 0rem"}}>(b) Any acquisition of shares of the company (either by a promoter or by any other person) or scheme or arrangement, by whatever name referred to,<br/> consequent to which the public shareholding falls below the minimum limit specified in the listing conditions or listing agreement that may result</Typography>
            <Typography sx={{margin:"1rem 0rem 1rem 0rem"}}>Explanation: For the purposes of these guidelines, the stock exchange having nationwide trading terminals means the Stock Exchange, Mumbai, the National Stock Exchange, and any other stock exchange, which may be specified by the Board.</Typography>
            <Typography sx={{fontWeight: 600,margin:"1rem 0rem 1rem 0rem"}}>9 RIGHT OF PROMOTER</Typography>
            <Typography sx={{margin:"1rem 0rem 1rem 0rem"}}>9.2 Where the promoter decides not to accept the offer price so determined:<br/>
                    (a) he shall not make an application to the exchange for delisting of the securities; and<br/>
                    (b) the promoter shall ensure that the public shareholding is brought up to the minimum limits specified under the listing conditions within a period of 6 months from the date of such decision, by any of the modes specified in sub-clause 9.3.</Typography>
            <Typography sx={{margin:"1rem 0rem 1rem 0rem"}}>9.3 For the purposes of sub-clause 9.2(b), the public shareholding may be increased by any of the following means <br/>
                    (a) by the issue of new shares by the company in compliance with the provisions of the Companies Act, 1956 and the Securities and Exchange Board of<br/>
                    India (Disclosure and Investor Protection) Guidelines, 2000.<br/>
                    (b) by the promoter making an offer for sale of his holdings in compliance with the provisions of the Companies Act, 1956 and the Securities and<br/>
                    Exchange Board of India (Disclosure and Investor Protection) Guidelines, 2000.<br/>
                    (c ) by the promoter making the sale of his holdings through the secondary market in a transparent manner.</Typography>
                    <Typography sx={{fontWeight: 600,margin:"1rem 0rem 1rem 0rem"}}>SCHEDULE I <br/>[See Guideline 7.2] CONTENTS OF THE PUBLIC ANNOUNCEMENT</Typography>
                    <Typography sx={{margin:"1rem 0rem 1rem 0rem"}}>
                    1. The floor price and how it was reached<br/>
                    2. The dates of opening and closing of the bidding<br/>
                    3. The name of the exchange or exchanges from which the securities are sought to be delisted.<br/>
                    4. The names and addresses of the trading members as well as the bidding terminals and centers through which bids can be placed.<br/>
                    5. Description of the methodology to be adopted for determination of acceptable price<br/>
                    6. Period for which the offer shall be valid<br/>
                    7. The necessity and the object of the delisting<br/>
                    8. A full and complete disclosure of all material facts.<br/>
                    9. The proposed timetable from the opening of the offer till the settlement of the transfers.<br/>
                    10. Details of the escrow account and the amount deposited therein.<br/> 
                    11. Listing details and stock market data<br/>
                    (a) high, low, and average market prices of the securities of the company during the preceding three years;<br/>                  
                    (b) monthly high and low prices for the six months preceding the date of the public announcement; and,<br/>
                    (c ) the volume of securities traded in each month during the six months preceding the date of public announcement.
                    </Typography>
        </Box>
        <Footer/>
        </>
    )
}