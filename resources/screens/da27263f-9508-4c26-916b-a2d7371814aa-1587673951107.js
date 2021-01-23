jQuery("#simulation")
  .on("click", ".s-da27263f-9508-4c26-916b-a2d7371814aa .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Item_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-da27263f-9508-4c26-916b-a2d7371814aa #s-Item_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#F0E8FC",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-da27263f-9508-4c26-916b-a2d7371814aa #s-Item_1": {
                      "attributes-ie": {
                        "-pie-background": "#F0E8FC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-da27263f-9508-4c26-916b-a2d7371814aa #s-Item_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-da27263f-9508-4c26-916b-a2d7371814aa #s-Item_1": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 500
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f3290229-0b36-4078-a48a-0f9ae3eede41"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Item_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-da27263f-9508-4c26-916b-a2d7371814aa #s-Item_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#F0E8FC",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-da27263f-9508-4c26-916b-a2d7371814aa #s-Item_2": {
                      "attributes-ie": {
                        "-pie-background": "#F0E8FC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-da27263f-9508-4c26-916b-a2d7371814aa #s-Item_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-da27263f-9508-4c26-916b-a2d7371814aa #s-Item_2": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 500
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/da27263f-9508-4c26-916b-a2d7371814aa"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-raised_Button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-da27263f-9508-4c26-916b-a2d7371814aa #s-raised_Button > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#3700B3",
                        "background-attachment": "scroll",
                        "box-shadow": "0px 5px 15px 0px #999999"
                      }
                    }
                  },{
                    "#s-da27263f-9508-4c26-916b-a2d7371814aa #s-raised_Button": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-da27263f-9508-4c26-916b-a2d7371814aa #s-raised_Button": {
                      "attributes-ie": {
                        "-pie-background": "#3700B3",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-da27263f-9508-4c26-916b-a2d7371814aa #s-raised_Button > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#6200EE",
                        "background-attachment": "scroll",
                        "box-shadow": "0px 2px 5px 0px #999999"
                      }
                    }
                  },{
                    "#s-da27263f-9508-4c26-916b-a2d7371814aa #s-raised_Button": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-da27263f-9508-4c26-916b-a2d7371814aa #s-raised_Button": {
                      "attributes-ie": {
                        "-pie-background": "#6200EE",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-raised_Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-da27263f-9508-4c26-916b-a2d7371814aa #s-raised_Button_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#3700B3",
                        "background-attachment": "scroll",
                        "box-shadow": "0px 5px 15px 0px #999999"
                      }
                    }
                  },{
                    "#s-da27263f-9508-4c26-916b-a2d7371814aa #s-raised_Button_1": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-da27263f-9508-4c26-916b-a2d7371814aa #s-raised_Button_1": {
                      "attributes-ie": {
                        "-pie-background": "#3700B3",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-da27263f-9508-4c26-916b-a2d7371814aa #s-raised_Button_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#6200EE",
                        "background-attachment": "scroll",
                        "box-shadow": "0px 2px 5px 0px #999999"
                      }
                    }
                  },{
                    "#s-da27263f-9508-4c26-916b-a2d7371814aa #s-raised_Button_1": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-da27263f-9508-4c26-916b-a2d7371814aa #s-raised_Button_1": {
                      "attributes-ie": {
                        "-pie-background": "#6200EE",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-raised_Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-da27263f-9508-4c26-916b-a2d7371814aa #s-raised_Button_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#3700B3",
                        "background-attachment": "scroll",
                        "box-shadow": "0px 5px 15px 0px #999999"
                      }
                    }
                  },{
                    "#s-da27263f-9508-4c26-916b-a2d7371814aa #s-raised_Button_2": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-da27263f-9508-4c26-916b-a2d7371814aa #s-raised_Button_2": {
                      "attributes-ie": {
                        "-pie-background": "#3700B3",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-da27263f-9508-4c26-916b-a2d7371814aa #s-raised_Button_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#6200EE",
                        "background-attachment": "scroll",
                        "box-shadow": "0px 2px 5px 0px #999999"
                      }
                    }
                  },{
                    "#s-da27263f-9508-4c26-916b-a2d7371814aa #s-raised_Button_2": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-da27263f-9508-4c26-916b-a2d7371814aa #s-raised_Button_2": {
                      "attributes-ie": {
                        "-pie-background": "#6200EE",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/89446160-5e18-47cb-8b62-ab0dea956d59"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("click", ".s-da27263f-9508-4c26-916b-a2d7371814aa .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-menu")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimShow",
                    "parameter": {
                      "target": [ "#s-Menu-minimum-width" ]
                    },
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    }
  })
  .on("pageload", ".s-da27263f-9508-4c26-916b-a2d7371814aa .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-da27263f-9508-4c26-916b-a2d7371814aa")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Menu-minimum-width" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });