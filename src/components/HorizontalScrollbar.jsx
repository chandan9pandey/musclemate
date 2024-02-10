import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import BodyPart from "./BodyPart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const LeftArrow = () => {
	const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

	return (
		<Typography
			disabled={isFirstItemVisible}
			onClick={() => scrollPrev()}
			className="right-arrow"
		>
			<img src={LeftArrowIcon} alt="right-arrow" />
		</Typography>
	);
};

const RightArrow = () => {
	const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

	return (
		<Typography
			disabled={isLastItemVisible}
			onClick={() => scrollNext()}
			className=" left-arrow"
		>
			<img src={RightArrowIcon} alt="right-arrow" />
		</Typography>
	);
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
	return (
		<>
			<ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
				{data.map((item) => (
					<Box
						key={item.id || item}
						itemID={item.id || item}
						title={item.id || item}
						m="0 30px"
						sx={{ display: "flex" }}
					>
						{" "}
						<BodyPart
							item={item}
							setBodyPart={setBodyPart}
							bodyPart={bodyPart}
						/>
					</Box>
				))}
			</ScrollMenu>
		</>
	);
};

export default HorizontalScrollbar;
