"use strict";

goog.provide("Blockly.Blocks.turtle");

goog.require("Blockly.Blocks");

/**
 * MAIN
 */
Blockly.Blocks["turtle_main"] =
{
	init: function()
	{
		this.deletable = false;
		this.appendStatementInput("TÖRZS")
			.appendField("🐢");
		this.setTooltip("Innen indul a teknős.");
		this.setColour(120);
	}
};

/**
 * DRAW/GO
 */
Blockly.Blocks["turtle_go"] =
{
    init: function()
	{
		this.appendDummyInput()
			.appendField("move")
			.appendField(new Blockly.FieldTextInput("0"), "MENNYIT")
            .appendField("steps forward.")
		this.setTooltip("Enter number of steps");
		this.setColour(240);
        this.setPreviousStatement(true);
		this.setNextStatement(true);
	}

};


Blockly.Blocks["turtle_go_back"] =
{
	init: function()
	{
		this.appendDummyInput()
			.appendField("move")
			.appendField(new Blockly.FieldTextInput("0"), "MENNYIT")
            .appendField("steps backward.")
		this.setTooltip("Enter number of steps");
		this.setColour(240);
        this.setPreviousStatement(true);
		this.setNextStatement(true);
	}
};

/**
 * TURN
 */
Blockly.Blocks["turtle_turn"] =
{
	init: function()
	{
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.appendDummyInput()
			.appendField("turn")
			.appendField(new Blockly.FieldTextInput("0"))
            .appendField("° clockwise")
		this.setTooltip("Adott irányba, adott fokot fordul a teknős.");
		this.setColour(240);
	}
};


Blockly.Blocks["turtle_turn_anti"] =
{
	init: function()
	{
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.appendDummyInput()
			.appendField("turn")
			.appendField(new Blockly.FieldTextInput("0"))
            .appendField("° anti-clockwise")
		this.setTooltip("Adott irányba, adott fokot fordul a teknős.");
		this.setColour(240);
	}
};


Blockly.Blocks['block_raiseneck'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("raise neck");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['block_moveneck'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move neck");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['block_lowerneck'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("lower neck");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



Blockly.Blocks['block_fmoveparam'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("forward")
        .appendField(new Blockly.FieldNumber(0), "NAME")
        .appendField("distance")
        .appendField(new Blockly.FieldNumber(0), "NAME")
        .appendField("speed")
        .appendField(new Blockly.FieldNumber(0), "NAME")
        .appendField("°");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['block_bmoveparam'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("backward")
        .appendField(new Blockly.FieldNumber(0), "NAME")
        .appendField("distance")
        .appendField(new Blockly.FieldNumber(0), "NAME")
        .appendField("speed")
        .appendField(new Blockly.FieldNumber(0), "NAME")
        .appendField("°");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

/**
 * FOR LOOP
 */

Blockly.Blocks["turtle_for_loop"] = {
init: function() {
    this.appendDummyInput()
        .appendField("count  with ")
        .appendField(new Blockly.FieldDropdown([["i","i"], ["j","j"], ["k","k"]]), "i")
        .appendField(" from ")
        .appendField(new Blockly.FieldNumber(0), "zero")
        .appendField(" to ")
        .appendField(new Blockly.FieldNumber(10), "ten")
        .appendField(" by ")
        .appendField(new Blockly.FieldNumber(1), "one");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks["turtle_repeat_times"] = {
  init: function() {
    this.appendDummyInput()
        .appendField("repeat ")
        .appendField(new Blockly.FieldNumber(0), "NAME")
        .appendField("times");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks["turtle_repeat"] =
{
	init: function()
	{
        this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("repeat  while");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
	}
};

/**
 * FUNCTION CALL
 */
Blockly.Blocks["turtle_forever"] =
{
	init: function()
	{
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("forever");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
	}
};




/**
 * IF STATEMENT
 */
Blockly.Blocks["turtle_if"] =
{
	init: function()
	{
        this.setPreviousStatement(true);
		this.setNextStatement(true);
        this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("if");
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("then");
        this.setColour(0);
        this.setTooltip("");
	}
};

/**
 * IF-ELSE STATEMENT
 */
Blockly.Blocks["turtle_ifelse"] =
{
	init: function()
	{
		this.setPreviousStatement(true);
		this.setNextStatement(true);
	    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("if");
        this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("then");
		this.appendStatementInput("NAME2")
        .setCheck(null)
        .appendField("else");
		this.setTooltip("Ha a feltétel igaz, akkor az első csoportban lévő utasításokat végzi el, ha pedig hamis, akkor a második csoportban lévőket.");
		this.setColour(0);
	}
};


Blockly.Blocks['turtle_conditionals'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("")
        .appendField(new Blockly.FieldDropdown([["=","OPTIONNAME"], ["≠","OPTIONNAME"], ["<","OPTIONNAME"], ["≤","OPTIONNAME"], [">","OPTIONNAME"], ["≥","OPTIONNAME"]]), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['turtle_andor'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("")
        .appendField(new Blockly.FieldDropdown([["and","OPTIONNAME"], ["or","OPTIONNAME"]]), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



/**
 * MATH DEFINITION
 */

Blockly.Blocks['block_math'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("")
        .appendField(new Blockly.FieldDropdown([[" ^","OPTIONNAME"], ["-","OPTIONNAME"], ["*","OPTIONNAME"], ["÷","OPTIONNAME"], ["+","OPTIONNAME"]]), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_even'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("")
        .appendField("is")
        .appendField(new Blockly.FieldDropdown([["even","OPTIONNAME"], ["odd","OPTIONNAME"]]), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


/**
 * LOOKS
 */

Blockly.Blocks['block_speak'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("speak ")
        .appendField(new Blockly.FieldTextInput("hello!"), "NAME")
        .appendField("");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_speaksec'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("speak ")
        .appendField(new Blockly.FieldTextInput("hello!"), "NAME")
        .appendField("for")
        .appendField(new Blockly.FieldNumber(0), "NAME")
        .appendField("seconds");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

