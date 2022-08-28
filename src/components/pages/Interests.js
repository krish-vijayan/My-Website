import React from "react";
import { motion } from "framer-motion";
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  Sticky,
  batch,
  Fade,
  Zoom,
  StickyIn,
  FadeIn,
  ZoomIn,
  ZoomOut,
  MoveIn,
  MoveOut,
  FadeOut,
  Move,
  StickyOut,
} from "react-scroll-motion";
function Interests() {
  return (
    <motion.div
      initial={{ opacity: 0, transition: { duration: 0.1 } }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <div className="interests-top">
        <h1 className="interests-font">Interests</h1>
      </div>
      <div className="interests-bottom">
        <ScrollContainer>
          <ScrollPage page={0}>
            <Animator animation={batch(StickyIn())}>
              <h1 style={{ fontSize: "5vw" }}>
                New Technology <i class="fa-solid fa-microchip"></i>
              </h1>
            </Animator>
          </ScrollPage>
          <ScrollPage page={1}>
            <Animator animation={StickyOut()}>
              <h1 style={{ fontSize: "5vw" }}>
                Programming <i class="fa-solid fa-code"></i>
              </h1>
            </Animator>
          </ScrollPage>
          <ScrollPage page={2}>
            <Animator animation={StickyOut()}>
              <h1 style={{ fontSize: "5vw" }}>
                Hockey <i class="fa-solid fa-hockey-puck"></i>
              </h1>
            </Animator>
          </ScrollPage>
          <ScrollPage page={3}>
            <Animator animation={StickyOut()}>
              <h1 style={{ fontSize: "5vw" }}>
                Cricket <i class="fa-solid fa-i"></i>
                <i class="fa-solid fa-p"></i>
                <i class="fa-solid fa-l"></i>
              </h1>
            </Animator>
          </ScrollPage>
          <ScrollPage page={4}>
            <Animator animation={StickyOut()}>
              <h1 style={{ fontSize: "5vw" }}>
                Basketball <i class="fa-solid fa-basketball"></i>
              </h1>
            </Animator>
          </ScrollPage>
          <ScrollPage page={5}>
            <Animator animation={StickyOut()}>
              <h1 style={{ fontSize: "5vw" }}>
                Baseball <i class="fa-solid fa-baseball-bat-ball"></i>
              </h1>
            </Animator>
          </ScrollPage>

          <ScrollPage page={5}>
            <Animator animation={StickyOut()}>
              <h1 style={{ fontSize: "5vw" }}>
                Driving <i class="fa-solid fa-car"></i>
              </h1>
            </Animator>
          </ScrollPage>
          <ScrollPage page={5}>
            <Animator animation={StickyOut()}>
              <h1 style={{ fontSize: "5vw" }}>
                TV & Movies <i class="fa-solid fa-tv"></i>
              </h1>
            </Animator>
          </ScrollPage>
          <ScrollPage page={5}>
            <Animator animation={StickyOut()}>
              <h1 style={{ fontSize: "5vw" }}>
                Video Games <i class="fa-solid fa-gamepad"></i>
              </h1>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </div>
    </motion.div>
  );
}

export default Interests;
