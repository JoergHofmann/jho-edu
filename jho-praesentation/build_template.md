<?xml version="1.0" encoding="UTF-8"?>

<project name="">

	<target name="prepare">
		<property environment="env" />
		<delete includeemptydirs="true">
			<fileset dir="0_TMP" includes="*"/>
			<fileset dir="0_OUT" includes="*" />
			<fileset dir="${env.local_www_dir}/${ant.project.name}" includes="*" />
		</delete>
	</target>

	<target name="reveal" unless="done">
		<exec executable="upp" output="0_TMP/${ant.project.name}.md">
		    <arg line="-l jhopraesentation.lua -l Mode${slidetarget}.lua -l html5.lua ${ant.project.name}.md" />
		</exec>
		<exec executable="pandoc" dir="0_TMP/">
			<arg line="${ant.project.name}.md -t revealjs -s -i -V revealjs-url='.' -o ${ant.project.name}.html" />
		</exec>
		<copy todir="${env.local_www_dir}/${ant.project.name}/dist">
			<fileset dir="${env.HOME}/jho-lib/reveal.js/dist" />
		</copy>
		<copy todir="${env.local_www_dir}/${ant.project.name}/plugin">
			<fileset dir="${env.HOME}/jho-lib/reveal.js/plugin" />
		</copy>
		<copy todir="${env.local_www_dir}/${ant.project.name}/bilder">
			<fileset dir="bilder" includes="*.*" />
		</copy>
		<copy file="0_TMP/${ant.project.name}.html" tofile="${env.local_www_dir}/${ant.project.name}/index.html" />
	</target>

	<target name="slides" depends="prepare" unless="done">
		<property name="slidetarget" value="Slides" />
		<antcall target="reveal" />
		<property name="done" value="done" />
	</target>

	<target name="handout" depends="prepare" unless="done">
		<property name="slidetarget" value="SlidesHandout" />
                <antcall target="reveal" />
		<exec executable="decktape">
			<arg line="reveal -s 1680x1050 --screenshots --screenshots-directory=./ http://${env.local_www_server}/${ant.project.name}/index.html 0_TMP/${ant.project.name}-handout-slides.pdf" />
		</exec>
		<exec executable="upp" output="0_TMP/${ant.project.name}-handout.md">
			<arg line="-l jhopraesentation -l ModeHandout.lua -l context.lua ${ant.project.name}.md" />
		</exec>
		<exec executable="pandoc" dir="0_TMP/">
			<arg line="${ant.project.name}-handout.md -t context -s -o ${ant.project.name}-handout-con.tex" />
		</exec>
		<exec executable="context" dir="0_TMP/" >
			<arg line="${ant.project.name}-handout-con.tex" />
		</exec>
		<move file="0_TMP/${ant.project.name}-handout-con.pdf" tofile="0_OUT/${ant.project.name}-handout.pdf" />
	        <property name="done" value="done" />
	</target>

	<target name="notes" depends="prepare" unless="done">
		<antcall target="reveal" />
		<exec executable="decktape">
			<arg line="reveal -s 1680x1050 --screenshots --screenshots-directory=./ http://${env.local_www_server}/${ant.project.name}/index.html 0_TMP/${ant.project.name}-handout-slides.pdf" />
		</exec>
		<exec executable="upp" output="0_TMP/${ant.project.name}-notes.md">
			<arg line="-l jhopraesentation -l ModeNotes.lua -l context.lua ${ant.project.name}.md" />
		</exec>
		<exec executable="pandoc" dir="0_TMP/">
			<arg line="${ant.project.name}-notes.md -t context -s -o ${ant.project.name}-notes-con.tex" />
		</exec>
		<exec executable="context" dir="0_TMP/" >
			<arg line="${ant.project.name}-notes-con.tex" />
		</exec>
		<move file="0_TMP/${ant.project.name}-notes-con.pdf" tofile="0_OUT/${ant.project.name}-notes.pdf" />
	        <property name="done" value="done" />
	</target>
</project>
