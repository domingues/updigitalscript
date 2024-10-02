// Generated from ./grammar/PlSqlParser.g4 by ANTLR 4.13.1
import { AbstractParseTreeVisitor } from "antlr4ng";
/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PlSqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class PlSqlParserVisitor extends AbstractParseTreeVisitor {
    /**
     * Visit a parse tree produced by `PlSqlParser.sql_script`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSql_script;
    /**
     * Visit a parse tree produced by `PlSqlParser.unit_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnit_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_diskgroup`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_diskgroup;
    /**
     * Visit a parse tree produced by `PlSqlParser.add_disk_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdd_disk_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_disk_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_disk_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.resize_disk_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResize_disk_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.replace_disk_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplace_disk_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.wait_nowait`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWait_nowait;
    /**
     * Visit a parse tree produced by `PlSqlParser.rename_disk_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRename_disk_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.disk_online_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDisk_online_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.disk_offline_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDisk_offline_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.timeout_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimeout_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.rebalance_diskgroup_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRebalance_diskgroup_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.phase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPhase;
    /**
     * Visit a parse tree produced by `PlSqlParser.check_diskgroup_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCheck_diskgroup_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.diskgroup_template_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDiskgroup_template_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.qualified_template_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualified_template_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.redundancy_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRedundancy_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.striping_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStriping_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.force_noforce`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForce_noforce;
    /**
     * Visit a parse tree produced by `PlSqlParser.diskgroup_directory_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDiskgroup_directory_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.dir_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDir_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.diskgroup_alias_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDiskgroup_alias_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.diskgroup_volume_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDiskgroup_volume_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.add_volume_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdd_volume_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.modify_volume_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModify_volume_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.diskgroup_attributes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDiskgroup_attributes;
    /**
     * Visit a parse tree produced by `PlSqlParser.modify_diskgroup_file`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModify_diskgroup_file;
    /**
     * Visit a parse tree produced by `PlSqlParser.disk_region_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDisk_region_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_diskgroup_file_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_diskgroup_file_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.convert_redundancy_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConvert_redundancy_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.usergroup_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUsergroup_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.user_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUser_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.file_permissions_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFile_permissions_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.file_owner_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFile_owner_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.scrub_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitScrub_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.quotagroup_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuotagroup_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.property_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProperty_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.property_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProperty_value;
    /**
     * Visit a parse tree produced by `PlSqlParser.filegroup_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFilegroup_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.add_filegroup_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdd_filegroup_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.modify_filegroup_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModify_filegroup_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.move_to_filegroup_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMove_to_filegroup_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_filegroup_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_filegroup_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.quorum_regular`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuorum_regular;
    /**
     * Visit a parse tree produced by `PlSqlParser.undrop_disk_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUndrop_disk_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.diskgroup_availability`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDiskgroup_availability;
    /**
     * Visit a parse tree produced by `PlSqlParser.enable_disable_volume`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnable_disable_volume;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_function`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_function;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_flashback_archive`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_flashback_archive;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_hierarchy`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_hierarchy;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_function`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_function;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_java`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_java;
    /**
     * Visit a parse tree produced by `PlSqlParser.match_string`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMatch_string;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_function_body`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_function_body;
    /**
     * Visit a parse tree produced by `PlSqlParser.sql_macro_body`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSql_macro_body;
    /**
     * Visit a parse tree produced by `PlSqlParser.parallel_enable_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParallel_enable_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.partition_by_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartition_by_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.result_cache_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResult_cache_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.accessible_by_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAccessible_by_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.default_collation_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefault_collation_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.aggregate_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregate_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.pipelined_using_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPipelined_using_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.accessor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAccessor;
    /**
     * Visit a parse tree produced by `PlSqlParser.relies_on_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelies_on_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.streaming_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStreaming_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_outline`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_outline;
    /**
     * Visit a parse tree produced by `PlSqlParser.outline_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOutline_options;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_lockdown_profile`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_lockdown_profile;
    /**
     * Visit a parse tree produced by `PlSqlParser.lockdown_feature`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLockdown_feature;
    /**
     * Visit a parse tree produced by `PlSqlParser.lockdown_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLockdown_options;
    /**
     * Visit a parse tree produced by `PlSqlParser.lockdown_statements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLockdown_statements;
    /**
     * Visit a parse tree produced by `PlSqlParser.statement_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.clause_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClause_options;
    /**
     * Visit a parse tree produced by `PlSqlParser.option_values`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOption_values;
    /**
     * Visit a parse tree produced by `PlSqlParser.string_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitString_list;
    /**
     * Visit a parse tree produced by `PlSqlParser.disable_enable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDisable_enable;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_lockdown_profile`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_lockdown_profile;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_package`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_package;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_package`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_package;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_package`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_package;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_package_body`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_package_body;
    /**
     * Visit a parse tree produced by `PlSqlParser.package_obj_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPackage_obj_spec;
    /**
     * Visit a parse tree produced by `PlSqlParser.procedure_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedure_spec;
    /**
     * Visit a parse tree produced by `PlSqlParser.function_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_spec;
    /**
     * Visit a parse tree produced by `PlSqlParser.package_obj_body`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPackage_obj_body;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_pmem_filestore`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_pmem_filestore;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_pmem_filestore`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_pmem_filestore;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_procedure`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_procedure;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_procedure`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_procedure;
    /**
     * Visit a parse tree produced by `PlSqlParser.function_body`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_body;
    /**
     * Visit a parse tree produced by `PlSqlParser.procedure_body`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedure_body;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_procedure_body`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_procedure_body;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_resource_cost`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_resource_cost;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_outline`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_outline;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_rollback_segment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_rollback_segment;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_restore_point`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_restore_point;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_rollback_segment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_rollback_segment;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_role`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_role;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_pmem_filestore`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_pmem_filestore;
    /**
     * Visit a parse tree produced by `PlSqlParser.pmem_filestore_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPmem_filestore_options;
    /**
     * Visit a parse tree produced by `PlSqlParser.file_path`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFile_path;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_rollback_segment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_rollback_segment;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_trigger`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_trigger;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_trigger`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_trigger;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_trigger`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_trigger;
    /**
     * Visit a parse tree produced by `PlSqlParser.trigger_follows_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrigger_follows_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.trigger_when_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrigger_when_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.simple_dml_trigger`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimple_dml_trigger;
    /**
     * Visit a parse tree produced by `PlSqlParser.for_each_row`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFor_each_row;
    /**
     * Visit a parse tree produced by `PlSqlParser.compound_dml_trigger`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompound_dml_trigger;
    /**
     * Visit a parse tree produced by `PlSqlParser.non_dml_trigger`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNon_dml_trigger;
    /**
     * Visit a parse tree produced by `PlSqlParser.trigger_body`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrigger_body;
    /**
     * Visit a parse tree produced by `PlSqlParser.routine_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoutine_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.compound_trigger_block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompound_trigger_block;
    /**
     * Visit a parse tree produced by `PlSqlParser.timing_point_section`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTiming_point_section;
    /**
     * Visit a parse tree produced by `PlSqlParser.non_dml_event`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNon_dml_event;
    /**
     * Visit a parse tree produced by `PlSqlParser.dml_event_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDml_event_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.dml_event_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDml_event_element;
    /**
     * Visit a parse tree produced by `PlSqlParser.dml_event_nested_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDml_event_nested_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.referencing_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReferencing_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.referencing_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReferencing_element;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_type;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_type;
    /**
     * Visit a parse tree produced by `PlSqlParser.compile_type_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompile_type_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.replace_type_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplace_type_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_method_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_method_spec;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_method_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_method_element;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_attribute_definition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_attribute_definition;
    /**
     * Visit a parse tree produced by `PlSqlParser.attribute_definition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttribute_definition;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_collection_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_collection_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.dependent_handling_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDependent_handling_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.dependent_exceptions_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDependent_exceptions_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_type;
    /**
     * Visit a parse tree produced by `PlSqlParser.type_definition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_definition;
    /**
     * Visit a parse tree produced by `PlSqlParser.object_type_def`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_type_def;
    /**
     * Visit a parse tree produced by `PlSqlParser.object_as_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_as_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.object_under_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_under_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.nested_table_type_def`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNested_table_type_def;
    /**
     * Visit a parse tree produced by `PlSqlParser.sqlj_object_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSqlj_object_type;
    /**
     * Visit a parse tree produced by `PlSqlParser.type_body`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_body;
    /**
     * Visit a parse tree produced by `PlSqlParser.type_body_elements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_body_elements;
    /**
     * Visit a parse tree produced by `PlSqlParser.map_order_func_declaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMap_order_func_declaration;
    /**
     * Visit a parse tree produced by `PlSqlParser.subprog_decl_in_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubprog_decl_in_type;
    /**
     * Visit a parse tree produced by `PlSqlParser.proc_decl_in_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProc_decl_in_type;
    /**
     * Visit a parse tree produced by `PlSqlParser.func_decl_in_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_decl_in_type;
    /**
     * Visit a parse tree produced by `PlSqlParser.constructor_declaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstructor_declaration;
    /**
     * Visit a parse tree produced by `PlSqlParser.modifier_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModifier_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.object_member_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_member_spec;
    /**
     * Visit a parse tree produced by `PlSqlParser.sqlj_object_type_attr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSqlj_object_type_attr;
    /**
     * Visit a parse tree produced by `PlSqlParser.element_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElement_spec;
    /**
     * Visit a parse tree produced by `PlSqlParser.element_spec_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElement_spec_options;
    /**
     * Visit a parse tree produced by `PlSqlParser.subprogram_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubprogram_spec;
    /**
     * Visit a parse tree produced by `PlSqlParser.overriding_subprogram_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOverriding_subprogram_spec;
    /**
     * Visit a parse tree produced by `PlSqlParser.overriding_function_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOverriding_function_spec;
    /**
     * Visit a parse tree produced by `PlSqlParser.type_procedure_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_procedure_spec;
    /**
     * Visit a parse tree produced by `PlSqlParser.type_function_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_function_spec;
    /**
     * Visit a parse tree produced by `PlSqlParser.constructor_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstructor_spec;
    /**
     * Visit a parse tree produced by `PlSqlParser.map_order_function_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMap_order_function_spec;
    /**
     * Visit a parse tree produced by `PlSqlParser.pragma_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPragma_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.pragma_elements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPragma_elements;
    /**
     * Visit a parse tree produced by `PlSqlParser.type_elements_parameter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_elements_parameter;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_sequence`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_sequence;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_sequence`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_sequence;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_session`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_session;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_session_set_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_session_set_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_sequence`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_sequence;
    /**
     * Visit a parse tree produced by `PlSqlParser.sequence_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSequence_spec;
    /**
     * Visit a parse tree produced by `PlSqlParser.sequence_start_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSequence_start_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_analytic_view`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_analytic_view;
    /**
     * Visit a parse tree produced by `PlSqlParser.classification_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClassification_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.caption_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCaption_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.description_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescription_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.classification_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClassification_item;
    /**
     * Visit a parse tree produced by `PlSqlParser.language`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLanguage;
    /**
     * Visit a parse tree produced by `PlSqlParser.cav_using_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCav_using_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.dim_by_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDim_by_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.dim_key`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDim_key;
    /**
     * Visit a parse tree produced by `PlSqlParser.dim_ref`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDim_ref;
    /**
     * Visit a parse tree produced by `PlSqlParser.hier_ref`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHier_ref;
    /**
     * Visit a parse tree produced by `PlSqlParser.measures_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMeasures_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.av_measure`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAv_measure;
    /**
     * Visit a parse tree produced by `PlSqlParser.base_meas_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBase_meas_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.meas_aggregate_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMeas_aggregate_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.calc_meas_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCalc_meas_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.default_measure_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefault_measure_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.default_aggregate_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefault_aggregate_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.cache_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCache_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.cache_specification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCache_specification;
    /**
     * Visit a parse tree produced by `PlSqlParser.levels_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLevels_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.level_specification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLevel_specification;
    /**
     * Visit a parse tree produced by `PlSqlParser.level_group_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLevel_group_type;
    /**
     * Visit a parse tree produced by `PlSqlParser.fact_columns_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFact_columns_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.qry_transform_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQry_transform_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_attribute_dimension`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_attribute_dimension;
    /**
     * Visit a parse tree produced by `PlSqlParser.ad_using_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAd_using_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.source_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSource_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.join_path_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoin_path_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.join_condition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoin_condition;
    /**
     * Visit a parse tree produced by `PlSqlParser.join_condition_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoin_condition_item;
    /**
     * Visit a parse tree produced by `PlSqlParser.attributes_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttributes_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.ad_attributes_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAd_attributes_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.ad_level_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAd_level_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.key_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKey_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.alternate_key_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlternate_key_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.dim_order_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDim_order_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.all_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAll_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_audit_policy`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_audit_policy;
    /**
     * Visit a parse tree produced by `PlSqlParser.privilege_audit_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrivilege_audit_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.action_audit_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAction_audit_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.system_actions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSystem_actions;
    /**
     * Visit a parse tree produced by `PlSqlParser.standard_actions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStandard_actions;
    /**
     * Visit a parse tree produced by `PlSqlParser.actions_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitActions_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.object_action`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_action;
    /**
     * Visit a parse tree produced by `PlSqlParser.system_action`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSystem_action;
    /**
     * Visit a parse tree produced by `PlSqlParser.component_actions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComponent_actions;
    /**
     * Visit a parse tree produced by `PlSqlParser.component_action`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComponent_action;
    /**
     * Visit a parse tree produced by `PlSqlParser.role_audit_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRole_audit_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_controlfile`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_controlfile;
    /**
     * Visit a parse tree produced by `PlSqlParser.controlfile_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitControlfile_options;
    /**
     * Visit a parse tree produced by `PlSqlParser.logfile_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogfile_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.character_set_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCharacter_set_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.file_specification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFile_specification;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_diskgroup`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_diskgroup;
    /**
     * Visit a parse tree produced by `PlSqlParser.qualified_disk_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualified_disk_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_edition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_edition;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_flashback_archive`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_flashback_archive;
    /**
     * Visit a parse tree produced by `PlSqlParser.flashback_archive_quota`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFlashback_archive_quota;
    /**
     * Visit a parse tree produced by `PlSqlParser.flashback_archive_retention`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFlashback_archive_retention;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_hierarchy`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_hierarchy;
    /**
     * Visit a parse tree produced by `PlSqlParser.hier_using_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHier_using_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.level_hier_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLevel_hier_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.hier_attrs_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHier_attrs_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.hier_attr_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHier_attr_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.hier_attr_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHier_attr_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_index`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_index;
    /**
     * Visit a parse tree produced by `PlSqlParser.cluster_index_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCluster_index_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.cluster_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCluster_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.table_index_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_index_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.bitmap_join_index_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBitmap_join_index_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.index_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_expr;
    /**
     * Visit a parse tree produced by `PlSqlParser.index_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_properties;
    /**
     * Visit a parse tree produced by `PlSqlParser.domain_index_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDomain_index_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.local_domain_index_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocal_domain_index_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.xmlindex_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmlindex_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.local_xmlindex_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocal_xmlindex_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.global_partitioned_index`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGlobal_partitioned_index;
    /**
     * Visit a parse tree produced by `PlSqlParser.index_partitioning_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_partitioning_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.index_partitioning_values_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_partitioning_values_list;
    /**
     * Visit a parse tree produced by `PlSqlParser.local_partitioned_index`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocal_partitioned_index;
    /**
     * Visit a parse tree produced by `PlSqlParser.on_range_partitioned_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOn_range_partitioned_table;
    /**
     * Visit a parse tree produced by `PlSqlParser.on_list_partitioned_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOn_list_partitioned_table;
    /**
     * Visit a parse tree produced by `PlSqlParser.partitioned_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitioned_table;
    /**
     * Visit a parse tree produced by `PlSqlParser.on_hash_partitioned_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOn_hash_partitioned_table;
    /**
     * Visit a parse tree produced by `PlSqlParser.on_hash_partitioned_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOn_hash_partitioned_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.on_comp_partitioned_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOn_comp_partitioned_table;
    /**
     * Visit a parse tree produced by `PlSqlParser.on_comp_partitioned_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOn_comp_partitioned_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.index_subpartition_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_subpartition_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.index_subpartition_subclause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_subpartition_subclause;
    /**
     * Visit a parse tree produced by `PlSqlParser.odci_parameters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOdci_parameters;
    /**
     * Visit a parse tree produced by `PlSqlParser.indextype`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndextype;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_index`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_index;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_index_ops_set1`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_index_ops_set1;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_index_ops_set2`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_index_ops_set2;
    /**
     * Visit a parse tree produced by `PlSqlParser.visible_or_invisible`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVisible_or_invisible;
    /**
     * Visit a parse tree produced by `PlSqlParser.monitoring_nomonitoring`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMonitoring_nomonitoring;
    /**
     * Visit a parse tree produced by `PlSqlParser.rebuild_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRebuild_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_index_partitioning`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_index_partitioning;
    /**
     * Visit a parse tree produced by `PlSqlParser.modify_index_default_attrs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModify_index_default_attrs;
    /**
     * Visit a parse tree produced by `PlSqlParser.add_hash_index_partition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdd_hash_index_partition;
    /**
     * Visit a parse tree produced by `PlSqlParser.coalesce_index_partition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCoalesce_index_partition;
    /**
     * Visit a parse tree produced by `PlSqlParser.modify_index_partition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModify_index_partition;
    /**
     * Visit a parse tree produced by `PlSqlParser.modify_index_partitions_ops`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModify_index_partitions_ops;
    /**
     * Visit a parse tree produced by `PlSqlParser.rename_index_partition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRename_index_partition;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_index_partition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_index_partition;
    /**
     * Visit a parse tree produced by `PlSqlParser.split_index_partition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSplit_index_partition;
    /**
     * Visit a parse tree produced by `PlSqlParser.index_partition_description`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_partition_description;
    /**
     * Visit a parse tree produced by `PlSqlParser.modify_index_subpartition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModify_index_subpartition;
    /**
     * Visit a parse tree produced by `PlSqlParser.partition_name_old`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartition_name_old;
    /**
     * Visit a parse tree produced by `PlSqlParser.new_partition_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNew_partition_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.new_index_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNew_index_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_inmemory_join_group`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_inmemory_join_group;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_user`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_user;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_user`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_user;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_user`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_user;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_identified_by`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_identified_by;
    /**
     * Visit a parse tree produced by `PlSqlParser.identified_by`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentified_by;
    /**
     * Visit a parse tree produced by `PlSqlParser.identified_other_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentified_other_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.user_tablespace_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUser_tablespace_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.quota_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuota_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.profile_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProfile_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.role_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRole_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.user_default_role_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUser_default_role_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.password_expire_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPassword_expire_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.user_lock_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUser_lock_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.user_editions_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUser_editions_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_user_editions_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_user_editions_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.proxy_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProxy_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.container_names`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContainer_names;
    /**
     * Visit a parse tree produced by `PlSqlParser.set_container_data`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_container_data;
    /**
     * Visit a parse tree produced by `PlSqlParser.add_rem_container_data`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdd_rem_container_data;
    /**
     * Visit a parse tree produced by `PlSqlParser.container_data_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContainer_data_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.administer_key_management`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdminister_key_management;
    /**
     * Visit a parse tree produced by `PlSqlParser.keystore_management_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKeystore_management_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_keystore`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_keystore;
    /**
     * Visit a parse tree produced by `PlSqlParser.open_keystore`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpen_keystore;
    /**
     * Visit a parse tree produced by `PlSqlParser.force_keystore`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForce_keystore;
    /**
     * Visit a parse tree produced by `PlSqlParser.close_keystore`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClose_keystore;
    /**
     * Visit a parse tree produced by `PlSqlParser.backup_keystore`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBackup_keystore;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_keystore_password`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_keystore_password;
    /**
     * Visit a parse tree produced by `PlSqlParser.merge_into_new_keystore`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMerge_into_new_keystore;
    /**
     * Visit a parse tree produced by `PlSqlParser.merge_into_existing_keystore`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMerge_into_existing_keystore;
    /**
     * Visit a parse tree produced by `PlSqlParser.isolate_keystore`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIsolate_keystore;
    /**
     * Visit a parse tree produced by `PlSqlParser.unite_keystore`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnite_keystore;
    /**
     * Visit a parse tree produced by `PlSqlParser.key_management_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKey_management_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.set_key`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_key;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_key`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_key;
    /**
     * Visit a parse tree produced by `PlSqlParser.mkid`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMkid;
    /**
     * Visit a parse tree produced by `PlSqlParser.mk`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMk;
    /**
     * Visit a parse tree produced by `PlSqlParser.use_key`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUse_key;
    /**
     * Visit a parse tree produced by `PlSqlParser.set_key_tag`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_key_tag;
    /**
     * Visit a parse tree produced by `PlSqlParser.export_keys`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExport_keys;
    /**
     * Visit a parse tree produced by `PlSqlParser.import_keys`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImport_keys;
    /**
     * Visit a parse tree produced by `PlSqlParser.migrate_keys`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMigrate_keys;
    /**
     * Visit a parse tree produced by `PlSqlParser.reverse_migrate_keys`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReverse_migrate_keys;
    /**
     * Visit a parse tree produced by `PlSqlParser.move_keys`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMove_keys;
    /**
     * Visit a parse tree produced by `PlSqlParser.identified_by_store`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentified_by_store;
    /**
     * Visit a parse tree produced by `PlSqlParser.using_algorithm_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUsing_algorithm_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.using_tag_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUsing_tag_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.secret_management_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSecret_management_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.add_update_secret`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdd_update_secret;
    /**
     * Visit a parse tree produced by `PlSqlParser.delete_secret`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDelete_secret;
    /**
     * Visit a parse tree produced by `PlSqlParser.add_update_secret_seps`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdd_update_secret_seps;
    /**
     * Visit a parse tree produced by `PlSqlParser.delete_secret_seps`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDelete_secret_seps;
    /**
     * Visit a parse tree produced by `PlSqlParser.zero_downtime_software_patching_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitZero_downtime_software_patching_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.with_backup_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWith_backup_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.identified_by_password_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentified_by_password_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.keystore_password`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKeystore_password;
    /**
     * Visit a parse tree produced by `PlSqlParser.path`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPath;
    /**
     * Visit a parse tree produced by `PlSqlParser.secret`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSecret;
    /**
     * Visit a parse tree produced by `PlSqlParser.analyze`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyze;
    /**
     * Visit a parse tree produced by `PlSqlParser.partition_extention_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartition_extention_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.validation_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValidation_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.compute_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompute_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.for_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFor_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.online_or_offline`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOnline_or_offline;
    /**
     * Visit a parse tree produced by `PlSqlParser.into_clause1`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInto_clause1;
    /**
     * Visit a parse tree produced by `PlSqlParser.partition_key_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartition_key_value;
    /**
     * Visit a parse tree produced by `PlSqlParser.subpartition_key_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubpartition_key_value;
    /**
     * Visit a parse tree produced by `PlSqlParser.associate_statistics`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssociate_statistics;
    /**
     * Visit a parse tree produced by `PlSqlParser.column_association`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_association;
    /**
     * Visit a parse tree produced by `PlSqlParser.function_association`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_association;
    /**
     * Visit a parse tree produced by `PlSqlParser.indextype_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndextype_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.using_statistics_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUsing_statistics_type;
    /**
     * Visit a parse tree produced by `PlSqlParser.statistics_type_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatistics_type_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.default_cost_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefault_cost_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.cpu_cost`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCpu_cost;
    /**
     * Visit a parse tree produced by `PlSqlParser.io_cost`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIo_cost;
    /**
     * Visit a parse tree produced by `PlSqlParser.network_cost`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNetwork_cost;
    /**
     * Visit a parse tree produced by `PlSqlParser.default_selectivity_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefault_selectivity_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.default_selectivity`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefault_selectivity;
    /**
     * Visit a parse tree produced by `PlSqlParser.storage_table_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStorage_table_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.unified_auditing`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnified_auditing;
    /**
     * Visit a parse tree produced by `PlSqlParser.policy_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPolicy_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.audit_traditional`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAudit_traditional;
    /**
     * Visit a parse tree produced by `PlSqlParser.audit_direct_path`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAudit_direct_path;
    /**
     * Visit a parse tree produced by `PlSqlParser.audit_container_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAudit_container_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.audit_operation_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAudit_operation_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.auditing_by_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAuditing_by_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.audit_user`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAudit_user;
    /**
     * Visit a parse tree produced by `PlSqlParser.audit_schema_object_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAudit_schema_object_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.sql_operation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSql_operation;
    /**
     * Visit a parse tree produced by `PlSqlParser.auditing_on_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAuditing_on_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.model_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModel_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.object_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.profile_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProfile_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.sql_statement_shortcut`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSql_statement_shortcut;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_index`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_index;
    /**
     * Visit a parse tree produced by `PlSqlParser.disassociate_statistics`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDisassociate_statistics;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_indextype`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_indextype;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_inmemory_join_group`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_inmemory_join_group;
    /**
     * Visit a parse tree produced by `PlSqlParser.flashback_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFlashback_table;
    /**
     * Visit a parse tree produced by `PlSqlParser.restore_point`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRestore_point;
    /**
     * Visit a parse tree produced by `PlSqlParser.purge_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPurge_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.noaudit_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNoaudit_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.rename_object`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRename_object;
    /**
     * Visit a parse tree produced by `PlSqlParser.grant_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrant_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.container_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContainer_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.revoke_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRevoke_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.revoke_system_privilege`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRevoke_system_privilege;
    /**
     * Visit a parse tree produced by `PlSqlParser.revokee_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRevokee_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.revoke_object_privileges`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRevoke_object_privileges;
    /**
     * Visit a parse tree produced by `PlSqlParser.on_object_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOn_object_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.revoke_roles_from_programs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRevoke_roles_from_programs;
    /**
     * Visit a parse tree produced by `PlSqlParser.program_unit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram_unit;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_dimension`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_dimension;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_directory`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_directory;
    /**
     * Visit a parse tree produced by `PlSqlParser.directory_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDirectory_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.directory_path`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDirectory_path;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_inmemory_join_group`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_inmemory_join_group;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_hierarchy`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_hierarchy;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_library`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_library;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_java`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_java;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_library`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_library;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_java`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_java;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_library`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_library;
    /**
     * Visit a parse tree produced by `PlSqlParser.plsql_library_source`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPlsql_library_source;
    /**
     * Visit a parse tree produced by `PlSqlParser.credential_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCredential_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.library_editionable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLibrary_editionable;
    /**
     * Visit a parse tree produced by `PlSqlParser.library_debug`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLibrary_debug;
    /**
     * Visit a parse tree produced by `PlSqlParser.compiler_parameters_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompiler_parameters_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.parameter_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameter_value;
    /**
     * Visit a parse tree produced by `PlSqlParser.library_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLibrary_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_dimension`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_dimension;
    /**
     * Visit a parse tree produced by `PlSqlParser.level_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLevel_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.hierarchy_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHierarchy_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.dimension_join_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDimension_join_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.attribute_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttribute_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.extended_attribute_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtended_attribute_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.column_one_or_more_sub_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_one_or_more_sub_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_view`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_view;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_view_editionable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_view_editionable;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_view`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_view;
    /**
     * Visit a parse tree produced by `PlSqlParser.editioning_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEditioning_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.view_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitView_options;
    /**
     * Visit a parse tree produced by `PlSqlParser.view_alias_constraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitView_alias_constraint;
    /**
     * Visit a parse tree produced by `PlSqlParser.object_view_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_view_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.inline_constraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInline_constraint;
    /**
     * Visit a parse tree produced by `PlSqlParser.inline_ref_constraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInline_ref_constraint;
    /**
     * Visit a parse tree produced by `PlSqlParser.out_of_line_ref_constraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOut_of_line_ref_constraint;
    /**
     * Visit a parse tree produced by `PlSqlParser.out_of_line_constraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOut_of_line_constraint;
    /**
     * Visit a parse tree produced by `PlSqlParser.constraint_state`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstraint_state;
    /**
     * Visit a parse tree produced by `PlSqlParser.xmltype_view_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmltype_view_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.xml_schema_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_schema_spec;
    /**
     * Visit a parse tree produced by `PlSqlParser.xml_schema_url`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_schema_url;
    /**
     * Visit a parse tree produced by `PlSqlParser.element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElement;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_tablespace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_tablespace;
    /**
     * Visit a parse tree produced by `PlSqlParser.datafile_tempfile_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatafile_tempfile_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.tablespace_logging_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablespace_logging_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.tablespace_group_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablespace_group_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.tablespace_group_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablespace_group_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.tablespace_state_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablespace_state_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.flashback_mode_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFlashback_mode_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.new_tablespace_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNew_tablespace_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_tablespace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_tablespace;
    /**
     * Visit a parse tree produced by `PlSqlParser.permanent_tablespace_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPermanent_tablespace_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.tablespace_encryption_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablespace_encryption_spec;
    /**
     * Visit a parse tree produced by `PlSqlParser.logging_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogging_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.extent_management_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtent_management_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.segment_management_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSegment_management_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.temporary_tablespace_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTemporary_tablespace_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.undo_tablespace_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUndo_tablespace_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.tablespace_retention_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablespace_retention_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_tablespace_set`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_tablespace_set;
    /**
     * Visit a parse tree produced by `PlSqlParser.permanent_tablespace_attrs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPermanent_tablespace_attrs;
    /**
     * Visit a parse tree produced by `PlSqlParser.tablespace_encryption_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablespace_encryption_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.default_tablespace_params`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefault_tablespace_params;
    /**
     * Visit a parse tree produced by `PlSqlParser.default_table_compression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefault_table_compression;
    /**
     * Visit a parse tree produced by `PlSqlParser.low_high`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLow_high;
    /**
     * Visit a parse tree produced by `PlSqlParser.default_index_compression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefault_index_compression;
    /**
     * Visit a parse tree produced by `PlSqlParser.inmmemory_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInmmemory_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.datafile_specification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatafile_specification;
    /**
     * Visit a parse tree produced by `PlSqlParser.tempfile_specification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTempfile_specification;
    /**
     * Visit a parse tree produced by `PlSqlParser.datafile_tempfile_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatafile_tempfile_spec;
    /**
     * Visit a parse tree produced by `PlSqlParser.redo_log_file_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRedo_log_file_spec;
    /**
     * Visit a parse tree produced by `PlSqlParser.autoextend_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAutoextend_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.maxsize_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMaxsize_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.build_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBuild_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.parallel_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParallel_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_materialized_view`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_materialized_view;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_mv_option1`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_mv_option1;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_mv_refresh`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_mv_refresh;
    /**
     * Visit a parse tree produced by `PlSqlParser.rollback_segment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRollback_segment;
    /**
     * Visit a parse tree produced by `PlSqlParser.modify_mv_column_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModify_mv_column_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_materialized_view_log`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_materialized_view_log;
    /**
     * Visit a parse tree produced by `PlSqlParser.add_mv_log_column_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdd_mv_log_column_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.move_mv_log_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMove_mv_log_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.mv_log_augmentation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMv_log_augmentation;
    /**
     * Visit a parse tree produced by `PlSqlParser.datetime_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatetime_expr;
    /**
     * Visit a parse tree produced by `PlSqlParser.interval_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterval_expr;
    /**
     * Visit a parse tree produced by `PlSqlParser.synchronous_or_asynchronous`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSynchronous_or_asynchronous;
    /**
     * Visit a parse tree produced by `PlSqlParser.including_or_excluding`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIncluding_or_excluding;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_materialized_view_log`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_materialized_view_log;
    /**
     * Visit a parse tree produced by `PlSqlParser.new_values_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNew_values_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.mv_log_purge_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMv_log_purge_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_materialized_zonemap`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_materialized_zonemap;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_materialized_zonemap`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_materialized_zonemap;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_materialized_zonemap`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_materialized_zonemap;
    /**
     * Visit a parse tree produced by `PlSqlParser.zonemap_refresh_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitZonemap_refresh_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.zonemap_attributes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitZonemap_attributes;
    /**
     * Visit a parse tree produced by `PlSqlParser.zonemap_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitZonemap_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.operator_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperator_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.operator_function_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperator_function_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_zonemap_on_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_zonemap_on_table;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_zonemap_as_subquery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_zonemap_as_subquery;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_operator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_operator;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_operator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_operator;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_operator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_operator;
    /**
     * Visit a parse tree produced by `PlSqlParser.binding_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBinding_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.add_binding_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdd_binding_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.implementation_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImplementation_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.primary_operator_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimary_operator_list;
    /**
     * Visit a parse tree produced by `PlSqlParser.primary_operator_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimary_operator_item;
    /**
     * Visit a parse tree produced by `PlSqlParser.operator_context_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperator_context_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.using_function_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUsing_function_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_binding_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_binding_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_materialized_view`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_materialized_view;
    /**
     * Visit a parse tree produced by `PlSqlParser.scoped_table_ref_constraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitScoped_table_ref_constraint;
    /**
     * Visit a parse tree produced by `PlSqlParser.mv_column_alias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMv_column_alias;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_mv_refresh`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_mv_refresh;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_materialized_view`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_materialized_view;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_context`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_context;
    /**
     * Visit a parse tree produced by `PlSqlParser.oracle_namespace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOracle_namespace;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_cluster`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_cluster;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_profile`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_profile;
    /**
     * Visit a parse tree produced by `PlSqlParser.resource_parameters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResource_parameters;
    /**
     * Visit a parse tree produced by `PlSqlParser.password_parameters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPassword_parameters;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_lockdown_profile`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_lockdown_profile;
    /**
     * Visit a parse tree produced by `PlSqlParser.static_base_profile`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatic_base_profile;
    /**
     * Visit a parse tree produced by `PlSqlParser.dynamic_base_profile`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDynamic_base_profile;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_outline`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_outline;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_restore_point`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_restore_point;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_role`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_role;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_table;
    /**
     * Visit a parse tree produced by `PlSqlParser.xmltype_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmltype_table;
    /**
     * Visit a parse tree produced by `PlSqlParser.xmltype_virtual_columns`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmltype_virtual_columns;
    /**
     * Visit a parse tree produced by `PlSqlParser.xmltype_column_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmltype_column_properties;
    /**
     * Visit a parse tree produced by `PlSqlParser.xmltype_storage`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmltype_storage;
    /**
     * Visit a parse tree produced by `PlSqlParser.xmlschema_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmlschema_spec;
    /**
     * Visit a parse tree produced by `PlSqlParser.object_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_table;
    /**
     * Visit a parse tree produced by `PlSqlParser.object_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_type;
    /**
     * Visit a parse tree produced by `PlSqlParser.oid_index_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOid_index_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.oid_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOid_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.object_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_properties;
    /**
     * Visit a parse tree produced by `PlSqlParser.object_table_substitution`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_table_substitution;
    /**
     * Visit a parse tree produced by `PlSqlParser.relational_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelational_table;
    /**
     * Visit a parse tree produced by `PlSqlParser.immutable_table_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImmutable_table_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.immutable_table_no_drop_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImmutable_table_no_drop_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.immutable_table_no_delete_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImmutable_table_no_delete_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.blockchain_table_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlockchain_table_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.blockchain_drop_table_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlockchain_drop_table_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.blockchain_row_retention_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlockchain_row_retention_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.blockchain_hash_and_data_format_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlockchain_hash_and_data_format_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.collation_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCollation_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.table_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_properties;
    /**
     * Visit a parse tree produced by `PlSqlParser.read_only_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRead_only_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.indexing_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndexing_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.attribute_clustering_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttribute_clustering_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.clustering_join`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClustering_join;
    /**
     * Visit a parse tree produced by `PlSqlParser.clustering_join_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClustering_join_item;
    /**
     * Visit a parse tree produced by `PlSqlParser.equijoin_condition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEquijoin_condition;
    /**
     * Visit a parse tree produced by `PlSqlParser.cluster_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCluster_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.clustering_columns`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClustering_columns;
    /**
     * Visit a parse tree produced by `PlSqlParser.clustering_column_group`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClustering_column_group;
    /**
     * Visit a parse tree produced by `PlSqlParser.yes_no`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYes_no;
    /**
     * Visit a parse tree produced by `PlSqlParser.zonemap_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitZonemap_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.logical_replication_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogical_replication_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.table_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.relational_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelational_property;
    /**
     * Visit a parse tree produced by `PlSqlParser.table_partitioning_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_partitioning_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.range_partitions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRange_partitions;
    /**
     * Visit a parse tree produced by `PlSqlParser.list_partitions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitList_partitions;
    /**
     * Visit a parse tree produced by `PlSqlParser.hash_partitions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHash_partitions;
    /**
     * Visit a parse tree produced by `PlSqlParser.individual_hash_partitions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndividual_hash_partitions;
    /**
     * Visit a parse tree produced by `PlSqlParser.hash_partitions_by_quantity`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHash_partitions_by_quantity;
    /**
     * Visit a parse tree produced by `PlSqlParser.hash_partition_quantity`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHash_partition_quantity;
    /**
     * Visit a parse tree produced by `PlSqlParser.composite_range_partitions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComposite_range_partitions;
    /**
     * Visit a parse tree produced by `PlSqlParser.composite_list_partitions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComposite_list_partitions;
    /**
     * Visit a parse tree produced by `PlSqlParser.composite_hash_partitions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComposite_hash_partitions;
    /**
     * Visit a parse tree produced by `PlSqlParser.reference_partitioning`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReference_partitioning;
    /**
     * Visit a parse tree produced by `PlSqlParser.reference_partition_desc`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReference_partition_desc;
    /**
     * Visit a parse tree produced by `PlSqlParser.system_partitioning`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSystem_partitioning;
    /**
     * Visit a parse tree produced by `PlSqlParser.range_partition_desc`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRange_partition_desc;
    /**
     * Visit a parse tree produced by `PlSqlParser.list_partition_desc`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitList_partition_desc;
    /**
     * Visit a parse tree produced by `PlSqlParser.subpartition_template`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubpartition_template;
    /**
     * Visit a parse tree produced by `PlSqlParser.hash_subpartition_quantity`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHash_subpartition_quantity;
    /**
     * Visit a parse tree produced by `PlSqlParser.subpartition_by_range`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubpartition_by_range;
    /**
     * Visit a parse tree produced by `PlSqlParser.subpartition_by_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubpartition_by_list;
    /**
     * Visit a parse tree produced by `PlSqlParser.subpartition_by_hash`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubpartition_by_hash;
    /**
     * Visit a parse tree produced by `PlSqlParser.subpartition_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubpartition_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.range_subpartition_desc`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRange_subpartition_desc;
    /**
     * Visit a parse tree produced by `PlSqlParser.list_subpartition_desc`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitList_subpartition_desc;
    /**
     * Visit a parse tree produced by `PlSqlParser.individual_hash_subparts`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndividual_hash_subparts;
    /**
     * Visit a parse tree produced by `PlSqlParser.hash_subparts_by_quantity`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHash_subparts_by_quantity;
    /**
     * Visit a parse tree produced by `PlSqlParser.range_values_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRange_values_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.range_values_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRange_values_list;
    /**
     * Visit a parse tree produced by `PlSqlParser.list_values_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitList_values_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.table_partition_description`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_partition_description;
    /**
     * Visit a parse tree produced by `PlSqlParser.partitioning_storage_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitioning_storage_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.lob_partitioning_storage`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLob_partitioning_storage;
    /**
     * Visit a parse tree produced by `PlSqlParser.datatype_null_enable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatatype_null_enable;
    /**
     * Visit a parse tree produced by `PlSqlParser.size_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSize_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.table_compression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_compression;
    /**
     * Visit a parse tree produced by `PlSqlParser.inmemory_table_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInmemory_table_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.inmemory_attributes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInmemory_attributes;
    /**
     * Visit a parse tree produced by `PlSqlParser.inmemory_memcompress`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInmemory_memcompress;
    /**
     * Visit a parse tree produced by `PlSqlParser.inmemory_priority`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInmemory_priority;
    /**
     * Visit a parse tree produced by `PlSqlParser.inmemory_distribute`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInmemory_distribute;
    /**
     * Visit a parse tree produced by `PlSqlParser.inmemory_duplicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInmemory_duplicate;
    /**
     * Visit a parse tree produced by `PlSqlParser.inmemory_column_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInmemory_column_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.physical_attributes_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPhysical_attributes_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.storage_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStorage_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.deferred_segment_creation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeferred_segment_creation;
    /**
     * Visit a parse tree produced by `PlSqlParser.segment_attributes_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSegment_attributes_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.physical_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPhysical_properties;
    /**
     * Visit a parse tree produced by `PlSqlParser.ilm_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIlm_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.ilm_policy_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIlm_policy_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.ilm_compression_policy`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIlm_compression_policy;
    /**
     * Visit a parse tree produced by `PlSqlParser.ilm_tiering_policy`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIlm_tiering_policy;
    /**
     * Visit a parse tree produced by `PlSqlParser.ilm_after_on`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIlm_after_on;
    /**
     * Visit a parse tree produced by `PlSqlParser.segment_group`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSegment_group;
    /**
     * Visit a parse tree produced by `PlSqlParser.ilm_inmemory_policy`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIlm_inmemory_policy;
    /**
     * Visit a parse tree produced by `PlSqlParser.ilm_time_period`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIlm_time_period;
    /**
     * Visit a parse tree produced by `PlSqlParser.heap_org_table_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHeap_org_table_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.external_table_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExternal_table_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.access_driver_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAccess_driver_type;
    /**
     * Visit a parse tree produced by `PlSqlParser.external_table_data_props`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExternal_table_data_props;
    /**
     * Visit a parse tree produced by `PlSqlParser.opaque_format_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpaque_format_spec;
    /**
     * Visit a parse tree produced by `PlSqlParser.row_movement_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRow_movement_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.flashback_archive_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFlashback_archive_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.log_grp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLog_grp;
    /**
     * Visit a parse tree produced by `PlSqlParser.supplemental_table_logging`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSupplemental_table_logging;
    /**
     * Visit a parse tree produced by `PlSqlParser.supplemental_log_grp_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSupplemental_log_grp_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.supplemental_id_key_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSupplemental_id_key_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.allocate_extent_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAllocate_extent_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.deallocate_unused_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeallocate_unused_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.shrink_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShrink_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.records_per_block_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRecords_per_block_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.upgrade_table_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpgrade_table_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.truncate_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTruncate_table;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_table;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_tablespace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_tablespace;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_tablespace_set`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_tablespace_set;
    /**
     * Visit a parse tree produced by `PlSqlParser.including_contents_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIncluding_contents_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_view`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_view;
    /**
     * Visit a parse tree produced by `PlSqlParser.comment_on_column`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComment_on_column;
    /**
     * Visit a parse tree produced by `PlSqlParser.enable_or_disable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnable_or_disable;
    /**
     * Visit a parse tree produced by `PlSqlParser.allow_or_disallow`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAllow_or_disallow;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_synonym`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_synonym;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_synonym`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_synonym;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_synonym`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_synonym;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_spfile`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_spfile;
    /**
     * Visit a parse tree produced by `PlSqlParser.spfile_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSpfile_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.pfile_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPfile_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.comment_on_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComment_on_table;
    /**
     * Visit a parse tree produced by `PlSqlParser.comment_on_materialized`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComment_on_materialized;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_analytic_view`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_analytic_view;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_add_cache_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_add_cache_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.levels_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLevels_item;
    /**
     * Visit a parse tree produced by `PlSqlParser.measure_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMeasure_list;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_drop_cache_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_drop_cache_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_attribute_dimension`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_attribute_dimension;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_audit_policy`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_audit_policy;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_cluster`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_cluster;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_analytic_view`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_analytic_view;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_attribute_dimension`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_attribute_dimension;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_audit_policy`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_audit_policy;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_flashback_archive`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_flashback_archive;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_cluster`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_cluster;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_context`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_context;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_directory`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_directory;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_diskgroup`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_diskgroup;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_edition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_edition;
    /**
     * Visit a parse tree produced by `PlSqlParser.truncate_cluster`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTruncate_cluster;
    /**
     * Visit a parse tree produced by `PlSqlParser.cache_or_nocache`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCache_or_nocache;
    /**
     * Visit a parse tree produced by `PlSqlParser.database_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatabase_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_database`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_database;
    /**
     * Visit a parse tree produced by `PlSqlParser.database_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatabase_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.startup_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStartup_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.resetlogs_or_noresetlogs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResetlogs_or_noresetlogs;
    /**
     * Visit a parse tree produced by `PlSqlParser.upgrade_or_downgrade`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpgrade_or_downgrade;
    /**
     * Visit a parse tree produced by `PlSqlParser.recovery_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRecovery_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.begin_or_end`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBegin_or_end;
    /**
     * Visit a parse tree produced by `PlSqlParser.general_recovery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeneral_recovery;
    /**
     * Visit a parse tree produced by `PlSqlParser.full_database_recovery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFull_database_recovery;
    /**
     * Visit a parse tree produced by `PlSqlParser.partial_database_recovery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartial_database_recovery;
    /**
     * Visit a parse tree produced by `PlSqlParser.partial_database_recovery_10g`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartial_database_recovery_10g;
    /**
     * Visit a parse tree produced by `PlSqlParser.managed_standby_recovery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitManaged_standby_recovery;
    /**
     * Visit a parse tree produced by `PlSqlParser.db_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDb_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.database_file_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatabase_file_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_datafile_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_datafile_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_datafile_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_datafile_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_tempfile_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_tempfile_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.move_datafile_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMove_datafile_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.logfile_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogfile_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.add_logfile_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdd_logfile_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.group_redo_logfile`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroup_redo_logfile;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_logfile_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_logfile_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.switch_logfile_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSwitch_logfile_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.supplemental_db_logging`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSupplemental_db_logging;
    /**
     * Visit a parse tree produced by `PlSqlParser.add_or_drop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdd_or_drop;
    /**
     * Visit a parse tree produced by `PlSqlParser.supplemental_plsql_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSupplemental_plsql_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.logfile_descriptor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogfile_descriptor;
    /**
     * Visit a parse tree produced by `PlSqlParser.controlfile_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitControlfile_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.trace_file_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrace_file_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.standby_database_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStandby_database_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.activate_standby_db_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitActivate_standby_db_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.maximize_standby_db_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMaximize_standby_db_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.register_logfile_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRegister_logfile_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.commit_switchover_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommit_switchover_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.start_standby_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStart_standby_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.stop_standby_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStop_standby_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.convert_database_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConvert_database_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.default_settings_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefault_settings_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.set_time_zone_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_time_zone_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.instance_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInstance_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.security_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSecurity_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.domain`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDomain;
    /**
     * Visit a parse tree produced by `PlSqlParser.database`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatabase;
    /**
     * Visit a parse tree produced by `PlSqlParser.edition_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEdition_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.filenumber`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFilenumber;
    /**
     * Visit a parse tree produced by `PlSqlParser.filename`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFilename;
    /**
     * Visit a parse tree produced by `PlSqlParser.prepare_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrepare_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_mirror_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_mirror_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.lost_write_protection`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLost_write_protection;
    /**
     * Visit a parse tree produced by `PlSqlParser.cdb_fleet_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCdb_fleet_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.lead_cdb_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLead_cdb_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.lead_cdb_uri_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLead_cdb_uri_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.property_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProperty_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.replay_upgrade_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplay_upgrade_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_database_link`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_database_link;
    /**
     * Visit a parse tree produced by `PlSqlParser.password_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPassword_value;
    /**
     * Visit a parse tree produced by `PlSqlParser.link_authentication`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLink_authentication;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_database`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_database;
    /**
     * Visit a parse tree produced by `PlSqlParser.database_logging_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatabase_logging_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.database_logging_sub_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatabase_logging_sub_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.tablespace_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablespace_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.enable_pluggable_database`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnable_pluggable_database;
    /**
     * Visit a parse tree produced by `PlSqlParser.file_name_convert`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFile_name_convert;
    /**
     * Visit a parse tree produced by `PlSqlParser.filename_convert_sub_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFilename_convert_sub_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.tablespace_datafile_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablespace_datafile_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.undo_mode_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUndo_mode_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.default_tablespace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefault_tablespace;
    /**
     * Visit a parse tree produced by `PlSqlParser.default_temp_tablespace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefault_temp_tablespace;
    /**
     * Visit a parse tree produced by `PlSqlParser.undo_tablespace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUndo_tablespace;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_database`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_database;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_database_link`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_database_link;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_database_link`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_database_link;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_tablespace_set`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_tablespace_set;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_tablespace_attrs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_tablespace_attrs;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_tablespace_encryption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_tablespace_encryption;
    /**
     * Visit a parse tree produced by `PlSqlParser.ts_file_name_convert`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTs_file_name_convert;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_role`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_role;
    /**
     * Visit a parse tree produced by `PlSqlParser.role_identified_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRole_identified_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_table;
    /**
     * Visit a parse tree produced by `PlSqlParser.memoptimize_read_write_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMemoptimize_read_write_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_table_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_table_properties;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_table_partitioning`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_table_partitioning;
    /**
     * Visit a parse tree produced by `PlSqlParser.add_table_partition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdd_table_partition;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_table_partition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_table_partition;
    /**
     * Visit a parse tree produced by `PlSqlParser.merge_table_partition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMerge_table_partition;
    /**
     * Visit a parse tree produced by `PlSqlParser.modify_table_partition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModify_table_partition;
    /**
     * Visit a parse tree produced by `PlSqlParser.split_table_partition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSplit_table_partition;
    /**
     * Visit a parse tree produced by `PlSqlParser.truncate_table_partition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTruncate_table_partition;
    /**
     * Visit a parse tree produced by `PlSqlParser.exchange_table_partition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExchange_table_partition;
    /**
     * Visit a parse tree produced by `PlSqlParser.coalesce_table_partition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCoalesce_table_partition;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_interval_partition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_interval_partition;
    /**
     * Visit a parse tree produced by `PlSqlParser.partition_extended_names`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartition_extended_names;
    /**
     * Visit a parse tree produced by `PlSqlParser.subpartition_extended_names`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubpartition_extended_names;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_table_properties_1`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_table_properties_1;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_iot_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_iot_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_mapping_table_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_mapping_table_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_overflow_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_overflow_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.add_overflow_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdd_overflow_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.update_index_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdate_index_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.update_global_index_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdate_global_index_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.update_all_indexes_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdate_all_indexes_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.update_all_indexes_index_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdate_all_indexes_index_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.update_index_partition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdate_index_partition;
    /**
     * Visit a parse tree produced by `PlSqlParser.update_index_subpartition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdate_index_subpartition;
    /**
     * Visit a parse tree produced by `PlSqlParser.enable_disable_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnable_disable_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.using_index_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUsing_index_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.index_attributes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_attributes;
    /**
     * Visit a parse tree produced by `PlSqlParser.sort_or_nosort`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSort_or_nosort;
    /**
     * Visit a parse tree produced by `PlSqlParser.exceptions_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExceptions_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.move_table_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMove_table_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.index_org_table_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_org_table_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.mapping_table_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMapping_table_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.key_compression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKey_compression;
    /**
     * Visit a parse tree produced by `PlSqlParser.index_org_overflow_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_org_overflow_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.column_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.modify_collection_retrieval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModify_collection_retrieval;
    /**
     * Visit a parse tree produced by `PlSqlParser.collection_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCollection_item;
    /**
     * Visit a parse tree produced by `PlSqlParser.rename_column_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRename_column_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.old_column_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOld_column_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.new_column_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNew_column_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.add_modify_drop_column_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdd_modify_drop_column_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_column_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_column_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.modify_column_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModify_column_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.modify_col_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModify_col_properties;
    /**
     * Visit a parse tree produced by `PlSqlParser.modify_col_visibility`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModify_col_visibility;
    /**
     * Visit a parse tree produced by `PlSqlParser.modify_col_substitutable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModify_col_substitutable;
    /**
     * Visit a parse tree produced by `PlSqlParser.add_column_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdd_column_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_varray_col_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_varray_col_properties;
    /**
     * Visit a parse tree produced by `PlSqlParser.varray_col_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVarray_col_properties;
    /**
     * Visit a parse tree produced by `PlSqlParser.varray_storage_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVarray_storage_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.lob_segname`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLob_segname;
    /**
     * Visit a parse tree produced by `PlSqlParser.lob_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLob_item;
    /**
     * Visit a parse tree produced by `PlSqlParser.lob_storage_parameters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLob_storage_parameters;
    /**
     * Visit a parse tree produced by `PlSqlParser.lob_storage_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLob_storage_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.modify_lob_storage_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModify_lob_storage_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.modify_lob_parameters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModify_lob_parameters;
    /**
     * Visit a parse tree produced by `PlSqlParser.lob_parameters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLob_parameters;
    /**
     * Visit a parse tree produced by `PlSqlParser.lob_deduplicate_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLob_deduplicate_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.lob_compression_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLob_compression_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.lob_retention_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLob_retention_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.encryption_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEncryption_spec;
    /**
     * Visit a parse tree produced by `PlSqlParser.tablespace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablespace;
    /**
     * Visit a parse tree produced by `PlSqlParser.varray_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVarray_item;
    /**
     * Visit a parse tree produced by `PlSqlParser.column_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_properties;
    /**
     * Visit a parse tree produced by `PlSqlParser.lob_partition_storage`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLob_partition_storage;
    /**
     * Visit a parse tree produced by `PlSqlParser.period_definition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPeriod_definition;
    /**
     * Visit a parse tree produced by `PlSqlParser.start_time_column`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStart_time_column;
    /**
     * Visit a parse tree produced by `PlSqlParser.end_time_column`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnd_time_column;
    /**
     * Visit a parse tree produced by `PlSqlParser.column_definition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_definition;
    /**
     * Visit a parse tree produced by `PlSqlParser.column_collation_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_collation_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.identity_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentity_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.identity_options_parentheses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentity_options_parentheses;
    /**
     * Visit a parse tree produced by `PlSqlParser.identity_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentity_options;
    /**
     * Visit a parse tree produced by `PlSqlParser.virtual_column_definition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVirtual_column_definition;
    /**
     * Visit a parse tree produced by `PlSqlParser.autogenerated_sequence_definition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAutogenerated_sequence_definition;
    /**
     * Visit a parse tree produced by `PlSqlParser.evaluation_edition_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEvaluation_edition_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.out_of_line_part_storage`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOut_of_line_part_storage;
    /**
     * Visit a parse tree produced by `PlSqlParser.nested_table_col_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNested_table_col_properties;
    /**
     * Visit a parse tree produced by `PlSqlParser.nested_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNested_item;
    /**
     * Visit a parse tree produced by `PlSqlParser.substitutable_column_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubstitutable_column_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.partition_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartition_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.supplemental_logging_props`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSupplemental_logging_props;
    /**
     * Visit a parse tree produced by `PlSqlParser.column_or_attribute`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_or_attribute;
    /**
     * Visit a parse tree produced by `PlSqlParser.object_type_col_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_type_col_properties;
    /**
     * Visit a parse tree produced by `PlSqlParser.constraint_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstraint_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.old_constraint_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOld_constraint_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.new_constraint_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNew_constraint_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_constraint_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_constraint_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.add_constraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdd_constraint;
    /**
     * Visit a parse tree produced by `PlSqlParser.add_constraint_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdd_constraint_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.check_constraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCheck_constraint;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_constraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_constraint;
    /**
     * Visit a parse tree produced by `PlSqlParser.enable_constraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnable_constraint;
    /**
     * Visit a parse tree produced by `PlSqlParser.disable_constraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDisable_constraint;
    /**
     * Visit a parse tree produced by `PlSqlParser.foreign_key_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForeign_key_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.references_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReferences_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.on_delete_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOn_delete_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.unique_key_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnique_key_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.primary_key_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimary_key_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.anonymous_block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnonymous_block;
    /**
     * Visit a parse tree produced by `PlSqlParser.invoker_rights_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInvoker_rights_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.call_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCall_spec;
    /**
     * Visit a parse tree produced by `PlSqlParser.java_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJava_spec;
    /**
     * Visit a parse tree produced by `PlSqlParser.c_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitC_spec;
    /**
     * Visit a parse tree produced by `PlSqlParser.c_agent_in_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitC_agent_in_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.c_parameters_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitC_parameters_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.c_external_parameter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitC_external_parameter;
    /**
     * Visit a parse tree produced by `PlSqlParser.c_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitC_property;
    /**
     * Visit a parse tree produced by `PlSqlParser.parameter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameter;
    /**
     * Visit a parse tree produced by `PlSqlParser.default_value_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefault_value_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.seq_of_declare_specs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSeq_of_declare_specs;
    /**
     * Visit a parse tree produced by `PlSqlParser.declare_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeclare_spec;
    /**
     * Visit a parse tree produced by `PlSqlParser.variable_declaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariable_declaration;
    /**
     * Visit a parse tree produced by `PlSqlParser.subtype_declaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubtype_declaration;
    /**
     * Visit a parse tree produced by `PlSqlParser.cursor_declaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCursor_declaration;
    /**
     * Visit a parse tree produced by `PlSqlParser.parameter_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameter_spec;
    /**
     * Visit a parse tree produced by `PlSqlParser.exception_declaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitException_declaration;
    /**
     * Visit a parse tree produced by `PlSqlParser.pragma_declaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPragma_declaration;
    /**
     * Visit a parse tree produced by `PlSqlParser.record_type_def`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRecord_type_def;
    /**
     * Visit a parse tree produced by `PlSqlParser.field_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitField_spec;
    /**
     * Visit a parse tree produced by `PlSqlParser.ref_cursor_type_def`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRef_cursor_type_def;
    /**
     * Visit a parse tree produced by `PlSqlParser.type_declaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_declaration;
    /**
     * Visit a parse tree produced by `PlSqlParser.table_type_def`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_type_def;
    /**
     * Visit a parse tree produced by `PlSqlParser.table_indexed_by_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_indexed_by_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.varray_type_def`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVarray_type_def;
    /**
     * Visit a parse tree produced by `PlSqlParser.seq_of_statements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSeq_of_statements;
    /**
     * Visit a parse tree produced by `PlSqlParser.label_declaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLabel_declaration;
    /**
     * Visit a parse tree produced by `PlSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement;
    /**
     * Visit a parse tree produced by `PlSqlParser.swallow_to_semi`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSwallow_to_semi;
    /**
     * Visit a parse tree produced by `PlSqlParser.assignment_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignment_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.continue_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContinue_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.exit_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExit_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.goto_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGoto_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.if_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIf_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.elsif_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElsif_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.else_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElse_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.loop_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoop_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.cursor_loop_param`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCursor_loop_param;
    /**
     * Visit a parse tree produced by `PlSqlParser.forall_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForall_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.bounds_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBounds_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.between_bound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBetween_bound;
    /**
     * Visit a parse tree produced by `PlSqlParser.lower_bound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLower_bound;
    /**
     * Visit a parse tree produced by `PlSqlParser.upper_bound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpper_bound;
    /**
     * Visit a parse tree produced by `PlSqlParser.null_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNull_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.raise_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRaise_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.return_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturn_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.call_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCall_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.pipe_row_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPipe_row_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.selection_directive`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelection_directive;
    /**
     * Visit a parse tree produced by `PlSqlParser.error_directive`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitError_directive;
    /**
     * Visit a parse tree produced by `PlSqlParser.selection_directive_body`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelection_directive_body;
    /**
     * Visit a parse tree produced by `PlSqlParser.body`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBody;
    /**
     * Visit a parse tree produced by `PlSqlParser.exception_handler`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitException_handler;
    /**
     * Visit a parse tree produced by `PlSqlParser.trigger_block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrigger_block;
    /**
     * Visit a parse tree produced by `PlSqlParser.tps_block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTps_block;
    /**
     * Visit a parse tree produced by `PlSqlParser.block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlock;
    /**
     * Visit a parse tree produced by `PlSqlParser.sql_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSql_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.execute_immediate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExecute_immediate;
    /**
     * Visit a parse tree produced by `PlSqlParser.dynamic_returning_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDynamic_returning_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.data_manipulation_language_statements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitData_manipulation_language_statements;
    /**
     * Visit a parse tree produced by `PlSqlParser.cursor_manipulation_statements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCursor_manipulation_statements;
    /**
     * Visit a parse tree produced by `PlSqlParser.close_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClose_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.open_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpen_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.fetch_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFetch_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.variable_or_collection`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariable_or_collection;
    /**
     * Visit a parse tree produced by `PlSqlParser.open_for_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpen_for_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.transaction_control_statements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransaction_control_statements;
    /**
     * Visit a parse tree produced by `PlSqlParser.set_transaction_command`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_transaction_command;
    /**
     * Visit a parse tree produced by `PlSqlParser.set_constraint_command`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_constraint_command;
    /**
     * Visit a parse tree produced by `PlSqlParser.commit_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommit_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.write_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWrite_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.rollback_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRollback_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.savepoint_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSavepoint_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.collection_method_call`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCollection_method_call;
    /**
     * Visit a parse tree produced by `PlSqlParser.explain_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplain_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.select_only_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelect_only_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.select_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelect_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.with_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWith_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.with_factoring_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWith_factoring_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.subquery_factoring_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubquery_factoring_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.search_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSearch_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.cycle_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCycle_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.subav_factoring_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubav_factoring_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.subav_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubav_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.hierarchies_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHierarchies_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.filter_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFilter_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.filter_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFilter_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.add_calcs_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdd_calcs_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.add_calc_meas_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdd_calc_meas_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.subquery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubquery;
    /**
     * Visit a parse tree produced by `PlSqlParser.subquery_basic_elements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubquery_basic_elements;
    /**
     * Visit a parse tree produced by `PlSqlParser.subquery_operation_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubquery_operation_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.query_block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuery_block;
    /**
     * Visit a parse tree produced by `PlSqlParser.selected_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelected_list;
    /**
     * Visit a parse tree produced by `PlSqlParser.from_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrom_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.select_list_elements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelect_list_elements;
    /**
     * Visit a parse tree produced by `PlSqlParser.table_ref_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_ref_list;
    /**
     * Visit a parse tree produced by `PlSqlParser.table_ref`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_ref;
    /**
     * Visit a parse tree produced by `PlSqlParser.table_ref_aux`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_ref_aux;
    /**
     * Visit a parse tree produced by the `table_ref_aux_internal_one`
     * labeled alternative in `PlSqlParser.table_ref_aux_internal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_ref_aux_internal_one;
    /**
     * Visit a parse tree produced by the `table_ref_aux_internal_two`
     * labeled alternative in `PlSqlParser.table_ref_aux_internal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_ref_aux_internal_two;
    /**
     * Visit a parse tree produced by the `table_ref_aux_internal_thre`
     * labeled alternative in `PlSqlParser.table_ref_aux_internal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_ref_aux_internal_thre;
    /**
     * Visit a parse tree produced by `PlSqlParser.join_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoin_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.join_on_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoin_on_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.join_using_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoin_using_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.outer_join_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOuter_join_type;
    /**
     * Visit a parse tree produced by `PlSqlParser.query_partition_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuery_partition_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.flashback_query_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFlashback_query_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.pivot_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPivot_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.pivot_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPivot_element;
    /**
     * Visit a parse tree produced by `PlSqlParser.pivot_for_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPivot_for_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.pivot_in_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPivot_in_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.pivot_in_clause_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPivot_in_clause_element;
    /**
     * Visit a parse tree produced by `PlSqlParser.pivot_in_clause_elements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPivot_in_clause_elements;
    /**
     * Visit a parse tree produced by `PlSqlParser.unpivot_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivot_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.unpivot_in_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivot_in_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.unpivot_in_elements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivot_in_elements;
    /**
     * Visit a parse tree produced by `PlSqlParser.hierarchical_query_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHierarchical_query_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.start_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStart_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.group_by_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroup_by_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.group_by_elements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroup_by_elements;
    /**
     * Visit a parse tree produced by `PlSqlParser.rollup_cube_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRollup_cube_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.grouping_sets_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrouping_sets_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.grouping_sets_elements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrouping_sets_elements;
    /**
     * Visit a parse tree produced by `PlSqlParser.having_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHaving_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.model_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModel_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.cell_reference_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCell_reference_options;
    /**
     * Visit a parse tree produced by `PlSqlParser.return_rows_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturn_rows_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.reference_model`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReference_model;
    /**
     * Visit a parse tree produced by `PlSqlParser.main_model`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMain_model;
    /**
     * Visit a parse tree produced by `PlSqlParser.model_column_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModel_column_clauses;
    /**
     * Visit a parse tree produced by `PlSqlParser.model_column_partition_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModel_column_partition_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.model_column_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModel_column_list;
    /**
     * Visit a parse tree produced by `PlSqlParser.model_column`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModel_column;
    /**
     * Visit a parse tree produced by `PlSqlParser.model_rules_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModel_rules_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.model_rules_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModel_rules_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.model_rules_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModel_rules_element;
    /**
     * Visit a parse tree produced by `PlSqlParser.cell_assignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCell_assignment;
    /**
     * Visit a parse tree produced by `PlSqlParser.model_iterate_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModel_iterate_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.until_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUntil_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.order_by_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrder_by_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.order_by_elements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrder_by_elements;
    /**
     * Visit a parse tree produced by `PlSqlParser.offset_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOffset_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.fetch_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFetch_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.for_update_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFor_update_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.for_update_of_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFor_update_of_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.for_update_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFor_update_options;
    /**
     * Visit a parse tree produced by `PlSqlParser.update_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdate_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.update_set_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdate_set_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.column_based_update_set_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_based_update_set_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.delete_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDelete_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.insert_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsert_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.single_table_insert`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingle_table_insert;
    /**
     * Visit a parse tree produced by `PlSqlParser.multi_table_insert`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMulti_table_insert;
    /**
     * Visit a parse tree produced by `PlSqlParser.multi_table_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMulti_table_element;
    /**
     * Visit a parse tree produced by `PlSqlParser.conditional_insert_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConditional_insert_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.conditional_insert_when_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConditional_insert_when_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.conditional_insert_else_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConditional_insert_else_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.insert_into_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsert_into_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.values_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValues_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.merge_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMerge_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.merge_update_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMerge_update_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.merge_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMerge_element;
    /**
     * Visit a parse tree produced by `PlSqlParser.merge_update_delete_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMerge_update_delete_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.merge_insert_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMerge_insert_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.selected_tableview`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelected_tableview;
    /**
     * Visit a parse tree produced by `PlSqlParser.lock_table_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLock_table_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.wait_nowait_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWait_nowait_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.lock_table_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLock_table_element;
    /**
     * Visit a parse tree produced by `PlSqlParser.lock_mode`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLock_mode;
    /**
     * Visit a parse tree produced by `PlSqlParser.general_table_ref`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeneral_table_ref;
    /**
     * Visit a parse tree produced by `PlSqlParser.static_returning_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatic_returning_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.error_logging_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitError_logging_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.error_logging_into_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitError_logging_into_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.error_logging_reject_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitError_logging_reject_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.dml_table_expression_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDml_table_expression_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.table_collection_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_collection_expression;
    /**
     * Visit a parse tree produced by `PlSqlParser.subquery_restriction_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubquery_restriction_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.sample_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSample_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.seed_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSeed_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.condition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCondition;
    /**
     * Visit a parse tree produced by `PlSqlParser.expressions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressions;
    /**
     * Visit a parse tree produced by `PlSqlParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression;
    /**
     * Visit a parse tree produced by `PlSqlParser.cursor_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCursor_expression;
    /**
     * Visit a parse tree produced by `PlSqlParser.logical_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogical_expression;
    /**
     * Visit a parse tree produced by `PlSqlParser.unary_logical_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnary_logical_expression;
    /**
     * Visit a parse tree produced by `PlSqlParser.unary_logical_operation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnary_logical_operation;
    /**
     * Visit a parse tree produced by `PlSqlParser.logical_operation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogical_operation;
    /**
     * Visit a parse tree produced by `PlSqlParser.multiset_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiset_expression;
    /**
     * Visit a parse tree produced by `PlSqlParser.relational_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelational_expression;
    /**
     * Visit a parse tree produced by `PlSqlParser.compound_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompound_expression;
    /**
     * Visit a parse tree produced by `PlSqlParser.relational_operator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelational_operator;
    /**
     * Visit a parse tree produced by `PlSqlParser.in_elements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIn_elements;
    /**
     * Visit a parse tree produced by `PlSqlParser.between_elements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBetween_elements;
    /**
     * Visit a parse tree produced by `PlSqlParser.concatenation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConcatenation;
    /**
     * Visit a parse tree produced by `PlSqlParser.interval_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterval_expression;
    /**
     * Visit a parse tree produced by `PlSqlParser.model_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModel_expression;
    /**
     * Visit a parse tree produced by `PlSqlParser.model_expression_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModel_expression_element;
    /**
     * Visit a parse tree produced by `PlSqlParser.single_column_for_loop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingle_column_for_loop;
    /**
     * Visit a parse tree produced by `PlSqlParser.multi_column_for_loop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMulti_column_for_loop;
    /**
     * Visit a parse tree produced by `PlSqlParser.unary_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnary_expression;
    /**
     * Visit a parse tree produced by `PlSqlParser.implicit_cursor_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImplicit_cursor_expression;
    /**
     * Visit a parse tree produced by `PlSqlParser.collection_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCollection_expression;
    /**
     * Visit a parse tree produced by `PlSqlParser.case_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCase_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.simple_case_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimple_case_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.simple_case_when_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimple_case_when_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.searched_case_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSearched_case_statement;
    /**
     * Visit a parse tree produced by `PlSqlParser.searched_case_when_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSearched_case_when_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.case_else_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCase_else_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.atom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAtom;
    /**
     * Visit a parse tree produced by `PlSqlParser.quantified_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuantified_expression;
    /**
     * Visit a parse tree produced by `PlSqlParser.string_function`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitString_function;
    /**
     * Visit a parse tree produced by `PlSqlParser.standard_function`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStandard_function;
    /**
     * Visit a parse tree produced by `PlSqlParser.json_function`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJson_function;
    /**
     * Visit a parse tree produced by `PlSqlParser.json_object_content`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJson_object_content;
    /**
     * Visit a parse tree produced by `PlSqlParser.json_object_entry`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJson_object_entry;
    /**
     * Visit a parse tree produced by `PlSqlParser.json_table_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJson_table_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.json_array_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJson_array_element;
    /**
     * Visit a parse tree produced by `PlSqlParser.json_on_null_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJson_on_null_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.json_return_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJson_return_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.json_transform_op`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJson_transform_op;
    /**
     * Visit a parse tree produced by `PlSqlParser.json_column_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJson_column_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.json_column_definition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJson_column_definition;
    /**
     * Visit a parse tree produced by `PlSqlParser.json_query_returning_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJson_query_returning_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.json_query_return_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJson_query_return_type;
    /**
     * Visit a parse tree produced by `PlSqlParser.json_query_wrapper_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJson_query_wrapper_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.json_query_on_error_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJson_query_on_error_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.json_query_on_empty_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJson_query_on_empty_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.json_value_return_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJson_value_return_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.json_value_return_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJson_value_return_type;
    /**
     * Visit a parse tree produced by `PlSqlParser.json_value_on_mismatch_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJson_value_on_mismatch_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteral;
    /**
     * Visit a parse tree produced by `PlSqlParser.numeric_function_wrapper`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumeric_function_wrapper;
    /**
     * Visit a parse tree produced by `PlSqlParser.numeric_function`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumeric_function;
    /**
     * Visit a parse tree produced by `PlSqlParser.listagg_overflow_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListagg_overflow_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.other_function`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOther_function;
    /**
     * Visit a parse tree produced by `PlSqlParser.over_clause_keyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOver_clause_keyword;
    /**
     * Visit a parse tree produced by `PlSqlParser.within_or_over_clause_keyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWithin_or_over_clause_keyword;
    /**
     * Visit a parse tree produced by `PlSqlParser.standard_prediction_function_keyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStandard_prediction_function_keyword;
    /**
     * Visit a parse tree produced by `PlSqlParser.over_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOver_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.windowing_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowing_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.windowing_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowing_type;
    /**
     * Visit a parse tree produced by `PlSqlParser.windowing_elements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowing_elements;
    /**
     * Visit a parse tree produced by `PlSqlParser.using_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUsing_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.using_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUsing_element;
    /**
     * Visit a parse tree produced by `PlSqlParser.collect_order_by_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCollect_order_by_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.within_or_over_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWithin_or_over_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.string_delimiter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitString_delimiter;
    /**
     * Visit a parse tree produced by `PlSqlParser.cost_matrix_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCost_matrix_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.xml_passing_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_passing_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.xml_attributes_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_attributes_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.xml_namespaces_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_namespaces_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.xml_table_column`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_table_column;
    /**
     * Visit a parse tree produced by `PlSqlParser.xml_general_default_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_general_default_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.xml_multiuse_expression_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_multiuse_expression_element;
    /**
     * Visit a parse tree produced by `PlSqlParser.xmlroot_param_version_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmlroot_param_version_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.xmlroot_param_standalone_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmlroot_param_standalone_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.xmlserialize_param_enconding_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmlserialize_param_enconding_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.xmlserialize_param_version_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmlserialize_param_version_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.xmlserialize_param_ident_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmlserialize_param_ident_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.sql_plus_command_no_semicolon`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSql_plus_command_no_semicolon;
    /**
     * Visit a parse tree produced by `PlSqlParser.sql_plus_command`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSql_plus_command;
    /**
     * Visit a parse tree produced by `PlSqlParser.start_command`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStart_command;
    /**
     * Visit a parse tree produced by `PlSqlParser.whenever_command`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhenever_command;
    /**
     * Visit a parse tree produced by `PlSqlParser.set_command`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_command;
    /**
     * Visit a parse tree produced by `PlSqlParser.timing_command`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTiming_command;
    /**
     * Visit a parse tree produced by `PlSqlParser.partition_extension_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartition_extension_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.column_alias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_alias;
    /**
     * Visit a parse tree produced by `PlSqlParser.table_alias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_alias;
    /**
     * Visit a parse tree produced by `PlSqlParser.where_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhere_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.quantitative_where_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuantitative_where_stmt;
    /**
     * Visit a parse tree produced by `PlSqlParser.into_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInto_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.xml_column_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_column_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.cost_class_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCost_class_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.attribute_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttribute_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.savepoint_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSavepoint_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.rollback_segment_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRollback_segment_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.table_var_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_var_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.schema_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSchema_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.routine_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoutine_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.package_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPackage_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.implementation_type_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImplementation_type_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.parameter_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameter_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.reference_model_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReference_model_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.main_model_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMain_model_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.container_tableview_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContainer_tableview_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.aggregate_function_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregate_function_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.query_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuery_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.grantee_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrantee_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.role_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRole_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.constraint_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstraint_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.label_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLabel_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.type_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.sequence_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSequence_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.exception_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitException_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.function_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.procedure_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedure_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.trigger_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrigger_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.variable_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariable_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.index_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.cursor_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCursor_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.record_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRecord_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.collection_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCollection_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.link_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLink_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.local_link_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocal_link_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.connection_qualifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConnection_qualifier;
    /**
     * Visit a parse tree produced by `PlSqlParser.column_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.tableview_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableview_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.xmltable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmltable;
    /**
     * Visit a parse tree produced by `PlSqlParser.char_set_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitChar_set_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.synonym_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSynonym_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.schema_object_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSchema_object_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.dir_object_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDir_object_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.user_object_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUser_object_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.grant_object_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrant_object_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.column_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_list;
    /**
     * Visit a parse tree produced by `PlSqlParser.paren_column_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParen_column_list;
    /**
     * Visit a parse tree produced by `PlSqlParser.keep_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKeep_clause;
    /**
     * Visit a parse tree produced by `PlSqlParser.function_argument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_argument;
    /**
     * Visit a parse tree produced by `PlSqlParser.function_argument_analytic`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_argument_analytic;
    /**
     * Visit a parse tree produced by `PlSqlParser.function_argument_modeling`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_argument_modeling;
    /**
     * Visit a parse tree produced by `PlSqlParser.respect_or_ignore_nulls`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRespect_or_ignore_nulls;
    /**
     * Visit a parse tree produced by `PlSqlParser.argument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArgument;
    /**
     * Visit a parse tree produced by `PlSqlParser.type_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_spec;
    /**
     * Visit a parse tree produced by `PlSqlParser.datatype`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatatype;
    /**
     * Visit a parse tree produced by `PlSqlParser.precision_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecision_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.native_datatype_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNative_datatype_element;
    /**
     * Visit a parse tree produced by `PlSqlParser.bind_variable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBind_variable;
    /**
     * Visit a parse tree produced by `PlSqlParser.general_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeneral_element;
    /**
     * Visit a parse tree produced by `PlSqlParser.general_element_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeneral_element_part;
    /**
     * Visit a parse tree produced by `PlSqlParser.table_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_element;
    /**
     * Visit a parse tree produced by `PlSqlParser.object_privilege`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_privilege;
    /**
     * Visit a parse tree produced by `PlSqlParser.system_privilege`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSystem_privilege;
    /**
     * Visit a parse tree produced by `PlSqlParser.constant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstant;
    /**
     * Visit a parse tree produced by `PlSqlParser.numeric`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumeric;
    /**
     * Visit a parse tree produced by `PlSqlParser.numeric_negative`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumeric_negative;
    /**
     * Visit a parse tree produced by `PlSqlParser.quoted_string`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuoted_string;
    /**
     * Visit a parse tree produced by `PlSqlParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifier;
    /**
     * Visit a parse tree produced by `PlSqlParser.id_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitId_expression;
    /**
     * Visit a parse tree produced by `PlSqlParser.inquiry_directive`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInquiry_directive;
    /**
     * Visit a parse tree produced by `PlSqlParser.outer_join_sign`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOuter_join_sign;
    /**
     * Visit a parse tree produced by `PlSqlParser.regular_id`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRegular_id;
    /**
     * Visit a parse tree produced by `PlSqlParser.non_reserved_keywords_in_18c`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNon_reserved_keywords_in_18c;
    /**
     * Visit a parse tree produced by `PlSqlParser.non_reserved_keywords_in_12c`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNon_reserved_keywords_in_12c;
    /**
     * Visit a parse tree produced by `PlSqlParser.non_reserved_keywords_pre12c`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNon_reserved_keywords_pre12c;
    /**
     * Visit a parse tree produced by `PlSqlParser.string_function_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitString_function_name;
    /**
     * Visit a parse tree produced by `PlSqlParser.numeric_function_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumeric_function_name;
}
