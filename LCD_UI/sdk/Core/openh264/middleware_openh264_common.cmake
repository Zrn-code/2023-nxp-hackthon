# Add set(CONFIG_USE_middleware_openh264_common true) in config.cmake to use this component

include_guard(GLOBAL)
message("${CMAKE_CURRENT_LIST_FILE} component is included.")

target_include_directories(${MCUX_SDK_PROJECT_NAME} PUBLIC
${CMAKE_CURRENT_LIST_DIR}/codec/common/inc
)

if(CONFIG_USE_COMPONENT_CONFIGURATION)
message("===>Import configuration from ${CMAKE_CURRENT_LIST_FILE}")

target_compile_definitions(${MCUX_SDK_PROJECT_NAME} PUBLIC
-D__NXP_MSDK__
)

if(CONFIG_TOOLCHAIN STREQUAL iar)
target_compile_options(${MCUX_SDK_PROJECT_NAME} PUBLIC
--diag_suppress Pe815,Pe111,Pe186,Pe068,Pe177
)
endif()
if(CONFIG_TOOLCHAIN STREQUAL armgcc)
target_compile_options(${MCUX_SDK_PROJECT_NAME} PUBLIC
-Wno-format
-Wno-strict-aliasing
)
endif()
if(CONFIG_TOOLCHAIN STREQUAL mcux)
target_compile_options(${MCUX_SDK_PROJECT_NAME} PUBLIC
-Wno-format
-Wno-strict-aliasing
)
endif()

endif()

