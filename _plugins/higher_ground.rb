module Jekyll
  class RenderHigherGroundTag < Liquid::Tag

    require "shellwords"

    def initialize(tag_name, text, tokens)
      super
      @text = text.shellsplit
    end

    def render(context)
      %(
<figure id='#{@text[0]}'>
    <div id='#{@text[0]}-panorama' class='higherground_panorama'></div>
    <div id='#{@text[0]}-map' class='higherground_map'></div>
</figure>
<script>higher_ground(#{@text})</script>
    )
    end
  end
end

Liquid::Template.register_tag('higherground', Jekyll::RenderHigherGroundTag)

