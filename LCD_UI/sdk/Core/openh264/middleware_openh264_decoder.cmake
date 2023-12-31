# Add set(CONFIG_USE_middleware_openh264_decoder true) in config.cmake to use this component

include_guard(GLOBAL)
message("${CMAKE_CURRENT_LIST_FILE} component is included.")

if(CONFIG_USE_middleware_openh264_api AND CONFIG_USE_middleware_openh264_common)

target_include_directories(${MCUX_SDK_PROJECT_NAME} PUBLIC
${CMAKE_CURRENT_LIST_DIR}/codec/decoder/core/inc
${CMAKE_CURRENT_LIST_DIR}/codec/decoder/plus/inc
)

else()

message(SEND_ERROR "middleware_openh264_decoder dependency does not meet, please check ${CMAKE_CURRENT_LIST_FILE}.")

endif()
