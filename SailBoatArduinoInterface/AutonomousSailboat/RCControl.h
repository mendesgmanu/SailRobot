/**
   @file
   @brief   Boat controller using a line-following method Header file

   Sail-boat controller for autonomous sail-boat - annotated version
   Algorithm: https://www.ensta-bretagne.fr/jaulin/paper_jaulin_irsc12.pdf

   This controller is realized with approximations like the fact that locally the earth is flat
   This approximation works as long as the boat's journey does not exceed 100km, if it does,
   you need to change the way the GPS coordinates are flatten (see in GPS.h/.cpp files)
*/


#ifndef RC_CONTROL_H
#define RC_CONTROL_H

#include <ControllerInterface.h>

class RCControl : public ControllerInterface {
  public:
    RCControl();

    void init();

    void Control(const geometry_msgs::Twist& cmd);
};

#endif
