// Auto-generated. Do not edit!

// (in-package sailrobot_custom_msg.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let Ais = require('./Ais.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class AisMultiArray {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.layout = null;
      this.data = null;
    }
    else {
      if (initObj.hasOwnProperty('layout')) {
        this.layout = initObj.layout
      }
      else {
        this.layout = new std_msgs.msg.MultiArrayLayout();
      }
      if (initObj.hasOwnProperty('data')) {
        this.data = initObj.data
      }
      else {
        this.data = [];
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type AisMultiArray
    // Serialize message field [layout]
    bufferOffset = std_msgs.msg.MultiArrayLayout.serialize(obj.layout, buffer, bufferOffset);
    // Serialize message field [data]
    // Serialize the length for message field [data]
    bufferOffset = _serializer.uint32(obj.data.length, buffer, bufferOffset);
    obj.data.forEach((val) => {
      bufferOffset = Ais.serialize(val, buffer, bufferOffset);
    });
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type AisMultiArray
    let len;
    let data = new AisMultiArray(null);
    // Deserialize message field [layout]
    data.layout = std_msgs.msg.MultiArrayLayout.deserialize(buffer, bufferOffset);
    // Deserialize message field [data]
    // Deserialize array length for message field [data]
    len = _deserializer.uint32(buffer, bufferOffset);
    data.data = new Array(len);
    for (let i = 0; i < len; ++i) {
      data.data[i] = Ais.deserialize(buffer, bufferOffset)
    }
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.MultiArrayLayout.getMessageSize(object.layout);
    object.data.forEach((val) => {
      length += Ais.getMessageSize(val);
    });
    return length + 4;
  }

  static datatype() {
    // Returns string type for a message object
    return 'sailrobot_custom_msg/AisMultiArray';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '9b970ad182fe4ed91c6d7ee1db87e99b';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    #Message of type AIS Multy Array
    
    std_msgs/MultiArrayLayout layout #Specification of data layout
    Ais[] data		#Array of data
    
    ================================================================================
    MSG: std_msgs/MultiArrayLayout
    # The multiarray declares a generic multi-dimensional array of a
    # particular data type.  Dimensions are ordered from outer most
    # to inner most.
    
    MultiArrayDimension[] dim # Array of dimension properties
    uint32 data_offset        # padding elements at front of data
    
    # Accessors should ALWAYS be written in terms of dimension stride
    # and specified outer-most dimension first.
    # 
    # multiarray(i,j,k) = data[data_offset + dim_stride[1]*i + dim_stride[2]*j + k]
    #
    # A standard, 3-channel 640x480 image with interleaved color channels
    # would be specified as:
    #
    # dim[0].label  = "height"
    # dim[0].size   = 480
    # dim[0].stride = 3*640*480 = 921600  (note dim[0] stride is just size of image)
    # dim[1].label  = "width"
    # dim[1].size   = 640
    # dim[1].stride = 3*640 = 1920
    # dim[2].label  = "channel"
    # dim[2].size   = 3
    # dim[2].stride = 3
    #
    # multiarray(i,j,k) refers to the ith row, jth column, and kth channel.
    
    ================================================================================
    MSG: std_msgs/MultiArrayDimension
    string label   # label of given dimension
    uint32 size    # size of given dimension (in type units)
    uint32 stride  # stride of given dimension
    ================================================================================
    MSG: sailrobot_custom_msg/Ais
    #Header
    Header header
    
    #Message type
    int64 type
    
    #Repeat indicator
    int64 repeat_indic
    
    #MMSI
    int64 mmsi
    
    #Navigation status
    int64 status
    
    #Rate of turn
    int64 rate_of_turn
     
    #Speed over ground
    int64 speed_over_ground
    
    #Position accuracy
    string position_accuracy
    
    #Longitude
    float64 longitude
    
    #Latitude
    float64 latitude
    
    #Course over ground
    int64 course_over_ground
    
    #True heading
    int64 heading
    
    #Distance with our boat
    float64 distance
    
    
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    string frame_id
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new AisMultiArray(null);
    if (msg.layout !== undefined) {
      resolved.layout = std_msgs.msg.MultiArrayLayout.Resolve(msg.layout)
    }
    else {
      resolved.layout = new std_msgs.msg.MultiArrayLayout()
    }

    if (msg.data !== undefined) {
      resolved.data = new Array(msg.data.length);
      for (let i = 0; i < resolved.data.length; ++i) {
        resolved.data[i] = Ais.Resolve(msg.data[i]);
      }
    }
    else {
      resolved.data = []
    }

    return resolved;
    }
};

module.exports = AisMultiArray;
