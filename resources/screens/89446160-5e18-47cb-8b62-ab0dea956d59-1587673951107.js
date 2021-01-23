jQuery("#simulation")
  .on("click", ".s-89446160-5e18-47cb-8b62-ab0dea956d59 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-raised_Button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-89446160-5e18-47cb-8b62-ab0dea956d59 #s-raised_Button > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#3700B3",
                        "background-attachment": "scroll",
                        "box-shadow": "0px 5px 15px 0px #999999"
                      }
                    }
                  },{
                    "#s-89446160-5e18-47cb-8b62-ab0dea956d59 #s-raised_Button": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-89446160-5e18-47cb-8b62-ab0dea956d59 #s-raised_Button": {
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
                    "#s-89446160-5e18-47cb-8b62-ab0dea956d59 #s-raised_Button > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#6200EE",
                        "background-attachment": "scroll",
                        "box-shadow": "0px 2px 5px 0px #999999"
                      }
                    }
                  },{
                    "#s-89446160-5e18-47cb-8b62-ab0dea956d59 #s-raised_Button": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-89446160-5e18-47cb-8b62-ab0dea956d59 #s-raised_Button": {
                      "attributes-ie": {
                        "-pie-background": "#6200EE",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f6071b01-375a-4349-bc60-aa7df6f09b4a"
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
    } else if(jFirer.is("#s-raised_Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-89446160-5e18-47cb-8b62-ab0dea956d59 #s-raised_Button_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#3700B3",
                        "background-attachment": "scroll",
                        "box-shadow": "0px 5px 15px 0px #999999"
                      }
                    }
                  },{
                    "#s-89446160-5e18-47cb-8b62-ab0dea956d59 #s-raised_Button_1": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-89446160-5e18-47cb-8b62-ab0dea956d59 #s-raised_Button_1": {
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
                    "#s-89446160-5e18-47cb-8b62-ab0dea956d59 #s-raised_Button_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#6200EE",
                        "background-attachment": "scroll",
                        "box-shadow": "0px 2px 5px 0px #999999"
                      }
                    }
                  },{
                    "#s-89446160-5e18-47cb-8b62-ab0dea956d59 #s-raised_Button_1": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-89446160-5e18-47cb-8b62-ab0dea956d59 #s-raised_Button_1": {
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
    } else if(jFirer.is("#s-raised_Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-89446160-5e18-47cb-8b62-ab0dea956d59 #s-raised_Button_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#3700B3",
                        "background-attachment": "scroll",
                        "box-shadow": "0px 5px 15px 0px #999999"
                      }
                    }
                  },{
                    "#s-89446160-5e18-47cb-8b62-ab0dea956d59 #s-raised_Button_2": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-89446160-5e18-47cb-8b62-ab0dea956d59 #s-raised_Button_2": {
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
                    "#s-89446160-5e18-47cb-8b62-ab0dea956d59 #s-raised_Button_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#6200EE",
                        "background-attachment": "scroll",
                        "box-shadow": "0px 2px 5px 0px #999999"
                      }
                    }
                  },{
                    "#s-89446160-5e18-47cb-8b62-ab0dea956d59 #s-raised_Button_2": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-89446160-5e18-47cb-8b62-ab0dea956d59 #s-raised_Button_2": {
                      "attributes-ie": {
                        "-pie-background": "#6200EE",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/585253e3-50f7-451c-a364-1a4001458278"
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
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/2c8a5a68-0c0d-42d5-814c-e75fc17bf7e1"
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